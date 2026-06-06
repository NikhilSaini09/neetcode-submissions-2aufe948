class Twitter {
    constructor() {
        this.tweets = new Map();
        this.follows = new Map();
        this.time = 0;
    }

    /** * @param {number} userId 
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId).push({ time: this.time++, tweetId });
    }

    /** * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const pq = new PriorityQueue((a, b) => b.time - a.time);

        if (this.tweets.has(userId)) {
            const userTweets = this.tweets.get(userId);
            const n = userTweets.length;
            if (n > 0) {
                const lastTweet = userTweets[n - 1];
                pq.enqueue({
                    time: lastTweet.time,
                    tweetId: lastTweet.tweetId,
                    user: userId,
                    index: n - 1
                });
            }
        }

        if (this.follows.has(userId)) {
            for (const followeeId of this.follows.get(userId)) {
                if (followeeId === userId) continue; 
                
                if (this.tweets.has(followeeId)) {
                    const followeeTweets = this.tweets.get(followeeId);
                    const n = followeeTweets.length;
                    if (n > 0) {
                        const lastTweet = followeeTweets[n - 1];
                        pq.enqueue({
                            time: lastTweet.time,
                            tweetId: lastTweet.tweetId,
                            user: followeeId,
                            index: n - 1
                        });
                    }
                }
            }
        }

        const recentTweets = [];

        while (!pq.isEmpty() && recentTweets.length < 10) {
            const data = pq.dequeue();
            recentTweets.push(data.tweetId);

            if (data.index > 0) {
                const nextIndex = data.index - 1;
                const nextTweet = this.tweets.get(data.user)[nextIndex];
                pq.enqueue({
                    time: nextTweet.time,
                    tweetId: nextTweet.tweetId,
                    user: data.user,
                    index: nextIndex
                });
            }
        }

        return recentTweets;
    }

    /** * @param {number} followerId 
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(followerId == followeeId) return;
        if (!this.follows.has(followerId)) {
            this.follows.set(followerId, new Set());
        }
        this.follows.get(followerId).add(followeeId);
    }

    /** * @param {number} followerId 
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.follows.has(followerId)) {
            this.follows.get(followerId).delete(followeeId);
        }
    }
}
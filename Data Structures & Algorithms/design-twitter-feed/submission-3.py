class Twitter:
    def __init__(self):
        self.tweets = collections.defaultdict(list)
        self.follows = collections.defaultdict(set)
        self.time = 0

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets[userId].append([self.time, tweetId])
        self.time += 1

    def getNewsFeed(self, userId: int) -> list[int]:
        pq = []
        
        if userId in self.tweets and self.tweets[userId]:
            n = len(self.tweets[userId])
            t, tweet_id = self.tweets[userId][n - 1]
            heapq.heappush(pq, (-t, tweet_id, userId, n - 1))
            
        for followee_id in self.follows[userId]:
            if followee_id != userId and followee_id in self.tweets and self.tweets[followee_id]:
                n = len(self.tweets[followee_id])
                t, tweet_id = self.tweets[followee_id][n - 1]
                heapq.heappush(pq, (-t, tweet_id, followee_id, n - 1))
                
        recent_tweets = []
        
        while pq and len(recent_tweets) < 10:
            neg_time, tweet_id, user, index = heapq.heappop(pq)
            recent_tweets.append(tweet_id)
            
            if index > 0:
                next_t, next_tweet_id = self.tweets[user][index - 1]
                heapq.heappush(pq, (-next_t, next_tweet_id, user, index - 1))
                
        return recent_tweets

    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId != followeeId:
            self.follows[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        self.follows[followerId].discard(followeeId)
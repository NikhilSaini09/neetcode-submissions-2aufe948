class Twitter {

    private static class Tweet {
        int id;
        int time;
        Tweet(int id, int time) {
            this.id = id;
            this.time = time;
        }
    }

    private Map<Integer, List<Tweet>> tweets;
    private Map<Integer, Set<Integer>> follows;
    private int time;

    public Twitter() {
        this.tweets = new HashMap<>();
        this.follows = new HashMap<>();
        this.time = 0;
    }
    
    public void postTweet(int userId, int tweetId) {
        tweets.putIfAbsent(userId, new ArrayList<>());
        tweets.get(userId).add(new Tweet(tweetId, time++));
    }
    
    public List<Integer> getNewsFeed(int userId) {
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> b[0] - a[0]);

        if (tweets.containsKey(userId) && !tweets.get(userId).isEmpty()) {
            List<Tweet> userTweets = tweets.get(userId);
            int idx = userTweets.size() - 1;
            Tweet t = userTweets.get(idx);
            pq.add(new int[]{t.time, t.id, userId, idx});
        }

        if (follows.containsKey(userId)) {
            for (int followeeId : follows.get(userId)) {
                if (tweets.containsKey(followeeId) && !tweets.get(followeeId).isEmpty()) {
                    List<Tweet> fTweets = tweets.get(followeeId);
                    int idx = fTweets.size() - 1;
                    Tweet t = fTweets.get(idx);
                    pq.add(new int[]{t.time, t.id, followeeId, idx});
                }
            }
        }

        List<Integer> recentTweets = new ArrayList<>();

        while (!pq.isEmpty() && recentTweets.size() < 10) {
            int[] top = pq.poll();
            int tweetId = top[1];
            int uId = top[2];
            int idx = top[3];

            recentTweets.add(tweetId);

            if (idx > 0) {
                Tweet nextTweet = tweets.get(uId).get(idx - 1);
                pq.add(new int[]{nextTweet.time, nextTweet.id, uId, idx - 1});
            }
        }

        return recentTweets;
    }
    
    public void follow(int followerId, int followeeId) {
        if(followerId == followeeId) return;
        follows.putIfAbsent(followerId, new HashSet<>());
        follows.get(followerId).add(followeeId);
    }
    
    public void unfollow(int followerId, int followeeId) {
        if (follows.containsKey(followerId)) {
            follows.get(followerId).remove(followeeId);
        }
    }
}

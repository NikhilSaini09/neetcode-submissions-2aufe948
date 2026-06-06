class Twitter {
    unordered_map<int, vector<pair<int, int>>> tweets;
    unordered_map<int, unordered_set<int>> follows;
    int time;
public:
    Twitter() {
        time = 0;
    }
    
    void postTweet(int userId, int tweetId) {
        tweets[userId].push_back({time++, tweetId});
    }
    
    vector<int> getNewsFeed(int userId) {
        priority_queue<pair<int, pair<int, pair<int, int>>>> pq;
        auto it = tweets.find(userId);
        if(it != tweets.end()) {
            int n = it->second.size();
            pair<int, int> &p = it->second[n - 1];
            pq.push({p.first, {p.second, {userId, n-1}}});
        }

        for(int s : follows[userId]) {
            auto it = tweets.find(s);
            if(it != tweets.end()) {
                int n = it->second.size();
                pair<int, int> &p = it->second[n - 1];
                pq.push({p.first, {p.second, {s, n-1}}});
            }
        }

        // vector<int> recentTweets(10);
        vector<int> recentTweets;
        recentTweets.reserve(10);

        // for(int i=0; i<10; ++i) {
        while(!pq.empty() && recentTweets.size() != 10) {
            pair<int, pair<int, int>> data = pq.top().second;
            pq.pop();

            int index = data.second.second;
            if(index > 0) {
                int user = data.second.first;
                pair<int, int> &p = tweets[user][index - 1];
                pq.push({p.first, {p.second, {user, index - 1}}});
            }

            // recentTweets[i] = data.first;
            recentTweets.push_back(data.first);
        }

        return recentTweets;
    }
    
    void follow(int followerId, int followeeId) {
        if(followerId == followeeId) return;
        follows[followerId].insert(followeeId);
    }
    
    void unfollow(int followerId, int followeeId) {
        if(followerId == followeeId) return;
        follows[followerId].erase(followeeId);
    }
};

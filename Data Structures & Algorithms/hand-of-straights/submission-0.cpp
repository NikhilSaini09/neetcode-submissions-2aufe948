class Solution {
public:
    bool isNStraightHand(vector<int>& hand, int groupSize) {
        int n = hand.size();
        if(n % groupSize != 0) return false;

        map<int, int> freq;
        for(int x : hand) {
            freq[x]++;
        }

        while(!freq.empty()) {
            auto it = freq.begin();

            int start = it->first;
            int count = it->second;

            for(int i=start; i<(groupSize + start); ++i) {
                auto nextIt = freq.find(i);
                if(nextIt == freq.end() || nextIt->second < count) return false;

                nextIt->second -= count;
                if(nextIt->second == 0) freq.erase(nextIt);
            }
        }

        return true;
    }
};

class Solution {
public:
    bool mergeTriplets(vector<vector<int>>& triplets, vector<int>& target) {
        int ans = 0;
        for(const auto &t : triplets) {
            if(t[0] <= target[0] && t[1] <= target[1] && t[2] <= target[2]) {
                if(t[0] == target[0]) ans |= 1;
                if(t[1] == target[1]) ans |= 2;
                if(t[2] == target[2]) ans |= 4;
            }
        }
        return ans == 7;
        
        
        // int a = 0, b = 0, c = 0;
        // for(const auto &t : triplets) {
        //     if(t[0] <= target[0] && t[1] <= target[1] && t[2] <= target[2]) {
        //         a = max(a, t[0]);
        //         b = max(b, t[1]);
        //         c = max(c, t[2]);
        //     }
        // }
        // return a == target[0] && b == target[1] && c == target[2];
    }
};

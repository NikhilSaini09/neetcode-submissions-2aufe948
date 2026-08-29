class Solution {
public:
    int jump(vector<int>& nums) {
        int cntJumps = 0, farthest = 0, end = 0;
        for(int i = 0; i < nums.size() - 1; ++i) {
            farthest = max(farthest, nums[i] + i);
            if(i == end) {
                ++cntJumps;
                end = farthest;
            }
        }
        return cntJumps;
    }
};

class Solution {
public:
    bool canJump(vector<int>& nums) {
        int farther = 0;

        for(int i=0; i<nums.size(); ++i) {
            if(farther < i) return false;
            farther = max(farther, nums[i] + i);
        }

        return true;
    }
};

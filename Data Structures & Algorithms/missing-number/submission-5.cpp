class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int xorAll = 0;
        int xorArr = 0;

        for(int i=0; i<nums.size(); i++) {
            xorArr ^= nums[i];
            xorAll ^= (i+1);
        }

        return (xorAll ^ xorArr);
    }
};

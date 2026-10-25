class Solution {
    public int singleNumber(int[] nums) {
        int xr = 0;
        for(int i = 0; i < nums.length; ++i) xr ^= nums[i];
        return xr;
    }
}

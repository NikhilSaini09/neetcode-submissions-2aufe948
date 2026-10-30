class Solution {
    public int missingNumber(int[] nums) {
        int xr = 0, xa = 0;
        for(int i = 0; i < nums.length; ++i) {
            xr ^= nums[i];
            xa ^= (i + 1);
        }
        return xa ^ xr;
    }
}

class Solution {
    public int jump(int[] nums) {
        int cntJumps = 0, farthest = 0, end = 0;
        for(int i = 0; i < nums.length - 1; ++i) {
            farthest = Math.max(farthest, nums[i] + i);
            if(i == end) {
                ++cntJumps;
                end = farthest;
            }
        }
        return cntJumps;
    }
}

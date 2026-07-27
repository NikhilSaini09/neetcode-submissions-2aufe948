class Solution {
    public int rob(int[] nums) {
        int n = nums.length;
        int with = nums[0], without = 0;

        for(int i = 1; i < n; ++i) {
            int temp = Math.max(with, without);
            with = without + nums[i];
            without = temp;
        }

        return Math.max(with, without);
    }
}

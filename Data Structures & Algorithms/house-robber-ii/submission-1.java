class Solution {
    public int rob(int[] nums) {
        int n = nums.length;
        if(n == 1) return nums[0];
        if(n == 2) return Math.max(nums[0], nums[1]);

        return Math.max(robl(nums, 0, n - 1), robl(nums, 1, n));
    }
    private int robl(int[] nums, int l, int r) {
        int n = nums.length;
        int with = 0, without = 0;

        for(int i = l; i < r; ++i) {
            int temp = Math.max(with, without);
            with = without + nums[i];
            without = temp;
        }

        return Math.max(with, without);
    }
}

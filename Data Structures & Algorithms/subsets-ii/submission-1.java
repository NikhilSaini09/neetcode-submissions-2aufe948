class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> sol = new ArrayList<>();
        List<Integer> temp = new ArrayList<>();
        allSubsets(nums, 0, temp, sol);
        return sol;
    }
    private void allSubsets(int[] nums, int ind, List<Integer> temp, List<List<Integer>> sol) {
        sol.add(new ArrayList<>(temp));

        for(int i = ind; i < nums.length; ++i) {
            if(ind < i && nums[i] == nums[i - 1]) continue;

            temp.add(nums[i]);
            allSubsets(nums, i + 1, temp, sol);
            temp.remove(temp.size() - 1);
        }
    }
}

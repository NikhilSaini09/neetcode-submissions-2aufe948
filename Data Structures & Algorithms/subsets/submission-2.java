class Solution {
    private List<List<Integer>> ans = new ArrayList<>();
    public List<List<Integer>> subsets(int[] nums) {
        List<Integer> path = new ArrayList<>();
        dfs(nums, path, 0);
        return ans;
    }
    private void dfs(int[] nums, List<Integer> path, int idx) {
        ans.add(new ArrayList<>(path));

        for(int i = idx; i < nums.length; ++i) {
            path.add(nums[i]);
            dfs(nums, path, i + 1);
            path.remove(path.size() - 1);
        }
    }
}

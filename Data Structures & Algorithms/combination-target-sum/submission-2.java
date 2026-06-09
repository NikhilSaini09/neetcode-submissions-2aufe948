class Solution {
    public List<List<Integer>> combinationSum(int[] nums, int target) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> temp = new ArrayList<>();

        generateCombination(nums, target, 0, temp, ans);
        return ans;
    }
    private void generateCombination(int[] arr, int target, int ind, List<Integer> comb
                    , List<List<Integer>> sol) {
        if(target == 0) {
            sol.add(new ArrayList<>(comb));
            return;
        }
        if(target < 0 || ind == arr.length) return;

        comb.add(arr[ind]);
        generateCombination(arr, target - arr[ind], ind, comb, sol);
        comb.remove(comb.size() - 1);

        generateCombination(arr, target, ind+1, comb, sol);
    }
}

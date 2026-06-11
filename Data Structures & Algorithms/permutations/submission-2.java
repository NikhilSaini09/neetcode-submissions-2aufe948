class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        backtrack(nums, 0, res);
        return res;
    }

    private void backtrack(int[] nums, int start, List<List<Integer>> res) {
        if (start == nums.length) {
            List<Integer> currentPermutation = new ArrayList<>();
            for (int num : nums) {
                currentPermutation.add(num);
            }
            res.add(currentPermutation);
            return;
        }

        for (int i = start; i < nums.length; i++) {
            swap(nums, start, i);
            backtrack(nums, start + 1, res);
            swap(nums, start, i);
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }


    // private List<List<Integer>> ans = new ArrayList<>();
    // public List<List<Integer>> permute(int[] nums) {
    //     List<Integer> arr = new ArrayList<>();
    //     for(int num : nums) {
    //         arr.add(num);
    //     }
    //     backtrack(arr, 0);
    //     return ans;
    // }

    // private void backtrack(List<Integer> arr, int st) {
    //     if(st == arr.size()) {
    //         ans.add(new ArrayList<>(arr));
    //         return;
    //     }

    //     for(int i = st; i < arr.size(); ++i) {
    //         swap(arr, st, i);
    //         backtrack(arr, st + 1);
    //         swap(arr, st, i);
    //     }
    // }

    // private void swap(List<Integer> arr, int st, int i) {
    //     int temp = arr.get(st);
    //     arr.set(st, arr.get(i));
    //     arr.set(i, temp);
    // }
}
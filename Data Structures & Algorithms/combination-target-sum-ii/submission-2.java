class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);

        List<List<Integer>> result = new ArrayList<>();
        List<Integer> current = new ArrayList<>();
        generateCollection(candidates, target, 0, current, result);

        return result;
    }

    private void generateCollection(int[] arr, int target, int index,
                                    List<Integer> comb,
                                    List<List<Integer>> res) {
        if(target == 0) {
            res.add(new ArrayList<>(comb));
            return;
        }

        for(int i = index; i < arr.length; ++i) {
            if(i > index && arr[i] == arr[i - 1]) continue;
            if(arr[i] > target) break;

            comb.add(arr[i]);
            generateCollection(arr, target - arr[i], i + 1, comb, res);
            comb.remove(comb.size() - 1);
        }
    }
}

class Solution {
    private List<List<Integer>> ans = new ArrayList<>();
    public List<List<Integer>> permute(int[] nums) {
        List<Integer> arr = new ArrayList<>();
        for(int num : nums) {
            arr.add(num);
        }
        backtrack(arr, 0);
        return ans;
    }

    private void backtrack(List<Integer> arr, int st) {
        if(st == arr.size()) {
            ans.add(new ArrayList<>(arr));
            return;
        }

        for(int i = st; i < arr.size(); ++i) {
            swap(arr, st, i);
            backtrack(arr, st + 1);
            swap(arr, st, i);
        }
    }

    // private void swap(List<Integer> arr, int st, int i) {
    //     int temp = arr[st];
    //     arr[st] = arr[i];
    //     arr[i] = temp;
    // }

    private void swap(List<Integer> arr, int st, int i) {
        int temp = arr.get(st);
        arr.set(st, arr.get(i));
        arr.set(i, temp);
    }
}
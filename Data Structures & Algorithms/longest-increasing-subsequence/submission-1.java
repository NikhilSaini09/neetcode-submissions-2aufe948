class Solution {
    public int lengthOfLIS(int[] nums) {
        List<Integer> lis = new ArrayList<>();
        for(int n : nums) {
            int idx = lb(lis, n);
            if(idx == lis.size()) lis.add(n);
            else lis.set(idx, n);
        }
        return lis.size();
    }
    private int lb(List<Integer> lis, int n) {
        int l = 0, r = lis.size() - 1;
        while(l <= r) {
            int mid = l + (r - l) / 2;
            if(lis.get(mid) >= n) r = mid - 1;
            else l = mid + 1;
        }
        return l;
    }
}

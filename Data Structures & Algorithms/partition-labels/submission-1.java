class Solution {
    public List<Integer> partitionLabels(String s) {
        int n = s.length();
        int[] last = new int[26];
        for(int i = 0; i < n; ++i) last[s.charAt(i) - 'a'] = i;

        int st = 0, ed = 0;
        List<Integer> ans = new ArrayList<>();
        for(int i = 0; i < n; ++i) {
            ed = Math.max(ed, last[s.charAt(i) - 'a']);
            if(i == ed) {
                ans.add(ed - st + 1);
                st = i + 1;
            }
        }
        return ans;
    }
}

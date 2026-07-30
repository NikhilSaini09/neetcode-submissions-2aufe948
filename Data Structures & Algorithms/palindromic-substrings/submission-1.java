class Solution {
    private int ans;
    public int countSubstrings(String s) {
        int n = s.length();
        ans = 0;

        for(int i = 0; i < n; ++i) {
            expand(s, i, i, n);
            expand(s, i, i + 1, n);
        }

        return ans;
    }

    private void expand(String s, int l, int r, int n) {
        while(l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
            ans++;
            l--;
            r++;
        }
    }
}

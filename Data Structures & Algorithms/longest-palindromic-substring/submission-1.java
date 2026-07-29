class Solution {
    private int start;
    private int len;
    public String longestPalindrome(String s) {
        int n = s.length();
        if(n < 2) return s;

        start = 0;
        len = 1;

        for(int i = 0; i < n; ++i) {
            expand(s, i, i, n);
            expand(s, i, i + 1, n);
        }

        return s.substring(start, start + len);
    }

    private void expand(String s, int l, int r, int n) {
        while(l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
            if(r - l + 1 > len) {
                start = l;
                len = r - l + 1;
            }
            l--;
            r++;
        }
    }
}

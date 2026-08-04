class Solution {
    public int numDecodings(String s) {
        if(s.charAt(0) == '0') return 0;
        int si = 1, d = 1, n = s.length();
        for(int i = 1; i < n; ++i) {
            int cur = 0;
            if(s.charAt(i) != '0') cur += si;
            if(s.charAt(i - 1) == '1' || (s.charAt(i - 1) == '2' && s.charAt(i) <= '6')) cur += d;
            d = si;
            si = cur;
        }
        return si;
    }
}

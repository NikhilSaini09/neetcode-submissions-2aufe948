class Solution {
    public int reverse(int x) {
        final int MIN = -2147483648;
        final int MAX = 2147483647;
        int ans = 0;
        while(x != 0) {
            if(ans > (MAX / 10) || ans < (MIN / 10)) return 0;
            ans = ans * 10 + x % 10;
            x /= 10;
        }
        return ans;
    }
}

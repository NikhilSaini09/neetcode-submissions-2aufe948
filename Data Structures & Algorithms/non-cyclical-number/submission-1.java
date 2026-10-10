class Solution {
    public boolean isHappy(int n) {
        int slow = get(n), fast = get(get(n));

        while(fast != 1 && slow != fast) {
            slow = get(slow);
            fast = get(get(fast));
        }

        return fast == 1;
    }
    private int get(int n) {
        int ans = 0;
        while(n > 0) {
            int tens = n % 10;
            ans += tens * tens;
            n /= 10;
        }
        return ans;
    }
}

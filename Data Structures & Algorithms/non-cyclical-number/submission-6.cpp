class Solution {
    int getSum(int n) {
        int res = 0;
        while(n) {
            int tens = n % 10;
            res += tens * tens;
            n /= 10;
        }
        return res;
    }
public:
    bool isHappy(int n) {
        int slow = getSum(n), fast = getSum(getSum(n));

        while(fast != 1 && slow != fast) {
            slow = getSum(slow);
            fast = getSum(getSum(fast));
        }

        return fast == 1;
    }
};

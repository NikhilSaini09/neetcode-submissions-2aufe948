class Solution {
    double fastPow(double x, long long n) {
        double ans = 1.0;
        while(n) {
            if(n & 1) ans *= x;
            x *= x;
            n >>= 1;
        }
        return ans;
    }
public:
    double myPow(double x, int n) {
        if(x == 0) return 0;
        long long N = n;
        if(N < 0) {
            x = 1 / x;
            N = -N;
        }
        return fastPow(x, N);
    }
};

class Solution {
    public int hammingWeight(int n) {
        int ans = 0;
        for(int i = 0; i < 31; ++i) {
            if((n & (1 << i)) != 0) ++ans;
        }
        return ans;
    }
}

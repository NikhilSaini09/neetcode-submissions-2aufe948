class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let ans = 0;
        while(n) {
            n = n & (n - 1);
            ans++;
        }
        return ans;
    }
}

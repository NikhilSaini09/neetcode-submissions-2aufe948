class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x: number): number {
        const min = -2147483648;
        const max = 2147483647;
        let ans = 0;
        while(x != 0) {
            if(ans > max / 10 || ans < min / 10) return 0;
            ans = ans * 10 + x % 10;
            x = Math.trunc(x / 10);
        }
        return ans;
    }
}

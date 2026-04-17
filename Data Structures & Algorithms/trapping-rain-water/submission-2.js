class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        let ans = 0, left = 0, right = n-1;
        let lMax = height[0], rMax = height[n-1];

        while(left < right) {
            let one = height[left];
            let two = height[right];

            if(one <= two) {
                lMax = Math.max(one, lMax);
                ans += (lMax - one);
                ++left;
            } else {
                rMax = Math.max(two, rMax);
                ans += (rMax - two);
                --right;
            }
        }

        return ans;
    }
}

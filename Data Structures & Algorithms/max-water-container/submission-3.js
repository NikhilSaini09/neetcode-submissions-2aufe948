class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0, j = heights.length - 1;
        let ans = 0;

        while(i < j) {
            if(heights[i] < heights[j]) {
                ans = Math.max(ans, heights[i] * (j - i));
                ++i;
            } else {
                ans = Math.max(ans, heights[j] * (j - i));
                --j;
            }
        }

        return ans;
    }
}

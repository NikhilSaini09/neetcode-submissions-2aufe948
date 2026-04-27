class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        heights.push(0);

        const st = [];
        let ans = 0;
        for(let i = 0; i <= n; ++i) {
            while(st.length !== 0 && heights[st.at(-1)] > heights[i]) {
                const hei = heights[st.pop()];
                const pse = st.length === 0 ? -1 : st.at(-1);
                ans = Math.max(ans, hei * (i - pse - 1));
            }

            st.push(i);
        }
        heights.pop();
        return ans;
    }
}

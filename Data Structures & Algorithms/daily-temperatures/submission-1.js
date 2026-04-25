class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const st = [];

        const ans = new Array(n);
        for(let i = n - 1; i >= 0; --i) {
            const temp = temperatures[i];
            while(st.length !== 0 && temperatures[st.at(-1)] <= temp) st.pop();

            ans[i] = (st.length === 0 ? 0 : st.at(-1) - i);

            st.push(i);
        }

        return ans;
    }
}

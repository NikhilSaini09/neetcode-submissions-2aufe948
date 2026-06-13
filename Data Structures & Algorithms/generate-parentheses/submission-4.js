class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const ans = [];

        const generate = (s, open, close) => {
            if(open == n && close == n) {
                ans.push(s);
            }

            if(open < n) {
                generate(s + '(', open + 1, close);
            }

            if(close < open) {
                generate(s + ')', open, close + 1);
            }
        }

        generate("", 0, 0);
        return ans;


        // const res = [];

        // const generate = (open, close, s) => {
        //     if (s.length === 2 * n) {
        //         res.push(s.join(''));
        //         return;
        //     }

        //     if (open < n) {
        //         s.push('(');
        //         generate(open + 1, close, s);
        //         s.pop(); // Backtrack
        //     }

        //     if (open > close) {
        //         s.push(')');
        //         generate(open, close + 1, s);
        //         s.pop(); // Backtrack
        //     }
        // };

        // generate(0, 0, []);
        // return res;
    }
}

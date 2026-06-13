class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const ans: string[] = [];

        const generate = (s: string, open: number, close: number): void => {
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
    }
}

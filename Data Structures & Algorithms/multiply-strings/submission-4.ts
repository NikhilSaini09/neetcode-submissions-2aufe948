class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1: string, num2: string): string {
        if(num1 === "0" || num2 === "0") return "0";

        const n = num1.length;
        const m = num2.length;
        const ans: number[] = new Array(n + m).fill(0);

        for(let i = n - 1; i >= 0; --i) {
            for(let j = m - 1; j >= 0; --j) {
                const p1 = i + j;
                const p2 = i + j + 1;
                
                const sum = (Number(num1[i]) * Number(num2[j])) + ans[p2];
                ans[p2] = sum % 10;
                ans[p1] += Math.floor(sum / 10);
            }
        }

        if(ans[0] === 0) ans.shift();
        return ans.join('');
    }
}

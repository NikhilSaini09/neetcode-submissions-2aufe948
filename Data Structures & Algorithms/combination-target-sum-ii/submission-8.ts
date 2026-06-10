class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort((a: number, b: number) => a - b);
        const result: number[][] = [];

        function generateCollection(index: number, remaining: number, comb: number[]): void {
            if(remaining === 0) {
                result.push([...comb]);
                return;
            }

            for(let i = index; i < candidates.length; ++i) {
                if(i > index && candidates[i] === candidates[i - 1]) continue;
                if(candidates[i] > remaining) break;

                comb.push(candidates[i]);
                generateCollection(i + 1, remaining - candidates[i], comb);
                comb.pop();
            }
        }

        generateCollection(0, target, []);
        return result;
    }
}

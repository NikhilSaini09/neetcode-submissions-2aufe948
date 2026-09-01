class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let ans = 0;
        for(const [a, b, c] of triplets) {
            if(a <= target[0] && b <= target[1] && c <= target[2]) {
                if(a === target[0]) ans |= 1;
                if(b === target[1]) ans |= 2;
                if(c === target[2]) ans |= 4;
            }
        }
        return ans === 7;
    }
}

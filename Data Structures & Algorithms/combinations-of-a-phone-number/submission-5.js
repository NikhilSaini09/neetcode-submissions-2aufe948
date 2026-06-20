class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits || digits.length === 0) return [];

        const combo = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
        const sol = [];

        const letterCombo = (ind, currentString) => {
            if(ind === digits.length) {
                sol.push(currentString);
                return;
            }

            const digitIndex = digits[ind]; 
            const letters = combo[digitIndex];

            for(let i = 0; i < letters.length; i++) {
                letterCombo(ind + 1, currentString + letters[i]);
            }
        };

        letterCombo(0, "");
        return sol;
    }
}

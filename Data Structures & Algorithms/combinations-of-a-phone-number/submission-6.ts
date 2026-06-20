class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        if(!digits || digits.length === 0) return [];

        const combo: string[] = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
        const sol: string[] = [];

        const letterCombo = (ind: number, currentString: string): void => {
            if(ind === digits.length) {
                sol.push(currentString);
                return;
            }

            const digitIndex: string = digits[ind]; 
            const letters: string = combo[digitIndex];

            for(let i = 0; i < letters.length; ++i) {
                letterCombo(ind + 1, currentString + letters[i]);
            }
        };

        letterCombo(0, "");
        return sol;
    }
}

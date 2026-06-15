class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const sol: string[][] = [];

        const isPalindrome = (st: number, end: number): boolean => {
            while(st < end) {
                if(s[st] !== s[end]) return false;
                st++;
                end--;
            }
            return true;
        };

        const palPart = (ind: number, pp: string[]): void => {
            if(ind === s.length) {
                sol.push([...pp]);
                return;
            }

            for(let i = ind; i < s.length; i++) {
                if(isPalindrome(ind, i)) {
                    const substring = s.slice(ind, i + 1);
                    
                    pp.push(substring);
                    palPart(i + 1, pp);
                    pp.pop();
                }
            }
        };

        palPart(0, []);
        return sol;
    }
}

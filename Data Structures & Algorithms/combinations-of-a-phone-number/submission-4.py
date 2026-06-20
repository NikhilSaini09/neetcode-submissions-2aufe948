class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []

        digit_map = {
            "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
            "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
        }
        
        sol = []

        def backtrack(ind: int, comb: str):
            if ind == len(digits):
                sol.append(comb)
                return

            current_digit = digits[ind]
            letters = digit_map[current_digit]

            for letter in letters:
                backtrack(ind + 1, comb + letter)

        backtrack(0, "")
        return sol
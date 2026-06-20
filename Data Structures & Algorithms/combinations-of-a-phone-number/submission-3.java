class Solution {
    public List<String> letterCombinations(String digits) {
        if(digits == null || digits.isEmpty()) return new ArrayList<>();

        String[] combo = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        
        List<String> sol = new ArrayList<>();
        StringBuilder temp = new StringBuilder();

        letterCombo(digits, 0, sol, temp, combo);
        return sol;
    }

    private void letterCombo(String digits, int ind, List<String> sol, StringBuilder comb, String[] combo) {
        if(ind == digits.length()) {
            sol.add(comb.toString());
            return;
        }

        int j = digits.charAt(ind) - '0';
        String letters = combo[j];

        for (int i = 0; i < letters.length(); ++i) {
            comb.append(letters.charAt(i));
            letterCombo(digits, ind + 1, sol, comb, combo);
            comb.deleteCharAt(comb.length() - 1);
        }
    }
}

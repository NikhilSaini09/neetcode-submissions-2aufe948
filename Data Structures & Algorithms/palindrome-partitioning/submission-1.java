class Solution {
    public List<List<String>> partition(String s) {
        List<String> temp = new ArrayList<>();
        List<List<String>> sol = new ArrayList<>();
        palPart(s, 0, temp, sol);
        return sol;
    }
    private boolean isPalindrome(String s, int st, int end) {
        if(st < 0 || end >= s.length()) return false;

        while(end > st) {
            if (s.charAt(st) != s.charAt(end)) return false;
            st++;
            end--;
        }
        return true;
    }
    private void palPart(String s, int ind, List<String> pp, List<List<String>> sol) {
        if(ind == s.length()) {
            sol.add(new ArrayList<>(pp));
            return;
        }

        for(int i = ind; i < s.length(); ++i) {
            if(isPalindrome(s, ind, i)) {
                pp.add(s.substring(ind, i + 1));
                palPart(s, i + 1, pp, sol);
                pp.remove(pp.size() - 1);
            }
        }
    }
}

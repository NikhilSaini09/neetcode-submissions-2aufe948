class Solution {
    public boolean checkValidString(String s) {
        int mini = 0, maxi = 0;
        for(char c : s.toCharArray()) {
            if(c == '(') {
                mini++;
                maxi++;
            } else if(c == ')') {
                mini--;
                maxi--;
            } else {
                mini--;
                maxi++;
            }

            if(mini < 0) mini = 0;
            if(maxi < 0) return false;
        }
        return mini == 0;
    }
}

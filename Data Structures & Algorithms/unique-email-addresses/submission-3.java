class Solution {
    public int numUniqueEmails(String[] emails) {
        Set<String> ans = new HashSet<>();
        for(String e : emails) {
            int i = 0;
            StringBuilder s = new StringBuilder();
            while(i < e.length() && e.charAt(i) != '@' && e.charAt(i) != '+') {
                if(e.charAt(i) != '.') s.append(e.charAt(i));
                i++;
            }
            while(i < e.length() && e.charAt(i) != '@') i++;
            ans.add(s.toString() + e.substring(i));
        }
        return ans.size();
    }
}
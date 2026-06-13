class Solution {
    public List<String> generateParenthesis(int n) {
        StringBuilder sb = new StringBuilder();
        List<String> ans = new ArrayList<>();
        generate(ans, sb, n, 0, 0);
        return ans;
    }
    private void generate(List<String> ans, StringBuilder sb, int n, int open, int close) {
        if(open == n && close == n) {
            ans.add(sb.toString());
            return;
        }

        if(open < n) {
            sb.append('(');
            generate(ans, sb, n, open + 1, close);
            sb.deleteCharAt(sb.length() - 1);
        }

        if(close < open) {
            sb.append(')');
            generate(ans, sb, n, open, close + 1);
            sb.deleteCharAt(sb.length() - 1);
        }
    }
}

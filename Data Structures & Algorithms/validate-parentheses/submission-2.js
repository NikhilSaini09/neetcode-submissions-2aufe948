class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const st = [];
        for(const c of s) {
            if(c == '(' || c == '[' || c == '{') st.push(c);
            else {
                if(st.length === 0) return false;
                const top = st.at(-1);
                if((c == ')' && top != '(') || (c == ']' && top != '[') || (c == '}' && top != '{')) return false;
                st.pop();
            }
        }

        return st.length === 0;
    }
}

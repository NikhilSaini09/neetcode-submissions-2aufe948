class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const st = [];

        for(const s of tokens) {
            if(s == "+" || s == "-" || s == "*" || s == "/") {
                const b = st.pop();
                const a = st.pop();

                if(s == "+") st.push(a + b);
                else if(s == "-") st.push(a - b);
                else if(s == "*") st.push(a * b);
                else st.push(Math.trunc(a / b));
            } else st.push(Number(s));
        }

        return st[0];
    }
}

class MinStack {
    constructor() {
        this.st = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const curMin = this.st.length === 0 ? val : Math.min(val, this.st.at(-1).min);

        this.st.push({ val: val, min: curMin });
    }

    /**
     * @return {void}
     */
    pop() {
        this.st.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.st.at(-1).val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.st.at(-1).min;
    }
}

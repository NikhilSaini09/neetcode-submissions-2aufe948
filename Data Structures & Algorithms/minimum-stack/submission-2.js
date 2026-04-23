// class MinStack {
//     constructor() {
//         this.st = [];
//     }

//     /**
//      * @param {number} val
//      * @return {void}
//      */
//     push(val) {
//         const curMin = this.st.length === 0 ? val : Math.min(val, this.st.at(-1).min);

//         this.st.push({ val: val, min: curMin });
//     }

//     /**
//      * @return {void}
//      */
//     pop() {
//         this.st.pop();
//     }

//     /**
//      * @return {number}
//      */
//     top() {
//         return this.st.at(-1).val;
//     }

//     /**
//      * @return {number}
//      */
//     getMin() {
//         return this.st.at(-1).min;
//     }
// }



class MinStack {
    constructor() {
        this.stack = []
        this.minStacks = []
    }

    push(val) {
        this.stack.push(val)
        
        if(this.minStacks.length === 0) {
            this.minStacks.push(val)
        } else {
            const min = Math.min(val, this.minStacks[this.minStacks.length-1])
            this.minStacks.push(min)
        }
    }

    pop() {
        this.stack.pop()
        this.minStacks.pop()
    }


    top() {
        return this.stack[this.stack.length-1]
    }

    getMin() {
        return this.minStacks[this.minStacks.length - 1]
    }
}

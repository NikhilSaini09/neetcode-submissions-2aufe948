class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const get = (m) => {
            let ans = 0;
            while(m > 0) {
                const tens = m % 10;
                ans += tens * tens;
                m = Math.trunc(m / 10);
            }
            return ans;
        }
        let slow = get(n), fast = get(get(n));
        while(fast != 1 && slow != fast) {
            slow = get(slow);
            fast = get(get(fast));
        }
        return fast == 1;
    }
}

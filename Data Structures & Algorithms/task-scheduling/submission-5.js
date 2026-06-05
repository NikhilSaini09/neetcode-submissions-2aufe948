class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Array(26).fill(0);

        const charCodeA = 'A'.charCodeAt(0);
        for(const c of tasks) {
            freq[c.charCodeAt(0) - charCodeA]++;
        }

        const maxFreq = Math.max(...freq);

        let maxCnt = 0;
        for(const f of freq) {
            if(f == maxFreq) maxCnt++;
        }

        const res = (maxFreq - 1) * (n + 1) + maxCnt;
        return Math.max(res, tasks.length);
    }
}

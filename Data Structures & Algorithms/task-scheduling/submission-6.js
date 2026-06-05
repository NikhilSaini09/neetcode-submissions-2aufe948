class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freqMap = {};
        for(const c of tasks) {
            freqMap[c] = (freqMap[c] || 0) + 1;
        }

        const freq = Object.values(freqMap);
        const maxFreq = Math.max(...freq);
        const maxCnt = freq.filter(f => f === maxFreq).length;

        const res = (maxFreq - 1) * (n + 1) + maxCnt;
        return Math.max(res, tasks.length);



        // const freq = new Array(26).fill(0);

        // const charCodeA = 'A'.charCodeAt(0);
        // for(const c of tasks) {
        //     freq[c.charCodeAt(0) - charCodeA]++;
        // }

        // const maxfreq = Math.max(...freq);

        // let maxCnt = 0;
        // for(const f of freq) {
        //     if(f === maxfreq) maxCnt++;
        // }

        // const res = (maxfreq - 1) * (n + 1) + maxCnt;
        // return Math.max(res, tasks.length);
    }
}

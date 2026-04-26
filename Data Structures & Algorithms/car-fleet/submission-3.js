class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
        
        const ind = Array.from({ length : n}, (_, i) => i);
        ind.sort((i, j) => position[i] - position[j]);

        let ans = 0;
        let prev = 0;
        for(let i = n - 1; i >= 0; --i) {
            const idx = ind[i];
            const timeToReach = (target - position[idx]) / speed[idx];
            if(prev < timeToReach) {
                ++ans;
                prev = timeToReach;
            }
        }

        return ans;
    }
}

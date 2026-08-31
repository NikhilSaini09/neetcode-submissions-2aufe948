class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if(hand.length % groupSize != 0) return false;

        const count = new Map();
        for(const card of hand) {
            count.set(card, (count.get(card) || 0) + 1);
        }
        const uno = Array.from(count.keys()).sort((a, b) => a - b);

        for(const card of uno) {
            const freq = count.get(card);
            if(freq === 0) continue;

            for(let i = 0; i < groupSize; ++i) {
                const ncard = card + i;
                const nfreq = count.get(ncard) || 0;
                if(nfreq < freq) return false;
                count.set(ncard, nfreq - freq);
            }
        }

        return true;
    }
}

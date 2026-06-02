class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const pq = new MaxPriorityQueue();
        for(const stone of stones) pq.enqueue(stone);

        while(pq.size() > 1) {
            const a = pq.dequeue();
            const b = pq.dequeue();

            if(a != b) pq.enqueue(a - b);
        }

        return pq.isEmpty() ? 0 : pq.front();
    }
}

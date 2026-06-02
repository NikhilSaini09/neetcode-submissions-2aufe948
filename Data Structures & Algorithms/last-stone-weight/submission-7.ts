class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        const pq: any = new MaxPriorityQueue();
        for(const stone of stones) pq.enqueue(stone);

        while(pq.size() > 1) {
            const a: number = pq.dequeue();
            const b: number = pq.dequeue();

            if(a != b) pq.enqueue(a - b);
        }

        return pq.isEmpty() ? 0 : pq.front();
    }
}

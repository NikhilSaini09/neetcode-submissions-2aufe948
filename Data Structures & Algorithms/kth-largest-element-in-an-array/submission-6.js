class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const pq = new PriorityQueue((a, b) => a - b);
        for(const n of nums) {
            if(pq.size() < k) pq.enqueue(n);
            else if(pq.front() < n) {
                pq.dequeue();
                pq.enqueue(n)
            }
        }

        return pq.front();
    }
}

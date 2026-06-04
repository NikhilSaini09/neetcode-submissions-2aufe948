class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        nums.sort((a: number, b: number) => a - b);
        return nums[nums.length - k];

        // const pq = new PriorityQueue((a, b) => a - b);
        // for(const n of nums) {
        //     if(pq.size() < k) pq.enqueue(n);
        //     else if(pq.front() < n) {
        //         pq.dequeue();
        //         pq.enqueue(n)
        //     }
        // }

        // return pq.front();
    }
}

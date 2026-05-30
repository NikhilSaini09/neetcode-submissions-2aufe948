class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.pq = new MinPriorityQueue((n) => n);

        for(const n of nums) this.add(n);
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.pq.enqueue(val);
        if(this.pq.size() > this.k) this.pq.dequeue();
        return this.pq.front();
    }
}

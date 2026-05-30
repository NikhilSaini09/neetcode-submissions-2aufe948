class KthLargest {
    #k: number;
    #pq: any;

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.#k = k;
        this.#pq = new MinPriorityQueue((n: number) => n);

        for(const n of nums) this.add(n);
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.#pq.enqueue(val);
        if(this.#pq.size() > this.#k) this.#pq.dequeue();
        return this.#pq.front();
    }
}

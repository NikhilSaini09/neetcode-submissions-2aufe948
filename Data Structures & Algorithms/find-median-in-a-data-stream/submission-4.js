class MedianFinder {
    constructor() {
        this.maxHeap = new PriorityQueue((a, b) => b - a);
        this.minHeap = new PriorityQueue((a, b) => a - b);
    }

    /** * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxHeap.enqueue(num);
        this.minHeap.enqueue(this.maxHeap.dequeue());

        if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front();
        }
        return (this.maxHeap.front() + this.minHeap.front()) / 2;
    }
}

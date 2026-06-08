class MedianFinder {
    private maxHeap: any;
    private minHeap: any;

    constructor() {
        this.maxHeap = new PriorityQueue((a: number, b: number) => b - a );
        this.minHeap = new PriorityQueue((a: number, b: number) => a - b );
    }

    /**
     * Adds a number into the data structure.
     */
    public addNum(num: number): void {
        this.maxHeap.enqueue(num);
        this.minHeap.enqueue(this.maxHeap.dequeue()!);

        if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.enqueue(this.minHeap.dequeue()!);
        }
    }

    /**
     * Returns the median of current data stream.
     */
    public findMedian(): number {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front()!;
        }
        return (this.maxHeap.front()! + this.minHeap.front()!) / 2;
    }
}

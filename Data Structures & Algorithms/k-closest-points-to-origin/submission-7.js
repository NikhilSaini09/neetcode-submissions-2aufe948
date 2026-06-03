class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        points.sort((a, b) => {
            const distA = a[0] * a[0] + a[1] * a[1];
            const distB = b[0] * b[0] + b[1] * b[1];
            return distA - distB;
        });

        return points.slice(0, k);


        // const maxHeap = new PriorityQueue((a, b) => {
        //     const distA = a[0] * a[0] + a[1] * a[1];
        //     const distB = b[0] * b[0] + b[1] * b[1];
        //     return distB - distA;
        // });

        // for(const p of points) {
        //     maxHeap.enqueue(p);
        //     if(maxHeap.size() > k) maxHeap.dequeue();
        // }

        // return maxHeap.toArray();
    }
}

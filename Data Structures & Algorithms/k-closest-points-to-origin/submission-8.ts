class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const maxPq = new MaxPriorityQueue((item: { dist: number }) => item.dist);

        for(const [x, y] of points) {
            const dist = x * x + y * y;
            maxPq.enqueue({ dist, point: [x, y] });

            if(maxPq.size() > k) maxPq.dequeue();
        }

        return maxPq.toArray().map((el: any) => el.point);
    }
}

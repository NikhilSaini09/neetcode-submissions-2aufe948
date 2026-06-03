class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        // const getDist = (p: number[]): number => p[0] ** 2 + p[1] ** 2;

        // points.sort((a, b) => getDist(a) - getDist(b));
        // return points.slice(0, k);


        const maxPq = new MaxPriorityQueue((item: { dist: number }) => item.dist);

        for(const [x, y] of points) {
            const dist = x * x + y * y;
            maxPq.enqueue({ dist, point: [x, y] });

            if(maxPq.size() > k) maxPq.dequeue();
        }

        return maxPq.toArray().map((el: any) => el.point);
    }
}

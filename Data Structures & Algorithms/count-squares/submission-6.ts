class CountSquares {
    private pts: Map<number, Map<number, number>>;

    constructor() {
        this.pts = new Map();
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point: number[]): void {
        const [x, y] = point;
        if(!this.pts.has(x)) this.pts.set(x, new Map());
        this.pts.get(x).set(y, (this.pts.get(x).get(y) || 0) + 1);
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point: number[]): number {
        let ans = 0;
        const [x, y] = point;
        if(!this.pts.has(x)) return ans;

        const xpts = this.pts.get(x);
        for(const [p, cnt] of xpts) {
            if(p == y) continue;
            const side = p - y;

            const x1 = x + side;
            const x2 = x - side;
            ans += cnt * (this.pts.get(x1)?.get(y) || 0) * (this.pts.get(x1)?.get(p) || 0);
            ans += cnt * (this.pts.get(x2)?.get(y) || 0) * (this.pts.get(x2)?.get(p) || 0);
        }

        return ans;
    }
}
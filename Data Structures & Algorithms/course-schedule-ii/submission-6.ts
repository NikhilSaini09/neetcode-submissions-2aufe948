class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const adj: number[][] = Array.from({ length: numCourses }, () => []);
        const indegree: number[] = new Array(numCourses).fill(0);

        for(const [c, p] of prerequisites) {
            adj[p].push(c);
            indegree[c]++;
        }

        const q: number[] = [];
        for(let i = 0; i < numCourses; ++i) if(indegree[i] === 0) q.push(i);

        let head: number = 0;
        const ans: number[] = [];
        while(head < q.length) {
            const u: number = q[head++];
            ans.push(u);

            for(const v of adj[u]) {
                indegree[v]--;
                if(indegree[v] === 0) q.push(v);
            }
        }

        return ans.length === numCourses ? ans : [];
    }
}

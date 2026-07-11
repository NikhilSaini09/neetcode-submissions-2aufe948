class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
        const indegree = new Array(numCourses).fill(0);

        for(const [c, p] of prerequisites) {
            adj[p].push(c);
            indegree[c]++;
        }

        const q = [];
        for(let i = 0; i < numCourses; ++i) if(indegree[i] === 0) q.push(i);

        let head = 0;
        const ans = [];
        while(head < q.length) {
            const u = q[head++];
            ans.push(u);

            for(const v of adj[u]) {
                indegree[v]--;
                if(indegree[v] === 0) q.push(v);
            }
        }

        return ans.length === numCourses ? ans : [];
    }
}

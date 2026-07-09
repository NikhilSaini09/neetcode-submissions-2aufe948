class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
        const indegree = new Array(numCourses).fill(0);

        for(const [c, p] of prerequisites) {
            adj[p].push(c);
            indegree[c]++;
        }

        const q = []
        for(let i = 0; i < numCourses; ++i) if(indegree[i] === 0) q.push(i);

        let cnt = 0;
        let head = 0;
        while(head < q.length) {
            const u = q[head++];
            cnt++;

            for(const v of adj[u]) {
                if(--indegree[v] === 0) q.push(v);
            }
        }

        return cnt == numCourses;
    }
}

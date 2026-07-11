class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adj = [[] for _ in range(numCourses)]
        indegree = [0] * numCourses

        for c, p in prerequisites:
            adj[p].append(c)
            indegree[c] += 1
        
        queue = collections.deque([i for i in range(numCourses) if indegree[i] == 0])

        ans = []
        while queue:
            u = queue.popleft()
            ans.append(u)

            for v in adj[u]:
                indegree[v] -= 1
                if indegree[v] == 0:
                    queue.append(v)
        
        return ans if len(ans) == numCourses else []
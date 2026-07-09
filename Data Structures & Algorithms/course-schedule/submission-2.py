class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adj = [[] for _ in range(numCourses)]
        indegree = [0] * numCourses

        for c, p in prerequisites:
            adj[p].append(c)
            indegree[c] += 1
        
        queue = collections.deque([i for i in range(numCourses) if indegree[i] == 0])

        cnt = 0
        while queue:
            u = queue.popleft()
            cnt += 1

            for v in adj[u]:
                indegree[v] -= 1
                if indegree[v] == 0:
                    queue.append(v)
        
        return cnt == numCourses
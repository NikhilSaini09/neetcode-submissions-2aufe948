class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        List<List<Integer>> adj = new ArrayList<>();
        for(int i = 0; i < numCourses; ++i) {
            adj.add(new ArrayList<>());
        }
        int[] indegree = new int[numCourses];

        for(int[] p : prerequisites) {
            adj.get(p[1]).add(p[0]);
            indegree[p[0]]++;
        }

        Queue<Integer> q = new LinkedList<>();
        for(int i = 0; i < numCourses; ++i) {
            if(indegree[i] == 0) {
                q.add(i);
            }
        }

        int cnt = 0;
        int[] ans = new int[numCourses];
        while(!q.isEmpty()) {
            int u = q.poll();
            ans[cnt++] = u;

            for(int v : adj.get(u)) {
                if(--indegree[v] == 0) {
                    q.add(v);
                }
            }
        }

        return cnt == numCourses ? ans : new int[0];
    }
}

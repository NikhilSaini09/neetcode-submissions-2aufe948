class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
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
        while(!q.isEmpty()) {
            int u = q.poll();
            cnt++;

            for(int v : adj.get(u)) {
                if(--indegree[v] == 0) {
                    q.add(v);
                }
            }
        }

        return cnt == numCourses;
    }
}

class CountSquares {
    private Map<Integer, Map<Integer, Integer>> pts;

    public CountSquares() {
        pts = new HashMap<>();
    }
    
    public void add(int[] point) {
        int x = point[0], y = point[1];
        pts.putIfAbsent(x, new HashMap<>());
        pts.get(x).put(y, pts.get(x).getOrDefault(y, 0) + 1);
    }
    
    public int count(int[] point) {
        int ans = 0, x = point[0], y = point[1];
        if(!pts.containsKey(x)) return ans;

        for(int p : pts.get(x).keySet()) {
            if(p == y) continue;
            int side = p - y;

            int x1 = x + side, x2 = x - side;
            ans += pts.get(x).get(p) * pts.getOrDefault(x1, new HashMap<>()).getOrDefault(y, 0) * pts.getOrDefault(x1, new HashMap<>()).getOrDefault(p, 0);
            ans += pts.get(x).get(p) * pts.getOrDefault(x2, new HashMap<>()).getOrDefault(y, 0) * pts.getOrDefault(x2, new HashMap<>()).getOrDefault(p, 0);
        }

        return ans;
    }
}

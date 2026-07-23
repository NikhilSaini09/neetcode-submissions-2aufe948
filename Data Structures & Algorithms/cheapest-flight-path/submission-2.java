// class Solution {
//     public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
//         List<List<int[]>> adj = new ArrayList<>();
//         for(int i = 0; i < n; ++i) adj.add(new ArrayList<>());

//         for(int[] f : flights) {
//             adj.get(f[0]).add(new int[]{f[1], f[2]});
//         }

//         int[] cost = new int[n];
//         Arrays.fill(cost, (int)1e9);
//         Queue<int[]> q = new LinkedList<>();
//         q.offer(new int[]{src, 0});
//         cost[src] = 0;

//         while(!q.isEmpty()) {
//             int qs = q.size();

//             while(qs-- > 0) {
//                 int[] cur = q.poll();

//                 for(int[] v : adj.get(cur[0])) {
//                     if(cost[v[0]] > cur[1] + v[1]) {
//                         cost[v[0]] = cur[1] + v[1];
//                         q.offer(new int[]{v[0], cost[v[0]]});
//                     }
//                 }
//             }

//             if(k-- == 0) break;
//         }

//         return cost[dst] == 1e9 ? -1 : cost[dst];
//     }
// }


class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        final int INF = Integer.MAX_VALUE/2;
        int[] prices = new int[n];
        Arrays.fill(prices, INF);
        prices[src] = 0;

        for(int i = 0; i <=k; i++){
            int[] nextPrices = prices.clone();
            for(int [] flight : flights){
                int from = flight[0];
                int to = flight[1];
                int price = flight[2];

                if(prices[from] == INF){
                    continue;
                }
                nextPrices[to] = Math.min(nextPrices[to], prices[from] + price);
            }
            prices = nextPrices;
        }
        return prices[dst] == INF ? -1 : prices[dst];
    }
}

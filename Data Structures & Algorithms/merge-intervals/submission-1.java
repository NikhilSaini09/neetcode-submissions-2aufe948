class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        List<int[]> ans = new ArrayList<>();
        for(int[] i : intervals) {
            int st = i[0], end = i[1];

            if(ans.isEmpty() || ans.get(ans.size() - 1)[1] < st) ans.add(i);
            else ans.get(ans.size() - 1)[1] = Math.max(end, ans.get(ans.size() - 1)[1]);
        }
        return ans.toArray(new int[ans.size()][2]);
    }
}

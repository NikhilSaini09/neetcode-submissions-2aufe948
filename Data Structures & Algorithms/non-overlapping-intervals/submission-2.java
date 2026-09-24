class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        int ans = 0, last = Integer.MIN_VALUE;
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));
        for(int[] i : intervals) {
            if(i[0] >= last) last = i[1];
            else ++ans;
        }
        return ans;
    }
}

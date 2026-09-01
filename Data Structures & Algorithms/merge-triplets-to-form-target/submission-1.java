class Solution {
    public boolean mergeTriplets(int[][] triplets, int[] target) {
        int a = 0, b = 0, c = 0;
        for(int[] t : triplets) {
            if(t[0] <= target[0] && t[1] <= target[1] && t[2] <= target[2]) {
                a = Math.max(a, t[0]);
                b = Math.max(b, t[1]);
                c = Math.max(c, t[2]);
            }
        }
        return a == target[0] && b == target[1] && c == target[2];
    }
}

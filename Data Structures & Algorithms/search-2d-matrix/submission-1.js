class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length, n = matrix[0].length;
        let l = 0, r = m * n - 1;

        while(l <= r) {
            const mid = l + Math.trunc((r - l) / 2);
            const i = Math.trunc(mid / n);
            const j = mid % n;

            if(matrix[i][j] == target) return true;
            else if(matrix[i][j] < target) l = mid + 1;
            else r = mid - 1;
        }

        return false;
    }
}

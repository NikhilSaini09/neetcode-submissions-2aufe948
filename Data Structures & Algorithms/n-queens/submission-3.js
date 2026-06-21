class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const ans = [];
        const poss = Array.from({ length: n }, () => new Array(n).fill('.'));
        
        const rowMap = new Array(n).fill(true);
        const upperTri = new Array(2 * n - 1).fill(true);
        const lowerTri = new Array(2 * n - 1).fill(true);

        const putNQueens = (col) => {
            if (col === n) {
                ans.push(poss.map(r => r.join('')));
                return;
            }

            for (let i = 0; i < n; i++) {
                if (rowMap[i] && upperTri[n - 1 + col - i] && lowerTri[col + i]) {
                    
                    rowMap[i] = false;
                    upperTri[n - 1 + col - i] = false;
                    lowerTri[col + i] = false;
                    poss[i][col] = 'Q';

                    putNQueens(col + 1);

                    rowMap[i] = true;
                    upperTri[n - 1 + col - i] = true;
                    lowerTri[col + i] = true;
                    poss[i][col] = '.';
                }
            }
        };

        putNQueens(0);
        return ans;
    }
}

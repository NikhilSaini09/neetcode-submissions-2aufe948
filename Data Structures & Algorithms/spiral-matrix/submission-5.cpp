class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        int n = matrix.size();
        int m = matrix[0].size();

        int num = (min(n, m) + 1) / 2;
        vector<int> ans;

        for(int i=0; i<num; i++) {
            for(int j=i; j<m-i; j++) {
                ans.push_back(matrix[i][j]);
            }
            for(int j=i+1; j<n-i; j++) {
                ans.push_back(matrix[j][m-i-1]);
            }
            if(n >= 2*i+2) {
                for(int j=m-i-2; j>=i; j--) {
                    ans.push_back(matrix[n-i-1][j]);
                }
            }
            if(m >= 2*i+2) {
                for(int j=n-i-2; j>i; j--) {
                    ans.push_back(matrix[j][i]);
                }
            }
        }

        return ans;
    }
};

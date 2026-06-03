class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        int n = points.size();
        struct PointDist {
            int dist;
            int id;

            bool operator<(const PointDist& other) const {
                return dist < other.dist;
            }
        };

        vector<PointDist> dists(n);
        for(int i = 0; i < n; ++i) {
            dists[i] = {points[i][0] * points[i][0] + points[i][1] * points[i][1], i};
        }

        nth_element(dists.begin(), dists.begin() + k, dists.end());

        vector<vector<int>> result;
        result.reserve(k);
        for(int i = 0; i < k; ++i) {
            result.push_back(std::move(points[dists[i].id]));
        }

        return result;
    }
};



// class Solution {
// public:
//     vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
//         ios_base::sync_with_stdio(false);
//         cin.tie(NULL);

//         priority_queue<pair<int, int>> pq;

//         for(int i = 0; i < points.size(); ++i) {
//             int distSq = points[i][0] * points[i][0] + points[i][1] * points[i][1];

//             pq.emplace(distSq, i);
//             if(pq.size() > k) pq.pop();
//         }

//         vector<vector<int>> ans;
//         ans.reserve(k);
//         while(!pq.empty()) {
//             ans.push_back(points[pq.top().second]);
//             pq.pop();
//         }
//         return ans;
//     }
// };


// class Solution {
// public:
//     vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
//         priority_queue<pair<double, pair<int, int>>> pq;

//         for(const auto &p : points) {
//             double dist = sqrt(p[0] * p[0] + p[1] * p[1]);
//             pq.push({dist, {p[0], p[1]}});
//             if(pq.size() > k) pq.pop();
//         }

//         vector<vector<int>> ans;
//         ans.reserve(k);
//         while(!pq.empty()) {
//             auto [i, j] = pq.top().second;
//             ans.push_back({i, j});
//             pq.pop();
//         }

//         return ans;
//     }
// };

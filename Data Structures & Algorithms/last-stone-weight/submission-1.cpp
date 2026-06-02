class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        priority_queue<int> pq(stones.begin(), stones.end());
        // for(int st : stones) pq.push(st);

        while(pq.size() > 1) {
            int a = pq.top(); pq.pop();
            int b = pq.top(); pq.pop();

            if(a != b) pq.push(a - b);
        }

        return pq.empty() ? 0 : pq.top();
    }
};

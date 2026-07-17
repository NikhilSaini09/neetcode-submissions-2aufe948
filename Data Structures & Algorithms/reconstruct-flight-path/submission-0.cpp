class Solution {
public:
    vector<string> findItinerary(vector<vector<string>>& tickets) {
        unordered_map<string, vector<string>> adj;
        for(const auto &t : tickets) adj[t[0]].push_back(t[1]);
        for(auto &[_, neigh] : adj) sort(neigh.rbegin(), neigh.rend());
        
        vector<string> ans;
        function<void(const string&)> dfs = [&](const string &airport) {
            while(!adj[airport].empty()) {
                string to = adj[airport].back();
                adj[airport].pop_back();
                dfs(to);
            }
            ans.push_back(airport);
        };
        
        dfs("JFK");
        reverse(ans.begin(), ans.end());
        return ans;
    }
};




// class Solution {
// public:
//     vector<string> findItinerary(vector<vector<string>>& tickets) {
//         unordered_map<string,vector<string>>adj;
//         for(auto &t:tickets){
//             adj[t[0]].push_back(t[1]);
//         }

//         for(auto &vec:adj){
//             sort(rbegin(vec.second),rend(vec.second));
//         }

//         stack<string>st;
//         vector<string>path;
//         st.push("JFK");

//         while(!st.empty()){
//             string dst=st.top();

//             if(!adj[dst].empty()){
//                 string ngbr=adj[dst].back();
//                 adj[dst].pop_back();
//                 st.push(ngbr);
//             }
//             else{
//                 path.push_back(dst);
//                 st.pop();
//             }
//         }

//         reverse(path.begin(),path.end());
//         return path;


//     }
// };





// vector<string> findItinerary(vector<pair<string, string>> tickets) {
//     for (auto ticket : tickets)
//         targets[ticket.first].insert(ticket.second);
//     visit("JFK");
//     return vector<string>(route.rbegin(), route.rend());
// }

// map<string, multiset<string>> targets;
// vector<string> route;

// void visit(string airport) {
//     while (targets[airport].size()) {
//         string next = *targets[airport].begin();
//         targets[airport].erase(targets[airport].begin());
//         visit(next);
//     }
//     route.push_back(airport);
// }
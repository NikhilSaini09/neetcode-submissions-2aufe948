// class TimeMap {
// private:
//     unordered_map<string, set<pair<int, string>>> keys;
// public:
//     TimeMap() {}
    
//     void set(string key, string value, int timestamp) {
//         keys[key].insert({timestamp, value});
//     }
    
//     string get(string key, int timestamp) {
//         if(!keys.count(key)) return "";
//         auto it = keys[key].upper_bound({timestamp, "\xff"});
//         if(it == keys[key].begin()) return "";

//         it = std::prev(it);
//         return it->second;
//     }
// };


// class TimeMap {
// private:
//     unordered_map<string, vector<pair<int, string>>> keys;
// public:
//     TimeMap() {}
    
//     void set(string key, string value, int timestamp) {
//         keys[key].emplace_back(timestamp, value);
//     }
    
//     string get(string key, int timestamp) {
//         auto it2 = keys.find(key);
//         if(it2 == keys.end()) return "";

//         auto &v = it2->second;
//         // auto it = upper_bound(v.begin(), v.end(), make_pair(timestamp, string(1, 127)));

//         // auto it = upper_bound(v.begin(), v.end(), make_pair(timestamp, ""), 
//         //     [] (const pair<int, string>& target, const pair<int, string>& element) {
//         //         return target.first < element.first; 
//         //     });
//         // if(it == v.begin()) return "";

//         // return prev(it)->second;

//         int idx = upper_bound(v.begin(), v.end(), make_pair(timestamp, ""), 
//             [] (const pair<int, string>& target, const pair<int, string>& element) {
//                 return target.first < element.first; 
//             }) - v.begin();
//         if(idx == 0) return "";

//         return v[--idx].second;
//     }
// };



class TimeMap {
    unordered_map<string, vector<pair<int, string>>> dict;
public:
    TimeMap() {}
    
    void set(string key, string value, int timestamp) {
        dict[key].emplace_back(timestamp, value);
    }
    
    string get(string key, int timestamp) {
        if(dict.count(key)) {
            auto it = upper_bound(dict[key].begin(), dict[key].end(), timestamp, 
                                    [] (int value, const pair<int, string>& p) {
                                        return value < p.first;
                                    });
            return (it == dict[key].begin()) ? "" : (--it)->second;
        }
        return "";
    }
};
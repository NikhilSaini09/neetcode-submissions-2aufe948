class TimeMap {
private:
    unordered_map<string, set<pair<int, string>>> keys;
public:
    TimeMap() {}
    
    void set(string key, string value, int timestamp) {
        keys[key].insert({timestamp, value});
    }
    
    string get(string key, int timestamp) {
        if(!keys.count(key)) return "";
        auto it = keys[key].upper_bound({timestamp, "\xff"});
        if(it == keys[key].begin()) return "";

        it = std::prev(it);
        return it->second;
    }
};

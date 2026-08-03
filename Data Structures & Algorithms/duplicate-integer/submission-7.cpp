class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        unordered_set<int> sn;

        for(int n : nums) {
            if(sn.count(n)) return true;
            sn.insert(n);
        }

        return false;
    }
};
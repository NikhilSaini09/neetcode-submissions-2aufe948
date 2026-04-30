class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        int left = (accumulate(piles.begin(), piles.end(), 0LL)+h-1)/h, right = *max_element(piles.begin(), piles.end());

        while(left <= right) {
            int mid = left + (right-left)/2;

            if(isvalid(piles, mid, h)) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
private:
    bool isvalid(vector<int>& arr, int a, int max) {
        long long hours = 0;
        for(int x : arr) {
            hours += ceil((double)x / (double)a);
            if(hours > max) return false;
        }
        return true;
    }
};

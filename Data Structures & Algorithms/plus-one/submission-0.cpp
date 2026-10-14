class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int carry = 1, n = digits.size();

        for(int i = n - 1; i >= 0; --i) {
            if(digits[i] < 9) {
                ++digits[i];
                carry = 0;
                break;
            } else digits[i] = 0;
        }

        if(carry) digits.insert(digits.begin(), 1);

        return digits;
    }
};

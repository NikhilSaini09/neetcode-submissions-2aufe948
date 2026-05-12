class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int slow = nums[0], fast = nums[0];
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while(slow != fast);

        slow = nums[0];
        while(slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow;
    }
};




// int len = nums.length;
//         int low = 1;
//         int high = len - 1;
//         while (low < high) {
//             int mid = low + (high - low) / 2;
//             int cnt = 0;
//             for (int i = 0; i < len; i++) {
//                 if (nums[i] <= mid) {
//                     cnt++;
//                 }
//             }

//             if (cnt <= mid) {
//                 low = mid + 1;
//             } else {
//                 high = mid;
//             }
//         }

//         return low;



    // public static int findDuplicate_bit(int[] nums) {
    //     int n = nums.length;
    //     int ans = 0;
    //     int bit_max = 31;
    //     while (((n - 1) >> bit_max) == 0) {
    //         bit_max -= 1;
    //     }

    //     for (int bit = 0; bit <= bit_max; ++bit) {
    //         int x = 0, y = 0;
    //         for (int i = 0; i < n; ++i) {
    //             if ((nums[i] & (1 << bit)) != 0) {
    //                 x += 1;
    //             }
    //             if (i >= 1 && ((i & (1 << bit)) != 0)) {
    //                 y += 1;
    //             }
    //         }
    //         if (x > y) {
    //             ans |= 1 << bit;
    //         }
    //     }

    //     return ans;
    // }
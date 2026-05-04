class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size(), m = nums2.size();
        if(n > m) return findMedianSortedArrays(nums2, nums1);

        int l = 0, r = n, midIdx = (n + m) >> 1;
        while(l <= r) {
            int mid1 = l + ((r - l) >> 1);
            int mid2 = midIdx - mid1;

            int l1 = mid1 > 0 ? nums1[mid1 - 1] : INT_MIN;
            int r1 = mid1 < n ? nums1[mid1] : INT_MAX;
            int l2 = mid2 > 0 ? nums2[mid2 - 1] : INT_MIN;
            int r2 = mid2 < m ? nums2[mid2] : INT_MAX;

            if(l1 <= r2 && l2 <= r1) {
                if((n + m) & 1) return static_cast<double>(min(r1, r2));
                return (static_cast<double>(min(r1, r2)) + max(l1, l2)) / 2;
            } else if(l1 > r2) r = mid1 - 1;
            else l = mid1 + 1;
        }

        return -1;
    }
};

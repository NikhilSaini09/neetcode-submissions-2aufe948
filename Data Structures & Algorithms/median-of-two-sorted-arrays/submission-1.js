class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const n = nums1.length, m = nums2.length;
        if(n > m) return this.findMedianSortedArrays(nums2, nums1);

        let l = 0, r = n, midIdx = (n + m) >> 1;
        while(l <= r) {
            const mid1 = l + ((r - l) >> 1);
            const mid2 = midIdx - mid1;

            const l1 = mid1 > 0 ? nums1[mid1 - 1] : -Infinity;
            const r1 = mid1 < n ? nums1[mid1] : Infinity;
            const l2 = mid2 > 0 ? nums2[mid2 - 1] : -Infinity;
            const r2 = mid2 < m ? nums2[mid2] : Infinity;

            if(l1 <= r2 && l2 <= r1) {
                if((n + m) & 1) return Math.min(r1, r2);
                return (Math.min(r1, r2) + Math.max(l1, l2)) / 2;
            } else if(l1 > r2) r = mid1 - 1;
            else l = mid1 + 1;
        }

        return -1;
    }
}

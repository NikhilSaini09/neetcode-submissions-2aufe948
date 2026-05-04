// class Solution {
//     /**
//      * @param {number[]} nums1
//      * @param {number[]} nums2
//      * @return {number}
//      */
//     findMedianSortedArrays(nums1, nums2) {
//         const n = nums1.length, m = nums2.length;
//         if(n > m) return this.findMedianSortedArrays(nums2, nums1);

//         let l = 0, r = n, midIdx = (n + m) >> 1;
//         while(l <= r) {
//             const mid1 = l + ((r - l) >> 1);
//             const mid2 = midIdx - mid1;

//             const l1 = mid1 > 0 ? nums1[mid1 - 1] : -Infinity;
//             const r1 = mid1 < n ? nums1[mid1] : Infinity;
//             const l2 = mid2 > 0 ? nums2[mid2 - 1] : -Infinity;
//             const r2 = mid2 < m ? nums2[mid2] : Infinity;

//             if(l1 <= r2 && l2 <= r1) {
//                 if((n + m) & 1) return Math.min(r1, r2);
//                 return (Math.min(r1, r2) + Math.max(l1, l2)) / 2;
//             } else if(l1 > r2) r = mid1 - 1;
//             else l = mid1 + 1;
//         }

//         return -1;
//     }
// }


class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const len = nums1.length + nums2.length;
        const medianIndex1 = Math.floor((len - 1) / 2);
        const medianIndex2 = Math.floor(len / 2);

        let m1 = 0;
        let m2 = 0;
        for (let i = 0, j = 0, k = 0; k < len; k++) {
            let curr = 0;
            if (i === nums1.length) curr = nums2[j++];
            else if (j === nums2.length) curr = nums1[i++];
            else if (nums1[i] < nums2[j]) curr = nums1[i++];
            else curr = nums2[j++];

            if (k === medianIndex1) m1 = curr;
            if (k === medianIndex2) m2 = curr;
        }

        return (m1 + m2) / 2;
    }
}

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        n, m = len(nums1), len(nums2)

        if n > m:
            return self.findMedianSortedArrays(nums2, nums1)
        
        l, r = 0, n
        half = (n + m) // 2
        while l <= r:
            mid1 = l + ((r - l) >> 1)
            mid2 = half - mid1

            l1 = nums1[mid1 - 1] if mid1 > 0 else float('-inf')
            r1 = nums1[mid1] if mid1 < n else float('inf')
            l2 = nums2[mid2 - 1] if mid2 > 0 else float('-inf')
            r2 = nums2[mid2] if mid2 < m else float('inf')

            if l1 <= r2 and l2 <= r1:
                if (n + m) % 2 == 1:
                    return float(min(r1, r2))
                return (min(r1, r2) + max(l1, l2)) / 2.0
            elif l1 > r2:
                r = mid1 - 1
            else:
                l = mid1 + 1

        return -1.0
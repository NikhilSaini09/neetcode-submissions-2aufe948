class Solution:
    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
        ans = 0
        for a, b, c in triplets:
            if a <= target[0] and b <= target[1] and c <= target[2]:
                if a == target[0]:
                    ans |= 1
                if b == target[1]:
                    ans |= 2
                if c == target[2]:
                    ans |= 4
        return ans == 7
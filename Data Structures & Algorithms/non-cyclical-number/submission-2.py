class Solution:
    def isHappy(self, n: int) -> bool:
        def get(n: int) -> int:
            ans = 0
            while n:
                tens = n % 10
                ans += tens * tens
                n = n // 10
            return ans
        
        slow, fast = get(n), get(get(n));
        while fast != 1 and slow != fast:
            slow, fast = get(slow), get(get(fast))
        return fast == 1
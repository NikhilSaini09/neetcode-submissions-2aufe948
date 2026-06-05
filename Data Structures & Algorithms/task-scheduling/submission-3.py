class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        frequencies = collections.Counter(tasks)
        
        max_freq = max(frequencies.values())
        
        count_max = sum(1 for f in frequencies.values() if f == max_freq)
        
        result = (max_freq - 1) * (n + 1) + count_max
        return max(result, len(tasks))
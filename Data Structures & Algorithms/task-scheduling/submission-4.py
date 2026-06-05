class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        frequencies = collections.Counter(tasks)
        
        max_freq = max(frequencies.values())
        
        count_max = sum(1 for f in frequencies.values() if f == max_freq)
        
        result = (max_freq - 1) * (n + 1) + count_max
        return max(result, len(tasks))


        
        # freq = [0] * 26
        # for c in tasks:
        #     freq[ord(c) - ord('A')] += 1
        # max_freq = max(freq)

        # count_max = 0
        # for f in freq:
        #     if f == max_freq:
        #         count_max += 1

        # result = (max_freq - 1) * (n + 1) + count_max
        # return max(result, len(tasks))
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        st = set(wordList)
        if endWord not in st:
            return 0
        
        n = len(beginWord)
        queue = collections.deque([beginWord])

        ascii_st = ord('a')
        ascii_ed = ord('z') + 1
        cnt = 2
        while queue:
            qs = len(queue)

            for _ in range(qs):
                cur = queue.popleft()

                for i in range(n):
                    for j in range(ascii_st, ascii_ed):
                        c = chr(j)
                        if cur[i] == c:
                            continue
                        nextWord = cur[:i] + c + cur[i + 1:]

                        if nextWord == endWord:
                            return cnt
                        
                        if nextWord in st:
                            queue.append(nextWord)
                            st.remove(nextWord)
            cnt += 1
        
        return 0
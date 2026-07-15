class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> st = new HashSet<>(wordList);

        if(!st.contains(endWord)) return 0;

        int n = beginWord.length();
        // Queue<String> queue = new LinkedList<>();
        Queue<String> queue = new ArrayDeque<>();
        queue.offer(beginWord);

        int cnt = 2;
        while(!queue.isEmpty()) {
            int qs = queue.size();

            while(qs-- > 0) {
                char[] cur = queue.poll().toCharArray();
                for(int i = 0; i < n; ++i) {
                    char oc = cur[i];
                    for(char c = 'a'; c <= 'z'; ++c) {
                        if(oc == c) continue;

                        cur[i] = c;
                        String nextWord = new String(cur);
                        if(nextWord.equals(endWord)) return cnt;
                        if(st.contains(nextWord)) {
                            queue.offer(nextWord);
                            st.remove(nextWord);
                        }
                    }
                    cur[i] = oc;
                }
            }

            ++cnt;
        }

        return 0;
    }
}

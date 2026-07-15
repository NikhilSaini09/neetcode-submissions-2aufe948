class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const wordSet = new Set(wordList);
        if(!wordSet.has(endWord)) return 0;

        const n = beginWord.length;
        const queue = [beginWord];
        
        let cnt = 2;
        const startCode = 'a'.charCodeAt(0);
        const endCode = 'z'.charCodeAt(0);
        while(queue.length > 0) {
            const qs = queue.length;
            
            for(let k = 0; k < qs; k++) {
                const cur = queue.shift();
                
                for(let i = 0; i < n; i++) {
                    const originalChar = cur[i];
                    
                    for(let code = startCode; code <= endCode; code++) {
                        const c = String.fromCharCode(code);
                        if(c === originalChar) continue;
                        
                        const nextWord = cur.slice(0, i) + c + cur.slice(i + 1);
                        
                        if(nextWord === endWord) return cnt;
                        if(wordSet.has(nextWord)) {
                            queue.push(nextWord);
                            wordSet.delete(nextWord);
                        }
                    }
                }
            }
            cnt++;
        }

        return 0;
    }
}

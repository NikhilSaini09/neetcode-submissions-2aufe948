class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(
        beginWord: string,
        endWord: string,
        wordList: string[],
    ): number {
        const wordSet: Set<string> = new Set(wordList);
        if(!wordSet.has(endWord)) return 0;

        const n: number = beginWord.length;
        const queue: string[] = [beginWord];
        
        let cnt: number = 2;
        const startCode: number = 'a'.charCodeAt(0);
        const endCode: number = 'z'.charCodeAt(0);
        while(queue.length > 0) {
            const qs: number = queue.length;
            
            for(let k = 0; k < qs; k++) {
                const cur: string = queue.shift();
                
                for(let i = 0; i < n; i++) {
                    const originalChar: string = cur[i];
                    
                    for(let code = startCode; code <= endCode; code++) {
                        const c: string = String.fromCharCode(code);
                        if(c === originalChar) continue;
                        
                        const nextWord: string = cur.slice(0, i) + c + cur.slice(i + 1);
                        
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

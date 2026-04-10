// class Solution {
//     /**
//      * @param {string[]} strs
//      * @returns {string}
//      */
//     encode(strs) {
//         let ans = strs.length + '#';
//         for(const s of strs) {
//             ans += s.length + '#' + s;
//         }
//         return ans;
//     }

//     /**
//      * @param {string} str
//      * @returns {string[]}
//      */
//     decode(str) {
//         const ans = [];
//         let i = 0;
//         let j = str.indexOf('#', i);
//         const numStrings = parseInt(str.substring(i, j));

//         i = j + 1;
//         while(i < str.length) {
//             j = str.indexOf('#', i);
//             const len = parseInt(str.substring(i, j));
            
//             i = j + 1;
//             ans.push(str.substring(i, i + len));
//             i += len;
//         }
//         return ans;
//     }
// }

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (const s of strs) {
            res += s.length + '#' + s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // 3#icu3#ily
    decode(str) {
        let res = [], i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            const length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }
}
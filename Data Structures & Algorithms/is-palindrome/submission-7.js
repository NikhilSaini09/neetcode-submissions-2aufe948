// class Solution {
//     /**
//      * @param {string} s
//      * @return {boolean}
//      */
//     isPalindrome(s) {
//         // const n = s.length;
//         // let i = 0, j = n - 1;
//         // const isAln = (char) => {
//         //     return /[A-Za-z0-9]/.test(char);
//         // };

//         // while(true) {
//         //     while(i < n && i < j && !isAln(s[i])) ++i;
//         //     while(j >= 0 && i < j && !isAln(s[j])) --j;

//         //     if(i >= j) break;
//         //     if(s[i++].toLowerCase() !== s[j--].toLowerCase()) return false;
//         // }

//         // return true;


//         const clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//         return clean === clean.split('').reverse().join('');
//     }
// }


class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()

        let left = 0, right = cleaned.length - 1;

        while(left < right) {
            if (cleaned[left] !== cleaned[right]) return false;
            left++
            right--
        }

        return true

    }
}


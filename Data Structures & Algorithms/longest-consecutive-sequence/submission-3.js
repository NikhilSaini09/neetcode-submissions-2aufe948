// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number}
//      */
//     longestConsecutive(nums) {
//         let ans = 0;
//         const s = new Set(nums);

//         for(const n of s) {
//             if(!s.has(n - 1)) {
//                 let cur = n + 1;
//                 while(s.has(cur)) ++cur;

//                 ans = Math.max(ans, cur - n);
//             }
//         }

//         return ans;
//     }
// }

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0)
            return 0;

        nums.sort((a, b) => a-b);
        let result = 1, temp = 1;

        for(let i=0; i<nums.length-1; i++) {
            if(nums[i] + 1 === nums[i+1]) {
                temp++;
            } else if(nums[i] !== nums[i+1]) {
                result = Math.max(temp, result);
                temp = 1;
            }
        }

        return Math.max(temp, result);
    }
}


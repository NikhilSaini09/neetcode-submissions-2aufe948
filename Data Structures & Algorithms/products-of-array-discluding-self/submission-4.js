// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number[]}
//      */
//     productExceptSelf(nums) {
//         let ans = new Array(nums.length).fill(1);
//         let left = 1;
//         for(let i = 0; i < nums.length; ++i) {
//             ans[i] *= left;
//             left *= nums[i];
//         }
//         let right = 1;
//         for(let i = nums.length - 1; i >= 0; --i) {
//             ans[i] *= right;
//             right *= nums[i];
//         }

//         return ans;
//     }
// }


class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = new Int32Array(nums.length)
        for (let i=0; i<nums.length;i++) {
            prefix[i] = (i>0 ? prefix[i-1] : 1) * nums[i]
        }
        const suffix = new Int32Array(nums.length)
        for (let i=nums.length-1;i>=0;i--) {
            suffix[i] = (i<nums.length-1 ? suffix[i+1] : 1)*nums[i]
        }

        const out = new Int32Array(nums.length)
        for (let i=0; i<nums.length;i++) {
            out[i] = (i>0?prefix[i-1]:1) * (i<nums.length-1?suffix[i+1]:1)
        }
        return out
    }
}


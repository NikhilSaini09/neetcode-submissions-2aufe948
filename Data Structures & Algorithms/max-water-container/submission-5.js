// class Solution {
//     /**
//      * @param {number[]} heights
//      * @return {number}
//      */
//     maxArea(heights) {
//         let i = 0, j = heights.length - 1;
//         let ans = 0;

//         // while(i < j) {
//         //     if(heights[i] < heights[j]) {
//         //         ans = Math.max(ans, heights[i] * (j - i));
//         //         ++i;
//         //     } else {
//         //         ans = Math.max(ans, heights[j] * (j - i));
//         //         --j;
//         //     }
//         // }

//         while(i < j) {
//             const LH = Math.min(heights[i], heights[j]);
//             ans = Math.max(ans, LH * (j - i));
//             if(heights[i] == LH) ++i;
//             else --j;
//         }

//         return ans;
//     }
// }


class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    maxArea(heights) {
        let left = 0, right = heights.length - 1
        let result = 0
        while (left < right) {
            const min = Math.min(heights[left], heights[right])
            const storage = min * (right - left) 
            result = Math.max(result, storage)

            if (heights[left] <= heights[right]) {
                left++
            } else  {
                right--
            }
        }

        return result
    }
}
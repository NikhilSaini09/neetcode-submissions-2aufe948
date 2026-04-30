// class Solution {
//     /**
//      * @param {number[]} piles
//      * @param {number} h
//      * @return {number}
//      */
//     minEatingSpeed(piles, h) {
//         let max = 0;
//         let sum = 0;
//         for(const p of piles) {
//             if(p > max) max = p;
//             sum += p;
//         }

//         let left = Math.ceil(sum / h);
//         let right = max;

//         while(left <= right) {
//             let mid = (left + (right - left) / 2) | 0;
            
//             if(mid === 0) {
//                 left = 1;
//                 break;
//             }

//             if(this.isValid(piles, mid, h)) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         }

//         return left;
//     }
//     /**
//      * @param {number[]} arr
//      * @param {number} k
//      * @param {number} hMax
//      * @return {boolean}
//      */
//     isValid(arr, k, hMax) {
//         let hours = 0;
//         for(const x of arr) {
//             hours += Math.ceil(x / k);
//             if(hours > hMax) return false;
//         }
//         return true;
//     }
// }




class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     *
     *
     * k= b/h
     *
     *
     * loop througth 1 - math.max(piles)
     *
     * min b/h <= 9
     *
     * k increase to decrease h
     */
    minEatingSpeed(piles, h) {
        let l = 1,
            r = Math.max(...piles),
            min = r;

        while (l <= r) {
            let m = Math.floor((r + l) / 2);
            let bEaten = piles.reduce((a, b) => a + Math.ceil(b / m), 0);

            if (bEaten <= h) {
                min = m;
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return min;
    }
}
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        let ans: number = 0;
        const lis: number[] = [];

        const lb = (n: number): number => {
            let l: number = 0, r: number = ans - 1;
            while(l <= r) {
                const mid: number = l + Math.trunc((r - l) / 2);
                if(lis[mid] >= n) r = mid - 1;
                else l = mid + 1;
            }
            return l;
        }

        for(const n of nums) {
            const idx: number = lb(n);
            if(idx == ans) {
                ans++;
                lis.push(n);
            } else lis[idx] = n;
        }

        return ans;
    }
}

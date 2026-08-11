class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let ans = 0;
        const lis = [];

        const lb = (n) => {
            let l = 0, r = ans - 1;
            while(l <= r) {
                const mid = l + Math.trunc((r - l) / 2);
                if(lis[mid] >= n) r = mid - 1;
                else l = mid + 1;
            }
            return l;
        }

        for(const n of nums) {
            const idx = lb(n);
            if(idx == ans) {
                ans++;
                lis.push(n);
            } else lis[idx] = n;
        }

        return ans;
    }
}

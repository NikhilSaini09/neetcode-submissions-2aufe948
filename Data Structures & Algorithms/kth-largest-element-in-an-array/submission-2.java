class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> mh = new PriorityQueue<>();

        for(int i = 0; i < nums.length; ++i) {
            mh.add(nums[i]);
            if(mh.size() > k) mh.poll();
        }

        return mh.peek();
    }
}

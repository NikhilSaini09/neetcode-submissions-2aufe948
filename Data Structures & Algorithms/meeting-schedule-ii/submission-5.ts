/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        intervals.sort((a, b) => a.start - b.start);
        const minHeap = new MinPriorityQueue();
        for(const i of intervals) {
            if(!minHeap.isEmpty() && minHeap.front() <= i.start) minHeap.pop();
            minHeap.push(i.end);
        }
        return minHeap.size();
    }
}

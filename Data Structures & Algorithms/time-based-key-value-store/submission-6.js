class TimeMap {
    constructor() {
        this.dict = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.dict.has(key)) this.dict.set(key, []);

        this.dict.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.dict.has(key)) return "";

        const vt = this.dict.get(key);

        let left = 0;
        let right = vt.length - 1;
        while(left <= right) {
            let mid = (left + (right - left) / 2) | 0;

            if(vt[mid][0] <= timestamp) left = mid + 1;
            else right = mid - 1;
        }

        return right >= 0 ? vt[right][1] : "";
    }
}

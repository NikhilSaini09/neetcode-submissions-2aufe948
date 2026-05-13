class Node {
    constructor(key = -1, val = -1) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
};

class LRUCache {
    #cacheSize;
    #maxSize;
    #head;
    #tail;
    #mpp;

    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.#cacheSize = 0;
        this.#maxSize = capacity;
        this.#head = new Node();
        this.#tail = new Node();
        this.#mpp = new Map();
        this.#head.next = this.#tail;
        this.#tail.prev = this.#head;
    }

    #moveNodeToEnd(used) {
        if(used == this.#tail.prev) return;

        used.prev.next = used.next;
        used.next.prev = used.prev;

        used.next = this.#tail;
        used.prev = this.#tail.prev;
        this.#tail.prev.next = used;
        this.#tail.prev = used;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.#mpp.has(key)) return -1;

        const node = this.#mpp.get(key);
        this.#moveNodeToEnd(node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.#mpp.has(key)) {
            const node = this.#mpp.get(key);
            this.#moveNodeToEnd(node);
            node.val = value;
        } else {
            if(this.#cacheSize < this.#maxSize) {
                const temp = new Node(key, value);
                temp.prev = this.#tail.prev;
                temp.next = this.#tail;
                this.#tail.prev.next = temp;
                this.#tail.prev = temp;

                this.#cacheSize++;
                this.#mpp.set(key, temp);
            } else {
                const temp = this.#head.next;
                this.#mpp.delete(temp.key);

                this.#head.next = temp.next;
                temp.next.prev = this.#head;

                temp.next = this.#tail;
                temp.prev = this.#tail.prev;
                this.#tail.prev.next = temp;
                this.#tail.prev = temp;

                temp.key = key;
                temp.val = value;
                this.#mpp.set(key, temp);
            }
        }
    }
}

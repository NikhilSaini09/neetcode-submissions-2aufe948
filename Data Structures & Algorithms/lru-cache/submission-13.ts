class LRUNode<K = number, V = number> {
    public key: K | number;
    public val: V | number;
    prev: LRUNode<K, V> | null = null;
    next: LRUNode<K, V> | null = null;
    constructor(key: K | number = -1, val: V | number = -1) {
        this.key = key;
        this.val = val;
    }
};

class LRUCache<K = number, V = number> {
    #cacheSize: number;
    #maxSize: number;
    #head: LRUNode<K, V>;
    #tail: LRUNode<K, V>;
    #mpp: Map<K, LRUNode<K, V>>;

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.#cacheSize = 0;
        this.#maxSize = capacity;
        this.#head = new LRUNode();
        this.#tail = new LRUNode();
        this.#mpp = new Map<K, LRUNode<K, V>>();
        this.#head.next = this.#tail;
        this.#tail.prev = this.#head;
    }

    #moveNodeToEnd(used: LRUNode<K, V>): void {
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
    get(key: K): V | number {
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
    put(key: K, value: V): void {
        if(this.#mpp.has(key)) {
            const node = this.#mpp.get(key);
            this.#moveNodeToEnd(node);
            node.val = value;
        } else {
            if(this.#cacheSize < this.#maxSize) {
                const temp = new LRUNode(key, value);
                temp.prev = this.#tail.prev;
                temp.next = this.#tail;
                this.#tail.prev.next = temp;
                this.#tail.prev = temp;

                this.#cacheSize++;
                this.#mpp.set(key, temp);
            } else {
                const temp = this.#head.next;
                this.#mpp.delete(temp.key as K);

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

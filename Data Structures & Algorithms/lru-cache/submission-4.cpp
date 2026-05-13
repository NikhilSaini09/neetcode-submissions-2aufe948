// class Node {
// public:
//     int key;
//     int val;
//     Node *next;
//     Node *prev;

//     Node() {key = -1; val = -1; next = nullptr; prev = nullptr;}
//     Node(int key1, int val1) {key = key1; val = val1; next = nullptr; prev = nullptr;}
//     Node(int key1, int val1, Node *next1, Node *prev1) {key = key1; val = val1; next = next1; prev = prev1;}
// };

// class LRUCache {
//     int cacheSize, maxSize;
//     Node *head, *tail;
//     unordered_map<int, Node*> mpp;

//     void moveNodeToEnd(Node *used) {
//         if(used == tail->prev) return;

//         used->prev->next = used->next;
//         used->next->prev = used->prev;

//         used->next = tail;
//         used->prev = tail->prev;
//         tail->prev->next = used;
//         tail->prev = used;
//     }
// public:
//     LRUCache(int capacity) {
//         cacheSize = 0;
//         maxSize = capacity;
//         head = new Node();
//         tail = new Node();
//         head->next = tail;
//         tail->prev = head;
//     }
    
//     int get(int key) {
//         auto it = mpp.find(key);
//         if(it == mpp.end()) return -1;

//         moveNodeToEnd(it->second);
//         return it->second->val;
//     }
    
//     void put(int key, int value) {
//         // if (maxSize == 0) return;
//         auto it = mpp.find(key);
//         if(it != mpp.end()) {
//             moveNodeToEnd(it->second);
//             it->second->val = value;
//         } else {
//             if(cacheSize < maxSize) {
//                 Node *temp = new Node(key, value);
//                 temp->prev = tail->prev;
//                 temp->next = tail;
//                 tail->prev->next = temp;
//                 tail->prev = temp;

//                 ++cacheSize;
//                 mpp[key] = temp;
//             } else {
//                 Node *temp = head->next;
//                 mpp.erase(temp->key);

//                 head->next = temp->next;
//                 temp->next->prev = head;

//                 temp->next = tail;
//                 temp->prev = tail->prev;
//                 tail->prev->next = temp;
//                 tail->prev = temp;

//                 temp->key = key;
//                 temp->val = value;
//                 mpp[key] = temp;
//             }
//         }
//     }
// };



class LRUCache {
public:
    int size;
    list<int> order;
    unordered_map<int, pair<list<int>::iterator, int>> cache;
    LRUCache(int capacity) {
        size = capacity;
    }
    
    int get(int key) {
        if (!cache.count(key)) return -1;
        order.erase(cache[key].first);
        order.push_back(key);
        cache[key].first = prev(order.end());
        return cache[key].second;
    }
    
    void put(int key, int value) {
        if (cache.count(key)){
            order.erase(cache[key].first);
        }
        else if (cache.size() == size){
            int lru = order.front();
            order.pop_front();
            cache.erase(lru);
        }
        order.push_back(key);
        cache[key].second = value;
        cache[key].first = --order.end();
    }
};


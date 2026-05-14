/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        priority_queue<ListNode*, vector<ListNode*>, Compare> minHeap;

        for(ListNode* head : lists) {
            if(head) minHeap.push(head);
        }

        ListNode dummy(0);
        ListNode* temp = &dummy;

        while(!minHeap.empty()) {
            ListNode* node = minHeap.top();
            minHeap.pop();

            temp->next = node;
            temp = node;

            if(node->next) minHeap.push(node->next);
        }

        return dummy.next;
    }
private:
    struct Compare {
        bool operator()(ListNode* a, ListNode* b) {
            return a->val > b->val;
        }
    };
};
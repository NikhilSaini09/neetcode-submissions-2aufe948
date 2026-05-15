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

// class Solution {
// public:
//     ListNode* reverseKGroup(ListNode* head, int k) {
//         if(k == 1) return head;

//         ListNode *temp = head;
//         ListNode *prevTemp = nullptr;

//         while(temp) {
//             ListNode *kthNode = nextKthNode(temp, k);

//             if(!kthNode) break;

//             ListNode *nextNode = kthNode->next;
//             kthNode->next = nullptr;

//             ListNode *newHead = reverseLL(temp);
//             temp->next = nextNode;

//             if(prevTemp) prevTemp->next = newHead;
//             prevTemp = temp;

//             if(temp == head) head = newHead;
//             temp = temp->next;
//         }

//         return head;
//     }
// private:
//     ListNode* nextKthNode(ListNode* node, int k) {
//         while (node && --k) node = node->next;
//         return node;
//     }
//     ListNode* reverseLL(ListNode* head) {
//         if (!head || !head->next) return head;

//         ListNode* prev = nullptr;
//         ListNode* curr = head;

//         while (curr) {
//             ListNode* next = curr->next;
//             curr->next = prev;
//             prev = curr;
//             curr = next;
//         }

//         return prev;
//     }
// };


class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode* curr = head;
        ListNode* prev = NULL;
        stack<ListNode*> stk;
        int i = 0;

        while (curr != NULL) {
            stk.push(curr);
            curr = curr->next;
            i++;

            if (i == k) {
                while (!stk.empty()) {
                    if (prev == NULL) {
                        head = stk.top();
                        prev = head;
                    } else {
                        prev->next = stk.top();
                        prev = prev->next;
                    }
                    stk.pop();
                }
                prev->next = curr;
                i = 0;
            }
        }

        return head;
    }
};
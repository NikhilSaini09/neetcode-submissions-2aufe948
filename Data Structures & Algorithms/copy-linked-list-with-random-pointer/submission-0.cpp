/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
        if(!head) return head;

        Node *temp = head;

        while(temp) {
            Node *nextNode = temp->next;
            temp->next = new Node(temp->val);
            temp->next->next = nextNode;
            temp = temp->next->next;
        }

        temp = head;
        while(temp) {
            if(temp->random) temp->next->random = temp->random->next;
            temp = temp->next->next;
        }

        temp = head;
        Node *newHead = head->next;

        while(temp) {
            Node* copy = temp->next;
            temp->next = copy->next;
            if(copy->next) copy->next = copy->next->next;
            temp = temp->next;
        }

        return newHead;
    }
};

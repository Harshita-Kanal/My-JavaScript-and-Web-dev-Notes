
## An algorithm to move all occurrences of an element to the end of a Linked List
In this problem, given a linked list and an input key value, the task is to move all occurrences of the
given key to the end of the linked list.

### What are linked lists ?
Linked List is a data structure. It is a linear data structure where the elements of the linked list are stored in non-consecutive
memory locations, each node in the linked list contains a data item and pointer to the next node in the linked list.

### Brute Force Approach
In this approach we find every occurrence of the given key element. For each occurrence of
the given key element, it is moved to the end of the linked list. <br/>
Time complexity: The worst case complexity of this brute force approach is given by O(N * N)
As we take for each element O(N) time to traverse the linked list and find it.
### Efficient Approach
This approach we maintain two pointers, the current pointer and the tail pointer, the head pointer traverses the linked list, whenever an instance of the key is found, the links are 
updated and a node is inserted at the end of linked list using the tail pointer.

```cpp
#include <bits/stdc++.h>
using namespace std;

struct node {
    int data;
    struct node* next;

};

struct node* head;
struct node* tail = new node;
struct node* temp = new node;
struct node* curr;
struct node* pre;
void print_data(){
 temp = head;
 while(temp != NULL){
    cout << temp -> data << " ";
    temp = temp -> next;
 }
}

struct node* find_and_append(int key, struct node* head){


//Declaration of pointers
curr = head; //represents the current pointer
struct node* last = tail;
struct node* prev = NULL;
struct node* prevToCurr = NULL; //represents the slow pointer

    while (curr != tail)
    {
        //if the key value is found as the head pointer, the value
        //of the head is updated and the node is inserted at the end.
        if (curr -> data == key && prevToCurr == NULL)
        {
            prev = curr;
            curr = curr -> next;
            head = curr;
            last -> next = prev;
            last = last->next;
            last -> next = NULL;
            prev = NULL;
        }
        else
        {
            //if the value is found somewhere in between and
            //not the head pointer.
            if (curr -> data == key && prevToCurr != NULL)
            {
                prev = curr;
                curr = curr -> next;
                prevToCurr -> next = curr;
                last -> next = prev;
                last = last->next;
                last -> next = NULL;
            }
            //if the curr -> data is not equal to the key, simply move the
            //leading and trailing pointers
            else if (curr != tail)
            {
                prevToCurr = curr;
                curr = curr -> next;
            }
        }
    }
    return head;
}

int main(){
int n, num, key;
cout << "Enter the number of elements" <<endl;
cin >> n ;

cout << "Enter the elements: " <<endl;
do {
 cin >> num;
 if(head == NULL){
    head = new node;
    head -> data = num;
    head -> next = NULL;
    tail = head;
 }
 else{
    struct node *new_node = new node;
    new_node -> data = num;
    new_node -> next = NULL;
    tail -> next = new_node;
    tail = new_node;
 }
 n = n - 1;
}while(n > 0);

print_data();
cout << "\nEnter the key: " <<endl;
cin >> key;
find_and_append(key, head);
print_data();
}
```

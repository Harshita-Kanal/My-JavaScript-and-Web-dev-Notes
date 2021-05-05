## An algorithm to move the head of the linked list to the end of linked list
In this problem, given a linked list move the head of the linked list to the end of linked list.

```cpp
Example input:
1 -> 2 -> 2 -> 3
Key value: 2

Example output:
2 -> 2 -> 3 -> 1
```

### What are linked lists ?
Linked List is a data structure. It is a linear data structure where the elements of the linked list are stored in non-consecutive
memory locations, each node in the linked list contains a data item and pointer to the next node in the linked list.

### Representation of linked lists
In our program we have represented a linked list using a `struct` construct in C++.
```cpp
struct node {
    int data;
    struct node* next;
};
```
Here, `data` represents the data value in the node and the `next` pointer represents the pointer to the next node in the list.

### Solution Approach
This approach we maintain two pointers, the current pointer and the tail pointer, the head pointer traverses the linked list, whenever an instance of the key is found, the links are updated and a node is inserted at the end of linked list using the tail pointer.

```cpp
#include <bits/stdc++.h>
using namespace std;

//node representation
struct node {
    int data;
    struct node* next;

};

//pointer declaration
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

//accepting list from user
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

### A small example to understand the solution

Consider the linked list:
```cpp
1 -> 3 -> 2 -> 3
key: 3
```
Initially the `head` pointer would be pointing at the beginning of the linked list and the `tail` pointer would be pointing to the end of linked list.
The `curr` pointer would be traversing the linked list and the `prevToCurr` would be the trailing pointer, one step behind the `curr` pointer.

```cpp
1 -> 3 -> 2 -> 3
    curr       tail
```
At the second step, the `curr -> data == 3` which is the key value. A new node `prev` would be containing the data value 3. This new node would be appended to the end of the list. The position of the tail pointer and the links would be updated where, `curr` would point to node conntaining 2, and `prevToCurr` would be at 1.
The list now becomes.
```cpp
1 -> 2 -> 3 -> 3
   curr       tail
```
The `curr` pointer would traverse forward and `prevToCurr` would be one step behind it. When `curr -> data` becomes equal to 3, A procedure similar to the second step is followed and it is appended to the end of the list.
When `curr == tail` the program ends.
<br/>

__Time complexity__: The time complexity of this approach is given by O(N), where, N is the number of nodes in the linked list. As we traverse all the N nodes in one pass.

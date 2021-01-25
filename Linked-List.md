
## An algorithm to move all occurrences of an element to the end of a Linked List
In this problem, given a linked list and an input key value, the task is to move all occurrences of the
given key to the end of the linked list.

### What are linked lists ?
Linked List is a data structure. It is a linear data structure where the elements of the linked list are stored in non-consecutive
memory locations, each node in the linked list contains a data item and pointer to the next node in the linked list.

### Brute Force Approach
In this approach we find every occurrence of the given key element. For each occurrence of
the given key element, it is moved to the end of the linked list. <br/>

Time complexity: The worst case complexity of this brute force approach is given by O(N^2)
As we take for each element O(N) time to traverse the linked list and find it.

<br/>

### Efficient Approach
This approach we maintain two pointers, the current pointer and the tail pointer, the head pointer traverses the linked list, whenever an instance of the key is found, the links are 
updated and a node is inserted at the end of linked list using the tail pointer.

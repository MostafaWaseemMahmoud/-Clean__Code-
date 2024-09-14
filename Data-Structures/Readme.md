#### ------------- Data Structures --------------

### 1: Arrays

## This order in its values make this data structure great for searching, since on every level of the tree we can identify if the value being looked for is greater or less than the parent node, and from that comparison progressively discard roughly half of the data until we reach our value.

### 2: Stack

## Stacks are a data structure that store information in the form of a list. They allow only adding and removing elements under a LIFO pattern (last in, first out). In stacks, elements can't be added or removed out of order, they always have to follow the LIFO pattern

### 3: Queus

## Queues work in a very similar way to stacks, but elements follow a different pattern for add and removal. Queues allow only a FIFO pattern (first in, first out). In queues, elements can't be added or removed out of order, they always have to follow the FIFO pattern.

### 4: LinkedList

## -> Singly linked list

# Singly Linked Lists Only connect Their Nodes With The Next Value.

## -> Doubly linked lists

# This double pointer approach allows doubly linked lists to perform better with certain methods compared to singly linked lists, but at a cost of consuming more memory (with doubly linked lists we need to store two pointers instead of one).

### 5:  Trees

## Trees are formed by a root node (the first node on the tree), and all the nodes that come off that root are called children. The nodes at the bottom of the tree, which have no "descendants", are called leaf nodes. And the height of the tree is determined by the number of parent/child connections it has.
/**
  You are given the heads of two sorted linked lists list1 and list2.
  
  Merge the two lists into one sorted list.
  The list should be made by splicing together the nodes of the first two lists.
  
  Return the head of the merged linked list.
*/


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2

    else if (!list2) return list1

    else if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1
    }
    
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2
    }
}

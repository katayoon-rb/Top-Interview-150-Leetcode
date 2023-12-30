/**
  You are given two non-empty linked lists representing two non-negative integers.
  The digits are stored in reverse order, and each of their nodes contains a single digit.
  Add the two numbers and return the sum as a linked list.
  
  You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry: number = 0): ListNode | null {
    if(!l1 && !l2 && !carry) return null

    var total : number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0)
    carry = parseInt(total / 10 + '')
    return new ListNode( total % 10, addTwoNumbers(l1?.next, l2?.next, carry ))
}

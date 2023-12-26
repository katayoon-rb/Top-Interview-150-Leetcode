/**
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
  determine if the input string is valid.
  
  An input string is valid if:
      Open brackets must be closed by the same type of brackets.
      Open brackets must be closed in the correct order.
      Every close bracket has a corresponding open bracket of the same type.
*/


function isValid(s: string): boolean {
    let temp = []
    let store = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < s.length; i++) {
        if (temp.length < 1) { temp.push( s[i] ) }
        else if ( temp[ temp.length-1 ] !== store[ s[i] ] ) { temp.push( s[i] ) }
        else temp.pop()
    }
    return !(temp.length > 0)
}

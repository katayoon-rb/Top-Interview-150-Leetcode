/**
  A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
  and removing all non-alphanumeric characters, it reads the same forward and backward.
  Alphanumeric characters include letters and numbers.
  
  Given a string s, return true if it is a palindrome, or false otherwise.
*/

function isPalindrome(s: string): boolean {
    if (s.trim() === "") return true

    let str = ""
    const lowerString = s.toLowerCase()

    for (let i = 0; i < lowerString.length; i++) {
        if (
            (lowerString[i] >= "a" && lowerString[i] <= "z") ||
            (lowerString[i] >= "0" && lowerString[i] <= "9")
        ) {
            str += lowerString[i]
        }
    }


    let left = 0
    let right = str.length - 1

    while (left < right) {
        if ( str.charCodeAt(left) === str.charCodeAt(right) ) {
            left++
            right--
        }
        else { return false }
    }

    return true
}

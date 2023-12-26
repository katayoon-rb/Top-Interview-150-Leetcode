/**
  Given a string s consisting of words and spaces, return the length of the last word in the string.
  A word is a maximal substring consisting of non-space characters only.
*/

function lengthOfLastWord(s: string): number {
    const sArr: Array<string> = s.trim().split(' ')
    return sArr[ sArr.length - 1 ].length
}

/**
  Given two strings ransomNote and magazine, return true if ransomNote can be
  constructed by using the letters from magazine and false otherwise.
  Each letter in magazine can only be used once in ransomNote.
*/


function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) return false
    const counter: object = {}
    
    for (let i = 0; i < magazine.length; i++) {
        counter[magazine[i]] = (counter[magazine[i]] || 0) + 1
    }
    for (let j = 0; j < ransomNote.length; j++) {
        if (!counter[ransomNote[j]]) { return false }
        else { counter[ransomNote[j]] -= 1 }
  }
  return true
}

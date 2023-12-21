/**
  You are given a string s and an array of strings words. All the strings of words are of the same length.
  A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.
  
      For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are
      all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
  
  Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.
*/



function findSubstring(s: string, words: string[]): number[] {
    words.sort()
    let right = words.reduce((acc, curr) => acc += curr.length, 0)

    const results = []
    for (let i = 0 ; right < s.length + 1 ; i++, right++) {
        let subString = s.substring( i, right ).match( new RegExp(`.{1,${words[0].length}}`, 'g') ).sort()
        if (JSON.stringify(subString) === JSON.stringify(words)) {
            results.push(i)
        }
    }

    return results
}

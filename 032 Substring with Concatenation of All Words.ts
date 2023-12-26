/**
  You are given a string s and an array of strings words. All the strings of words are of the same length.
  A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.
  
      For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are
      all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
  
  Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.
*/



function findSubstring(s: string, words: string[]): number[] {
  if (s.length == 0 || words.length == 0) {
    return []
  }

  let wordCount = new Map()
  for (const word of words) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1)
  }

  const n = words.length
  const len = words[0].length
  let res: number[] = []

  for (let i = 0; i <= s.length - n * len; i++) {
    let strCount = new Map()
    let j = 0

    while (j < n) {
      const start = i + j * len
      const end = start + len
      const t = s.substring(start, end)

      if (!wordCount.get(t)) { break }
      strCount.set(t, (strCount.get(t) || 0) + 1)

      if (strCount.get(t) > wordCount.get(t)) { break }
      j += 1
    }

    if (j == n) { res.push(i) }
  }
  return res
}
    return results
}

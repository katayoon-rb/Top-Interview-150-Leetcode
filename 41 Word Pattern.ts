/**
  Given a pattern and a string s, find if s follows the same pattern.
  Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
*/


function wordPattern(pattern: string, s: string): boolean {
    const sArr = s.split(' ')
    if (sArr.length !== pattern.length) return false
    
    const pMap = new Map< string, string >()
    const sMap = new Map< string, string >()
    
    for (let i = 0; i < sArr.length; i++) {
        const pCount = pattern[i]
        const sCount = sArr[i]
        
        if (pMap.has(pCount) && pMap.get(pCount) !== sCount) return false
        if (sMap.has(sCount) && sMap.get(sCount) !== pCount) return false
        
        pMap.set(pCount, sCount)
        sMap.set(sCount, pCount)
    }
    return true
}

/**
  Given an array of strings strs, group the anagrams together. You can return the answer in any order.
  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
*/


function groupAnagrams(strs: string[]): string[][] {
    const mapsAreEqual = (map1, map2) => {
        if (map1.size !== map2.size) { return false }
        for (const [key, value] of map1) {
            if (!map2.has(key)) { return false }
            if (map2.get(key) !== value) { return false }
        }
       return true
    }

    const solve = (strs: string[]) =>  {
        const n = strs.length
        const dp = new Array(n)

        for ( let i = 0; i < dp.length; i++) { dp[i] = new Map() }

        for ( let  i = 0; i < strs.length; i++) {
            for( let j = 0; j < strs[i].length; j++) {
                if (dp[i].has(strs[i][j])) {       
                    const val = dp[i].get(strs[i][j])
                    dp[i].set(strs[i][j], val + 1)
                }
                else { dp[i].set(strs[i][j], 1) }
            }
        }

        const anagramGroup = []
        let group = []
        for (let i = 0; i < strs.length; i++) {
            if(strs[i] !== null) {
                group.push(strs[i])
                for ( let j = i+1; j < strs.length; j++) {
                   if ( mapsAreEqual(dp[i], dp[j]) ) {
                        group.push(strs[j])
                        strs[j] = null
                    }
                }
                anagramGroup.push(group)
                group = []
            }       
        }
        return anagramGroup
    }
    return solve(strs)
}

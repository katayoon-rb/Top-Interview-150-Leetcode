/**
  Given two strings s and t of lengths m and n respectively, return the minimum window substring
  of s such that every character in t (including duplicates) is included in the window.
  If there is no such substring, return the empty string "".
  
  The testcases will be generated such that the answer is unique.
*/


function minWindow(s: string, t: string): string {
    const freqMap = new Map()

    for (let char of t) {
        if ( freqMap.has(char) ) { freqMap.set(char, freqMap.get(char) + 1) }
        else { freqMap.set(char, 1) }
    }


    let neededCount = t.length
    let right = 0
    let left = 0
    let minCount = s.length + 1 
    let resultIndexes = [-1, -1]

    for (right = 0; right < s.length; right++) { // 13
        const rChar = s[right]
        if ( freqMap.has(rChar) ) {
            if ( freqMap.get(rChar) > 0 ) { neededCount-- }
            freqMap.set( rChar, freqMap.get(rChar) - 1 )
        }

        while (neededCount == 0) {
            if (right - left + 1 < minCount) { 
                minCount = right - left + 1
                resultIndexes = [left, right] 
            }

            const lChar = s[left]
            if (freqMap.has(lChar)) {
                freqMap.set( lChar, freqMap.get(lChar) + 1 )

                if (freqMap.get(lChar) > 0) { neededCount++ }
            }

            left++
        }
    }
    return s.slice(resultIndexes[0], resultIndexes[1] + 1);
}

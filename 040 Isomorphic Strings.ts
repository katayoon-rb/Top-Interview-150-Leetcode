/**
  Given two strings s and t, determine if they are isomorphic.
  Two strings s and t are isomorphic if the characters in s can be replaced to get t.
  
  All occurrences of a character must be replaced with another character while preserving
  the order of characters. No two characters may map to the same character, but a character may map to itself.
*/

 function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const smap = new Map< string, string >()
    const tmap = new Map< string, string >()

    for (let i = 0; i < s.length; i++) {
        const schar = s[i]
        const tchar = t[i]

        if (smap.has(schar) && smap.get(schar) !== tchar) { return false }
        if (tmap.has(tchar) && tmap.get(tchar) !== schar) { return false }
        
        smap.set(schar, tchar)
        tmap.set(tchar, schar)
    }
    return true
}

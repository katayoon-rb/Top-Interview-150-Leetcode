/**
  Given two strings needle and haystack, return the index of the first occurrence
  of needle in haystack, or -1 if needle is not part of haystack.
*/ 

function strStr(haystack: string, needle: string): number {
    return haystack.search(needle)
}

/**
  Given an unsorted array of integers nums,
  return the length of the longest consecutive elements sequence.
  You must write an algorithm that runs in O(n) time.
*/


function longestConsecutive(nums: number[]): number {
    if (nums.length < 2) { return nums.length }

    const set = new Set(nums)
    let max = 0

    set.forEach(num => {
        if (set.has(num +1)) { return }

        let count = 1
        let current = num -1
        while (set.has(current)) {
            count++
            current--
        }
        max = Math.max(count, max)
    })
    return max
}

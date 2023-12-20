/**
  Given an array of positive integers nums and a positive integer target, return the minimal length of asubarray
  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
*/

function minSubArrayLen(target: number, nums: number[]): number {
    const n = nums.length
    let low = 0
    let sum = 0
    let minLength = Number.MAX_SAFE_INTEGER

    for (let high = 0; high < n; high++) {
        sum += nums[high]
        
        while (low <= high && sum >= target) {
        const currLength = high - low + 1
        minLength = Math.min( minLength, currLength )
        sum -= nums[low]
        low++
        }
    }
    
    if (minLength === Number.MAX_SAFE_INTEGER) return 0
    return minLength
}

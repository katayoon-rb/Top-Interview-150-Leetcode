/**
  You are given an integer array nums. You are initially positioned at the array's first index,
  and each element in the array represents your maximum jump length at that position.
  Return true if you can reach the last index, or false otherwise.
*/

function canJump(nums: number[]): boolean {
    let lastJump = nums.length - 1

    for (let i = lastJump - 1; i > 0; i--) {
        if (nums[i] >= lastJump - i) {
            lastJump = i
        }
    }
    return nums[0] >= lastJump
}

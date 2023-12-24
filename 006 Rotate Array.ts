/**
  Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/

function rotate(nums: number[], k: number): void {
    while(k--) {
        nums.unshift( nums.pop() )
    }
}

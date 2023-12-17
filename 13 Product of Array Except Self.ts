/**
  Given an integer array nums, return an array answer such that answer[i]
  is equal to the product of all the elements of nums except nums[i].
  
  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
  You must write an algorithm that runs in O(n) time and without using the division operation.
*/


function productExceptSelf(nums: number[]): number[] {
    let product = 1
    let answer = new Array( nums.length )

    for (let i = 0; i < nums.length; i += 1) {
        answer[i] = product
        product *= nums[i]
    }

    product = 1
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        answer[i] *= product
        product *= nums[i]
    }

    return answer
}

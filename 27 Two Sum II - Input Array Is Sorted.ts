/**
  Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
  find two numbers such that they add up to a specific target number.
  Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
  
  Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
  The tests are generated such that there is exactly one solution. You may not use the same element twice.
  Your solution must use only constant extra space.
*/


function twoSum(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length -1 ; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if ( numbers[i] + numbers[j] === target && i !== j ) {
                return [i + 1, j + 1]
            }
        }
    }
}

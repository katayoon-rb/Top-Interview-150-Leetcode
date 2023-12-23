/**
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.
*/


function twoSum(numbers: number[], target: number): number[] {
    const numberMap = new Map()
    
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        const difference = target - number
        
        if ( numberMap.has(difference )) { return [numberMap.get(difference), i] }
        numberMap.set( number, i )
    }
}

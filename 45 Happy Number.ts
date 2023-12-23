/**
  Write an algorithm to determine if a number n is happy.
  A happy number is a number defined by the following process:
      Starting with any positive integer, replace the number by the sum of the squares of its digits.
      Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
      Those numbers for which this process ends in 1 are happy.
  
  Return true if n is a happy number, and false if not.
*/


function isHappy(n: number): boolean {
    if (n == 1 || n == 7) return true

    let sum: number = n
    while (sum > 9) {
        sum = sum.toString().split('').map(digit => {
                return Number(digit)
            }).reduce( (partialSum, a) => Math.pow(a, 2) + (partialSum), 0 )
       
        if (sum == 1 || sum == 7) { return true }
    }
    return false
}

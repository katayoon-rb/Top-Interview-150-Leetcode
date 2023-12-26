/**
  You are given an integer array height of length n. There are n vertical lines
  drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
  
  Find two lines that together with the x-axis form a container, such that the container contains the most water.
  Return the maximum amount of water a container can store.
  Notice that you may not slant the container.
*/


function maxArea(height: number[]): number {
    let left = 0
    let right = height.length - 1
    let ans = Number.MIN_SAFE_INTEGER

    while (left < right) {
        let area = 0
        if ( height[left] < height[right] ) {
            area = height[left] * (right - left)
            left++
        }
        else {
            area = height[right] * (right - left)
            right--
        }
        ans = Math.max(ans, area)
    }
    return ans
}

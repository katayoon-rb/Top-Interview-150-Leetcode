/**
  Given n non-negative integers representing an elevation map where the width of each bar is 1,
  compute how much water it can trap after raining.
*/

function trap(height: number[]): number {
    let left = 0
    let right = height.length - 1   // 11

    let trappedWater = 0
    let leftMaxHeight = 0
    let rightMaxHeight = 0
    
    while (left <= right) {
        if ( height[left] < height[right] ) {
            if (height[left] > leftMaxHeight) { leftMaxHeight = height[left] }
            else { trappedWater += leftMaxHeight - height[left] }
            left++
        }
        else {
            if (height[right] > rightMaxHeight) { rightMaxHeight = height[right] }
            else { trappedWater += rightMaxHeight - height[right] }
            right--
        }
    }
    return trappedWater
}

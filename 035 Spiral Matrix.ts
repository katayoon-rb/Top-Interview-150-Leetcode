/**
  Given an m x n matrix, return all elements of the matrix in spiral order.
*/


function spiralOrder(matrix: number[][]): number[] {
    let ans: number[] = []
    let l: number = 0
    let r: number = matrix[0].length - 1
    let t: number = 0
    let b: number = matrix.length - 1

    while (l <= r && t <= b) {
        for (let i = l; i <= r; i++) { ans.push(matrix[t][i]) }
        t++

        for (let i = t; i <= b; i++) { ans.push(matrix[i][r]) }
        r--

        for (let i = r; i >= l && t <= b; i--) { ans.push(matrix[b][i]) }
        b--
    
        for (let i = b; i >= t && l <= r; i--) { ans.push(matrix[i][l]) }
        l++
    }

    return ans
}

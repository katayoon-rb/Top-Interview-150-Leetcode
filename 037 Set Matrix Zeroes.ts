/**
  Given an m x n integer matrix matrix,
  if an element is 0, set its entire row and column to 0's.
  You must do it in place.
*/


function setZeroes(matrix: number[][]): void {
    let rows: number[] = []
    let cols: number[] = []

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rows.push(i)
                cols.push(j)
            }
        }
    }
    for (let i = 0; i < rows.length; i++){
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[rows[i]][j] = 0
        }
    }
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < cols.length; j++) {
            matrix[i][cols[j]] = 0
        }
    }
}

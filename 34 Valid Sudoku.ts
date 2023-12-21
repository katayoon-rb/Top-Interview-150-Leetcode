/**
  Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
      Each row must contain the digits 1-9 without repetition.
      Each column must contain the digits 1-9 without repetition.
      Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
  
  Note:
      A Sudoku board (partially filled) could be valid but is not necessarily solvable.
      Only the filled cells need to be validated according to the mentioned rules.
  */


function convertStringTo2DArray(strBoard: string[][]) {
    let newBoard = new Array(9)
    let rows = strBoard.length
    let columns = strBoard[0].length

    for(let i = 0; i < rows; i++) {
        newBoard[i] = []
        for (let j = 0; j < columns; j++) {
            newBoard[i].push( Number( strBoard[i][j] ) )
        }
    }
    return newBoard
}

function isValidSudoku(board: string[][]): boolean {
    let boardN = convertStringTo2DArray(board);

    let rows = 9
    let columns = 9

    // Checking Vertically
    for (let col = 0 ; col < columns; col++) {
        for (let row = 0; row < rows; row++) {
            for (let nextRow = row + 1; nextRow < rows; nextRow++) {
                if ( boardN[row][col] === boardN[nextRow][col] ) {
                    return false
                }
            }
        }
    }
    // Checking Horizontally
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            for (let nextCol = col + 1; nextCol < columns; nextCol++) {
                if (boardN[row][col] === boardN[row][nextCol]) {
                    return false
                }
            }
        }
    }

    // Checking Diagonally
    for (let rowStep = 0; rowStep < 9; rowStep = rowStep + 3) {
        for (let colStep = 0; colStep < 9; colStep = colStep + 3) {
            let m = new Map()
            for (let row = rowStep; row < rowStep + 3; row++) {
                for (let col = colStep; col < colStep + 3; col++) {
                    if (boardN[row][col]) {
                        if (m.has(boardN[row][col])) { return false }
                        else {  m.set(boardN[row][col], true) }
                    }
                }
            }
        }
    }
    return true
}

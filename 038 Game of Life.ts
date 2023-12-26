/**
  According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
  
  The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or
  dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using
  the following four rules (taken from the above Wikipedia article):
      Any live cell with fewer than two live neighbors dies as if caused by under-population.
      Any live cell with two or three live neighbors lives on to the next generation.
      Any live cell with more than three live neighbors dies, as if by over-population.
      Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
  
  The next state is created by applying the above rules simultaneously to every cell in the current state,
  where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
*/


function gameOfLife(board: number[][]): void {
    for (let i in board) {
        const row = board[i]
        for (let j in row) {
            const cell = row[j]
            const neighbours = getActiveNeighbourCount(board, +i, +j)

            if (cell === 1) {
                if (neighbours < 2) { board[i][j] = 3; }
                else if (neighbours > 3) { board[i][j] = 3 }
            }
            else if (neighbours === 3) {
                board[i][j] = 2
            }
        }
    }
    for (let row of board) {
        for (let col in row) {
            if (row[col] > 1) { row[col] = 3 - row[col] }
        }
    }
}

function getActiveNeighbourCount(board: number[][], row: number, col: number): number {
    const neighbours = [
        board[row - 1]?.[col - 1],
        board[row - 1]?.[col],
        board[row - 1]?.[col + 1],
        board[row]?.[col - 1],
        board[row]?.[col + 1],
        board[row + 1]?.[col - 1],
        board[row + 1]?.[col],
        board[row + 1]?.[col + 1]
    ]
    return neighbours.filter(n => n % 2 === 1).length
}

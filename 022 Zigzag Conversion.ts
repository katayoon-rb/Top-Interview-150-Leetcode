/**
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
  (you may want to display this pattern in a fixed font for better legibility)
    P   A   H   N
    A P L S I I G
    Y   I   R
  
  And then read line by line: "PAHNAPLSIIGYIR"
  Write the code that will take a string and make this conversion given a number of rows:
    string convert(string s, int numRows);
*/


function convert(s: string, numRows: number): string {
    if ( numRows === 1 ) return s

    const rows = Array( numRows ).fill('')
    let dir = 1
    let i = 0
    for ( const c of s ) {
        rows[i] += c
        i += dir

        if ( i === numRows - 1 ) dir = -1
        else if ( i === 0 ) dir = 1
    }

    return rows.reduce( (acc, val) => acc + val, '' )
}

/**
  Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
  and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/


function merge(intervals: number[][]): number[][] {
    intervals.sort( (a: any, b: any) => { return a[0] - b[0] } )

    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] >= intervals[i + 1][0]) {

            if (intervals[i][1] > intervals[i + 1][1]) {
                intervals[i + 1] = [intervals[i][0], intervals[i][1]];
            }
            else {
                intervals[i + 1] = [intervals[i][0], intervals[i + 1][1]];
            }
            intervals[i] = [0]
            
        }
    }
    for (let i = intervals.length - 1; i >= 0; i--) {
        if (intervals[i].length === 1) { intervals.splice(i, 1) }
    }
    return intervals
}

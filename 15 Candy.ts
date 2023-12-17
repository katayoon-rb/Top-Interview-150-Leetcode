/**
  There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
  
  You are giving candies to these children subjected to the following requirements:
      Each child must have at least one candy.
      Children with a higher rating get more candies than their neighbors.
  
  Return the minimum number of candies you need to have to distribute the candies to the children.
*/


function candy(ratings: number[]): number {
    const candies = new Array(ratings.length).fill(1)

    if (!ratings.length) return 0
    if (ratings.length === 1) return 1

    for (let i = 0; i < ratings.length; i++) {
        if ( ratings[i - 1] < ratings[i] ) {
            candies[i] = candies[i - 1] + 1
        }
    }

    for (let i = ratings.length - 2; i >= 0; i--) {
        if ( ratings[i + 1] < ratings[i] ) {
            candies[i] = Math.max( candies[i], candies[i + 1] + 1 )
        }
    }

    return candies.reduce((sum, res) => sum += res, 0)
}

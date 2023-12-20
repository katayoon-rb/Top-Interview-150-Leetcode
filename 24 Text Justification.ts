/**
  Given an array of strings words and a width maxWidth,
  format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
  
  You should pack your words in a greedy approach; that is, pack as many words as you can in each line.
  Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
  
  Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not
  divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
  
  For the last line of text, it should be left-justified, and no extra space is inserted between words.
*/


function fullJustify(words: string[], maxWidth: number): string[] {
    let res = []
    let str = ""
    let i = 0
    let x = 0

    while ( i < words.length ){
        if ( (str + words[i]).length === maxWidth ) {
            str += words[i++]
            res.push(str)
            str = ""
            x = i
        }
        else if ( (str + words[i]).length > maxWidth ) {
            let j = x, cnt = maxWidth - (str.length - 1)

            while ( cnt > 0 && j < i - 1 ) {
                words[j++] += " "
                cnt--
                if ( j === i - 1 && cnt > 0 ) j = x
            }

            let tempStr = ""
            j = x
            while (j < i) tempStr += j < i - 1 ? words[j++] + " " : words[j++]
            while (tempStr.length < maxWidth) tempStr += " "
            res.push(tempStr)
            str = ""
            x = i
        }
        else {
            str += words[i++] + " "
        }
    }

    if (str.length > 0) {
        let cnt = maxWidth - str.length
        while( cnt > 0 ) {
            str += " "
            cnt--
        }
        res.push(str)
    }
    
    return res
}

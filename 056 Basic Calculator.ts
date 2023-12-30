/**
  Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
  Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
*/


type Operator = 1 | -1

function isDigit(s: string): boolean {
    return s === '(' || s === ')' || s === '+' || s === '-'
}

function calculate(s: string): number {
    let num = 0
    let res = 0

    let oper: Operator = 1 
    const stack: Operator[] = [1]

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue
        if ( isDigit(s[i]) ) {
            // "(1-(4+5+2)-3)+(6+8)"
            // "(1-4-5-2-3)+(6+8)"
            if (s[i] === '+' || s[i] === '-') {
                res += num * oper
                oper = stack[stack.length - 1]
                num = 0
                oper = s[i] === '-' ? (-1 * oper) as Operator : oper
            }
            else if (s[i] === '(') { stack.push(oper) }
            else { stack.pop() }
        }
        else {
            const numberC = parseInt(s[i])
            num = num * 10 + numberC
        }
    }

    res += num * oper
    return res
}

/**
  You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
  Evaluate the expression. Return an integer that represents the value of the expression.
  
  Note that:
      The valid operators are '+', '-', '*', and '/'.
      Each operand may be an integer or another expression.
      The division between two integers always truncates toward zero.
      There will not be any division by zero.
      The input represents a valid arithmetic expression in a reverse polish notation.
      The answer and all the intermediate calculations can be represented in a 32-bit integer.
*/


function evalRPN(tokens: string[]): number {
    var stack: number[] = []

    function operate(a :number, b:number, operation: string ): number {
        switch (token) {
            case '+': return a + b
            case '-': return a - b
            case '*': return a * b
            case '/': return Math.trunc(a / b)
            deafult: return 1
        }   
    }
    
    for (var token of tokens){
        if ( Number.isInteger( parseInt(token) ) ){
            stack.push(parseInt(token))
        }
        else {
            var num1 = stack.pop()
            var num2 = stack.pop()
            var num3 = operate(num2, num1, token) 
            stack.push(num3)
        }
    }
    return stack[0]
}

// MINI CALCULATOR:
let prompts = require("prompt-sync")();
let n1 = parseInt(prompts("enter first number: "))
let n2 = parseInt(prompts("enter second number: "))
let operator = prompts("enter operator (+,-,/,*): ")

if ( operator === "+" ){
    console.log( "the sum is: " , n1 + n2 )
}
else if ( operator === "-" ){
    console.log( "the substraction is: " , n1 - n2 )
}
else if ( operator === "*" ){
    console.log( "the multiplication is: " , n1 * n2 )
}
else {
    console.log( "the division is is: " , n1 / n2 )
}
export {}


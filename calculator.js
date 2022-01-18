const { read } = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Input desired calculation: ", function(input) {
    tokens = input.split(" ");

    let result;
    let symbol = tokens[0];
    let num1 = Number(tokens[1]);
    let num2 = Number(tokens[2]);

    // Correct format: [symbol] [number] {optional: number (^ only)}
    if(tokens.length >= 2) {
        if(tokens.length >= 3) {
            if(symbol === "+") {
                result = num1 + num2;
            } else if(symbol === "-") {
                result = num1 - num2;
            } else if(symbol === "*") {
                result = num1 * num2;
            } else if(symbol === "/" || symbol === "\\") {
                result = num1 / num2;
            }
        } else if(symbol === "^") {
            // Checks if the number's square root is a whole number
            if(!Math.sqrt(num1).toString().includes(".")) {
                result = Math.sqrt(num1);
            } else {
                console.log(num1 + " Does not have a rational root!");
                reader.close();
                return;
            }
        } else {
            // Correct format: [symbol] [number] {optional: number (^ only)}
            console.log("Calculator requires at least 3 arguments!");
            reader.close();
            return;
        }
    } else {
        // Correct format: [symbol] [number] {optional: number (^ only)}
        console.log("Calculator requires at least 2 arguments!");
        reader.close();
        return;
    }

    reader.close();

    console.log("Result: " + result);
});
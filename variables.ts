var varVariableName: string = "var variable"
let letVariable: boolean = true;
const constVariable: number = 3.12;

let num1:number = 1;

function letVariableFunc() {
    let num2: number = 3;
    if (num2 > num1) {
        let num3: number = 3;

        num3++
    }

    while(num1 < num2) {
        let num4: number = 4;
        num1++;
    }

    console.log("Number 1 "+ num1)
    console.log("Number 2 "+ num2)
    // console.log("Number 3 "+ num3)
    // console.log("Number4 "+ num4)

}

letVariableFunc()


const fixedNumber = 13;

// fixedNumber = 23;


var varNumber: number = 5;

function varScope() {
    varNumber += 5;
    console.log(varNumber)
}
 varNumber += 5;

 console.log(varNumber);
varScope()




// console.log(letVar);
// let letVar: number;
let letVar: number;

console.log(varTypeVariable)
var varTypeVariable: number;
var varTypeVariable: number;

var result: any = 10;

var resultNumber: number = <number> (result);
var aditionalNumber:number = 2;

var finalResult = resultNumber + aditionalNumber;
console.log("final result is "+ finalResult);



var globalVariable: number = 30; // Gobalvariable

class Numbers {
    num_val:number = 22; // Class label
    static statVariable = 10 // Static variable

    countNumber() {
        var counter = 0; //Local variable
    }
}


var numbers: Numbers = new Numbers()
console.log("Global "+ globalVariable);
console.log("Class lebel: " + numbers.num_val)
console.log("Static " + Numbers.statVariable)

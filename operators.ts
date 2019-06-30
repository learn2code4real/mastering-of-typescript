var a: number = 10;
var b: number = 200;
var c: number;
// Arithmetic Operator

var c = a+b;
console.log("result: "+ c)

var c = a-b;
console.log("result: "+ c)

var c = a*b;
console.log("result: "+ c)

var c = a/b; // Division
console.log("result: "+ c)

var c = a%b; // modulus
console.log("result: "+ c)

var c = c++; //increment
console.log("result: "+ c)
var c = c--; // decrement
console.log("result: "+ c)


// Relational Operator
var result: boolean = a > b;
console.log("a is greater then b " + result)
var result: boolean = a < b;
console.log("a is less then b " + result)
var result: boolean = a >= b;
console.log("a is greater or equal then b " + result)
var result: boolean = a <= b;
console.log("a is less then or equal b " + result)
var result: boolean = a == b;
console.log("a is equals b " + result)
var result: boolean = a != b;
console.log("a is is not equal b " + result)


//Logical Operator

var result: boolean;

var result = (a >= b)&& (b==a)

console.log(result)

            // false or  true = true
var result = (a >= b) || (a <= b)

console.log("Or oparetor ", result)
           // true
var result = a != b

console.log("Not oparetor ", result)



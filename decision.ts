
//If statement

if (true) {
    console.log("executing the true statement")
}


if (false) {
    console.log("Not executing the false statement")
} else {
    console.log("Execute the else statement because the statement is false")
}

var a: number = 3;
var b: number = 4;
if (b > a) {
    console.log("executing the true statement: b is greater then a")
}
console.log("\n\n");
if (a > b) {
    console.log("This is a false statement because a can't greater then b")
} else if(a <= b ) {
    console.log("this is true statement, because a is greater then b")
} else {
    console.log("Nothing found true");
}


//Switch

console.log("\n\n");
let x = 10, y= 5;

switch(x-y) {
    case 0:
        console.log("Result 0");
        break;
    case 5:
        console.log("result 5")
        break;
    case 10:
        console.log("result 10")
        break;
    default:
        console.log("no result found")
}
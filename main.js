//My first console statement
console.log("My name is Jemima.")

//My first function
function myName() {
    return "My name is Jemima."
}

//My function parameter
function userName(name) {
    return "My name is " + name + "."
}

//An addition function
function addNum() {
    var a = 5;
    var b = 4;
    return a+b
}

//If...else function
function greaterThan(x,y) {
    if (x>y) {
        return "x is greater than y"
    } 
    else if (y>x) {
        return "y is greater than x"
    }
    else if (x===y) {
        return "x is equal to y"
    }
    else {
        return "No comparison"
    }
}

//single equalsto assigns values, x = 5. Value of x is 5
// double equalsto equates values, 5 == "5". Returns true
// triple equalsto assigns values and types, 5===5 returns true but 5==="5" returns false
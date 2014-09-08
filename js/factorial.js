// Factorial

var arr = [];

// Cycle
function factorialCycle(mult, number) {
    for(var i=1; i<=number; i++) {
        mult *= i;
        arr.push(mult);
    }
    return arr;
}

// Recursion
function factorialRecursive(mult, number) {
    arr.push(mult);
    if (arr.length < number) {
        factorialRecursive(mult*=arr.length, number);
    }
    return arr;
}

// Results
function printResult(array) {
    console.log(array);
}


// Init
function init() {
    printResult(factorialCycle(1, 10));
    printResult(factorialCycle(1, 20));
    printResult(factorialRecursive(1, 5));
    printResult(factorialRecursive(1, 15));
}

init();

// Factorial

// Cycle
function factorialCycle(number) {
    var result = 1;
    for(var i=1; i<=number; i++) {
        result *= i;
    }
    return result;
}

// Recursion
function factorialRecursive(number) {
    if (number > 0) {
        var result = factorialRecursive(number-1);
        return number * result;
    }
    return 1;
}

function factorialPlus (n) {
    if(n > 0) {
        var result = factorialPlus (n - 1);
        return result + n;
    }
    return 0;
}

function factorialPrinciple (num, operator, returnNum) {
    if (num > 0) {
        var number = factorialPrinciple (num - 1, operator, returnNum);
        return operator(num, number);
    }
    return returnNum;
}

// Results
function printResult(result) {
    console.log(result);
}


// Init
function init() {
    // printResult(factorialCycle(5));
    // printResult(factorialCycle(10));
    // printResult(factorialRecursive(5));
    // printResult(factorialRecursive(15));
    // console.log(factorialPlus(4));
    printResult(factorialPrinciple(4, function(a, b) { return  a + b; }, 0));
    printResult(factorialPrinciple(5, function(a, b) { return  a * b; }, 1));
}

init();

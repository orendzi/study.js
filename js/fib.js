// Fibonacci

// for-cycle
function fib(a, b, n) {
    var fibArray = [];
    var paragraph = document.createElement('p');
    for(var i=0; i<n; i++) {
        var temp = a;
        a = b;
        b = temp + b;
        fibArray.push(a);
    }
    paragraph.innerHTML(fibArray);
}

fib(0, 1, 8);

// 1recursion

// 2recursion
// Fibonacci

// for-cycle
function fib(a, b, n) {
    var fibArray = [];
    for(var i=0; i<n+1; i++) {
        var temp = a;
        a = b;
        b = temp + b;
        fibArray.push(temp);
    }
   return fibArray; 
}

function results (array) {
    var parentE = document.body;
    var container = document.createElement('p');
    container.innerHTML = array;
    parentE.appendChild(container);
}


// 1recursion
function fibRecurse(array, a, b, n) {
    array.push(a);
    if (array.length<n) {
        fibRecurse(array, b, a+b, n);
    }
    return array;
}


// 2recursion
function fibNewRecurse(array, a, b, max) {
    array.push(a);
    if (b < max) {
        fibNewRecurse(array, b, a+b, max);
    }
    return array;
}

// Init

function init () {
    results(fib(0, 1, 8));
    results(fibRecurse([], 0, 1, 16));
    results(fibNewRecurse([], 0, 1, 234));
}

document.addEventListener( "DOMContentLoaded", init, false );


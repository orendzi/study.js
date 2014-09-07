// Fibonacci

var newElement = document.getElementsByTagName('body');
console.log(newElement);
// for-cycle
function fib(a, b, n) {
    var fibArray = [];
    for(var i=0; i<n; i++) {
        var temp = a;
        a = b;
        b = temp + b;
        fibArray.push(a);
    }
   return fibArray; 
}

function results (e, array) {
    e.innerHTML = "<p>" + array + "</p>";
}


// 1recursion

// 2recursion
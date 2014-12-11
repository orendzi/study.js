function showNumRow(n) {
    if (n > 0) {
        showNumRow(n-1);
        console.log(n);
    }
    else { return 1; }
}

function rangeNums(a, b) {
    console.log(a);
    
    if (a == b) {
         return a;
    }
    
    if (a < b) {
       rangeNums(a + 1, b);
       return a;
    } else {
        rangeNums(a - 1, b);
        return a;
    }
}

// Mult via sum
function sumMult(a, b) {
    if (a > 0) {
        var result = sumMult (a - 1, b);
        return result + b;
    }
    return 0;
}

function multPower(a, b) {
    if (b > 0) {
        var result = multPower(a, b - 1);
        // return a * result;
        return sumMult(a, result);
    }
    return 1;
}

// console.log(multPower(2, 4));

// console.log(sumMult(4, 8));
// showNumRow(10);
// rangeNums(4, 12);
// rangeNums(15, 2);

function numSum(num) {
    if (num >= 10) {
        var rem = num % 10;
        return rem + numSum((num - rem) / 10);
    }
    return num;
}

// console.log(numSum(179));

function leftToRight(num) {
    if(num >= 10) {
        var rem = num % 10;
        leftToRight((num - rem) / 10);
        console.log(rem);
        return;
    }
    console.log(num);
}

leftToRight(179);

// TODO: learn http://learn.javascript.ru/recursion
function calcSum (a, b) {
    var result = a + b;
    return result;
}

// higher order fn
function applyFunc (f, a, b) {
    return f(a, b);
}

function getOperator (fnName) {
    // or instead of return use local variable (define it before the switch cycle and leave empty) to store the result of cases and breaks, don't use returns then.
  switch (fnName) {
    case 'sum':
      return function(a, b) {return a + b;};
    case 'sub':
      return function(a, b) {return a - b;};
    case 'div':
      return function(a, b) {return a / b;};
    case 'mult':
      return function(a, b) {return a * b;};  
    default:
      throw 'There is no any suitable action for your numbers';
  }  
}

//closures 
function counter (init) {
    return function() {
        init++;
        return init;
    };
}

// вызывает counter, но хранит ретурн целиком, а не результат
var test1 = counter (6);

// чтобы был результат, нужно сделать вызов внутренней функции - замыкания
var test2 = test1(); // 7
// console.log(test2);

// так как это замыкание, мы создаём некий локальный скоуп внутри родительской функции и при повторном вызове, значение init не переписывается, но продолжает инкрементировать
var test2 = test1(); // 8
// console.log(test2);

// tests
if (calcSum(1, 2) !== 3) {
    console.log('Ошибка!!! Сумма не совпадает со значениями аргументов...');
}

if (applyFunc (calcSum, 4, 7) !== 11) {
    console.log('Ошибка в функции applyFunc');
}

if (applyFunc (getOperator('mult'), 3, 5) !== 15) {
    console.log('Ошибка в функции getOperator');
}

if (test2 !== test2 + 1) {
    console.log('Ошибка в функции counter');
}

// INITs
// console.log(calcSum(5, 10));


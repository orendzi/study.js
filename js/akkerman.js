function Akkerman(m, n) {
    console.log("m = " + m + " n = "+n);
    if(m===0) {
        return n+1;
    } else if (m > 0 && n===0) {
        return Akkerman(m-1, 1);
    } else if (m > 0 && n > 0) {
        return Akkerman(m-1, Akkerman(m, n-1));
    } 
    return false;
}

// console.log(Akkerman(2, 2));
// console.log(Akkerman(0, 2));
console.log(Akkerman(3, 0));
// console.log(Akkerman(0, 0));

// How it works.
// 1) если m равен 0, то выполняется обычное сложение и выводится результат. В нашем случае это: 2+1 = 3.
// 2) если n равен 0, то выполняется рекурсивный вызов функции, в которой n приравнивается к 1, а m вычитает 1. В нашем случае:
// - при первичном запуске выполняется ветка с n===0, 3-1 = 2, теперь m = 2, а n = 1.
// - при послелуюших запусках срабатывает другая ветка, в которой оба числа больше нуля, имеем две вложенные рекурсии:
// сначала внешняя функция с m = 2-1 = 1, а потом подсчёт внутренней функции для вычисления второго аргумента: то есть m = 2, n = 0.
// затем происходит переход на ветку, в которой n===0, выполняется 2-1 = 1, n = 1. И далее рекурсия продолжается, непонятно почему
// ВАЖНО! Все вычисления производятся после запуска последней рекурсивной функции, поэтому значения считаются в обратном порядке.
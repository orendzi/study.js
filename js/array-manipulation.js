// TODO

// [13.05.2014 11:33:52] Yuri Sarbaev: 1. глобальные переменные плохая идея, numArray, min, max быть локальными или параметрами фунций
// [13.05.2014 11:34:40] Yuri Sarbaev: 2. достаточно проверять на строгое > или <, >= избыточно
// [13.05.2014 11:36:35] Yuri Sarbaev: 3. findExternums пытается делать 2 дела сразу: искать числа и выводить их html - это плохой стиль, у функций должна быть одна задача
// [13.05.2014 11:37:33] Yuri Sarbaev: это называется SRP - single responsibility principle
// [13.05.2014 11:38:08] Yuri Sarbaev: 4. В джавоскрипте точки с зяпятой ставить не обязательно

// [13.05.2014 12:42:07] Yuri Sarbaev: unit testing, вот ты написала функцию, как ты будешь проверять то что она работает правильно? можно каждый раз обновлять страничку в браузере и смотреть глазами на результат, но это уныло, долго и тупо
// [13.05.2014 12:44:03] Yuri Sarbaev: test("testing find max function") { findMax([1,2,10,0,1]) = 10}
// http://qunitjs.com/



function arrayTests() {
    
    function genNums(endNum) {
        var numArray = [];
        for(var i=0; i<endNum; i++) {
            var num = Math.floor((Math.random() * 100) + 1);
            numArray.push(num);
        }
        console.log(numArray);
        return numArray;
    }

    // локальный скоуп для геннама
    function findExtremums(numArray) {
        var min = numArray[0], 
        max = numArray[0];
        for(var i=0; i<numArray.length; i++) {   
            var num = numArray[i];
            if (num <= min) {
                min = num;
              console.log(min);
            }
            else if (num >= max) {
                max = num;
              console.log(max);
            }
        }    
        
        // локальная переменная, значение видно только в скоупе этой функции        
        return {'min': min, 'max': max};
    }
    
    var nums = genNums(20);
    var result = findExtremums(nums);
    
    console.log(result);
    
    // todo
    // document.getElementById("text").innerHTML = '<p>' + 'Минимальное значение ' + result.min + ', максимальное значение ' + result.max; + '</p>';
 
}

arrayTests();



    

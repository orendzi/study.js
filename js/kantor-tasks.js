// Simple nums between 2 - 10.
function simpleNums (a, b) {
    for (var i=a; i<=b; i++) {
        if(i % i-1 == 0) continue;
        console.log(i);
    }
    // console.log('no simple nums in the diaposon');
}

simpleNums (1, 10);

// http://learn.javascript.ru/break-continue
// https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE
var countNums = function (exp) {
    var filter = /[^\d\.\+\-\*\/]/g,
        signs = /[^\+\-\*\/]/g,
        numbers = /[^\d,\.]/,
        converted_exp = exp.replace(filter, ''),
        sign_arr, num_arr, i, result;
    
    var isNotEmpty = function (elem) {
        return elem.length > 0;
    };
    
    var compute = function (x, sign, y) {
        switch (sign) {
            case '+':
                return x + y;
            case '-':
                return x - y;
            case '*':
                return x * y;
            case '/':
                return x / y;
        }
    };
    
    sign_arr = converted_exp.split(signs).filter(isNotEmpty);
    num_arr = converted_exp.split(numbers).filter(isNotEmpty);
    
    num_arr = num_arr.map(parseFloat);
    if (num_arr.length <= 2) {
        console.log('Not enough numbers for computing. The result is ' + num_arr);
        return num_arr;
    }


    for (i=0; i < sign_arr.length; i++) {
        result = compute(num_arr[0], sign_arr[i], num_arr[1]);
        num_arr.splice(0, 2, result);
    }
    
    console.log(result);
    return result;
    
};



var clearString = function (string) {
    var filter = /[\s\?\!\;\.\:\,]/g,
        words = string.split(filter),
        i, j, k, repeats, result;
        
        words = words.map(function (word) {
            return word.toLowerCase();
        });
        
        words = words.filter(function (word) {
            return word.length > 0;
        });
        
        if (words.length <= 1) {
            console.log('Not enough words. Can not process your request.');
            return string;
        }
        
        var intersectWords = function (w1, w2) {
            var similar = '';
            for (i=0; i<w1.length; i++) {
                for (j=0; j<w2.length; j++) {
                    if (w1.charAt(i) == w2.charAt(j) && similar.indexOf(w1.charAt(i)) == -1) {
                        similar += w1.charAt(i);
                    }
                }
            }
            
            return similar;
        };
        
        
        for (k=0; k<words.length; k++) {
            repeats = intersectWords(words[0], words[1]);
            if (repeats.length === 0) {
                console.log('No similar symbols in every word. Can not process your request.');
                return string;
            }
            words.splice(0, 2, repeats);
        }
        

        var re = new RegExp('[' + words.join() + ']', 'gi');
        result = string.replace(re, '');

        console.log(result);
        return result;
};

countNums ('3.5 землекопа +4 поросенка *10 рублей - 5.5 $ /5 человек =');
countNums ('землекопов 7 =');
// countNums ('2 apfelschtrudels +5.2 sahne *1.4 kater - 2.5 ? /1 champignoni =');
// clearString ('Чего-с извОЛите-с?Барин-С!');
// clearString ('Диван-кровать...');
// clearString ('uhhhhh yre');
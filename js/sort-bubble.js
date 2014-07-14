// Bubble sort
// Complexity = O(n^2);

function sort() {
    function genNums(q) {
        var arr = [];
        for (var i=0; i<q; i++) {
            var num = Math.floor((Math.random() * 100) + 1);
                arr.push(num);
        }
        console.log (arr);
        return arr;
    }
    
    // using a callback function
    function sortNums(array) {
        array = genNums(10);
        var steps = array.length;
        
        function swap_m(a, b) {
            var swap = a;
            a = b;
            b = swap;
        }
        
        // worst case, I(max) = q^2.
        for (var i=0; i < steps-1; i++) {
            // when outer cycle = 9, inner cycle = 9-9, means 0, stop sorting. 
            // this is just math\mechanical condition, based on complexity formula for the worst case (no check for the order).
            for (var c=0; c < steps-1-i; c++) {
                var currentE = array[c],
                    nextE = array[c+1];
                    
                if (currentE > nextE) {
                    swap_m(currentE, nextE);
                }
            }
        }
        console.log(array);
    }
}

sort();

// Tests
// 1. Check if genNums creates an array (empty?)
// 2. Check if the cycles work ok
// 3. Check the swap fn

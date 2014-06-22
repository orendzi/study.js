var array = [0, 1, 2, 3, 4];

function swap_m (arr, i, j) {
	var swapped = arr[i];
	arr[i] = arr[j];
	arr[j] = swapped;
}

console.log(swap_m(array, 0, 1), array);

function swap_i (arr, i, j) {
	var lsArray = arr.slice();
	swap_m(lsArray, i, j);
	return lsArray;
}

console.log(swap_i([1, 2, 3, 4], 0, 1));
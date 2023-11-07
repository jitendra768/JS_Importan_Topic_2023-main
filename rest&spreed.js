// In the example below two arrays are defined and they’re 
// merged into one using the spread operator(…).
// The merged array contains elements in the order they’re merged.

const array1 = [10, 20, 30, 40, 50];
const array2 = [60, 70, 80, 90, 100];
const array3 = [...array1, ...array2, 400];
console.log(array3);

const obj = {
    firstName: 'amit',
    lastName: 'kumar',
    age: 25
};
const obj2 = { ...obj };
console.log(obj2);

// In this example,the rest parameter condenses multiple elements into a 
// single element even when different numbers of parameters are passed
// into the function, the function works as we used the rest parameter. 
// it takes multiple elements as arguments and compresses them into a single element or iterable.
// further operations are performed on the iterable. 

	function average(...args) {
		console.log(args);
		var avg =
			args.reduce(function (a, b) {
				return a + b;
		}, 0) / args.length;
		return avg;
	}
	console.log("average of numbers is : "
		+ average(1, 2, 3, 4, 5));
	console.log("average of numbers is : "
		+ average(1, 2, 3));

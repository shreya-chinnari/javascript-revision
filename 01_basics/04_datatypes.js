// number => 2 to the power of 53
// BigInt => 2 to the power of 53 + 1
// string => "hello world"
// boolean => true or false
let isLoggedIn = true;
// null => no value
let temp = null;
// undefined => no value
let num;
// symbol => unique value
let sym1 = Symbol("sym1");
// object => collection of key-value pairs

console.log(typeof isLoggedIn); // boolean
console.log(typeof temp); // object (null is an object in JS)
console.log(typeof null); // object (null is an object in JS)
console.log(typeof num); // undefined
console.log(typeof sym1); // symbol
console.log(typeof {}); // object
console.log(typeof []); // object (array is an object in JS)
console.log(typeof undefined); // undefined
console.log(sym1); // Symbol(sym1)

const symbol1 = Symbol("sym1");
const symbol2 = Symbol("sym1");
console.log(symbol1 === symbol2); // false - symbols are unique

console.log(typeof 213829384784832921891202018348n); // bigint

const arr1 = [1, 2, 3];
console.log(arr1); // [1, 2, 3]

let obj = {
	name: "shreya",
	age: 22,
	isLoggedIn: true,
	friends: ["shreya", "sachi", "lakshya"],
};
console.log(obj); // { name: 'shreya', age: 22, isLoggedIn: true, friends: [ 'shreya', 'sachi', 'lakshya' ] }
console.log(typeof obj); // object

// object ke andar string, boolean, number, array, doosra object, function sab kuch ho sakta hai

const func = function () {
	console.log("hello world");
};
func(); // hello world
console.log(typeof func); // function (object function)

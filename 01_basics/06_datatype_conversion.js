let score = "100";
let numberScore = Number(score);

console.log(numberScore); // 100
console.log(typeof numberScore); // number

let str = "22dfg";
let numberStr = Number(str);
console.log(numberStr); // NaN - not a number
console.log(typeof numberStr); // number

let null_str = null;
let num_null = Number(null_str);
console.log(num_null); // 0
console.log(typeof num_null); // number

let bool_str = true;
let num_bool = Number(bool_str);
console.log(num_bool); // 1
console.log(typeof num_bool); // number

let bool_str2 = false;
let num_bool2 = Number(bool_str2);
console.log(num_bool2); // 0
console.log(typeof num_bool2); // number

let string = "shreya";
let numberString = Number(string);
console.log(numberString); // NaN
console.log(typeof numberString); // number

let point = "33.33.3";
let numberPoint = Number(point);
console.log(numberPoint); // NaN
console.log(typeof numberPoint); // number

// "33" => 33
// "33.3" => 33.3
// "33.3.3" => NaN
// "33abc" => NaN
// "true" => 1

let isLoggedIn = 1;
let bool_isLoggedIn = Boolean(isLoggedIn);
console.log(bool_isLoggedIn); // true
console.log(typeof bool_isLoggedIn); // boolean
// 0 -> false

let bool_string = Boolean("");
console.log(bool_string); // false
console.log(typeof bool_string); // boolean

let bool_string1 = Boolean(" ");
console.log(bool_string1); // true
console.log(typeof bool_string1); // boolean

let bool_string2 = Boolean("shreya");
console.log(bool_string2); // true
console.log(typeof bool_string2); // boolean

let num1 = 55;
let str_num = String(num1);
console.log(str_num); // "55"
console.log(typeof str_num); // string

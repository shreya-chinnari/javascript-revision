let a = 3;
let neg_a = -a;
console.log(neg_a); // -3
let b = -neg_a;
console.log(b); // -3

console.log(4 ** 2); // 16
console.log(4 ^ 2); // 6 - This uses the bitwise XOR operator (^), not exponentiation.

let str1 = "shreya";
let str2 = "shreya";
console.log(str1 + str2); // shreyashreya

console.log(a + str1); // 3shreya
console.log("1" + "23" + 4); // 1234
console.log("1" + 23 + 4); // 1234 not 124
console.log(1 + 23 + "4"); // 244

console.log(3 + ((4 / 5) % 2) * 9); // 10.2 - use proper brackets

console.log(+true); // 1 - The unary + operator tries to convert the value to a number.
// console.log(true+); - Because + is expected to be followed by a value.
console.log(+false); // 0 - The unary + operator tries to convert the value to a number.
console.log(-true); // -1 - Unary - also converts the boolean to a number, then negates it.
console.log(-false); // 0 - false becomes 0, and -0 is just 0 (though technically they’re different under the hood).
console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 100;
console.log(num1); // 100

console.log(num1++); // 100 - post-increment
console.log(num1); // 101 - num1 is now 101

console.log(++num1); // 102 - pre-increment

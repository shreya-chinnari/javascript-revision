console.log("2" > 1); // true
console.log("02" > 1); // true
console.log("02" > "01"); // true
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
console.log(undefined == null); // true

// === strict check
console.log(0 === false); // true
console.log(0 == false); // true
console.log(0 === "0"); // false
console.log(0 == "0"); // true
console.log(0 === ""); // false
console.log(0 == ""); // true
console.log(0 === null); // false
console.log(0 == null); // false
console.log(0 === undefined); // false
console.log(0 == undefined); // false
console.log(false === null); // false
console.log(false == null); // false
console.log(false === undefined); // false
console.log(false == undefined); // false

console.log(2 === "2"); // false

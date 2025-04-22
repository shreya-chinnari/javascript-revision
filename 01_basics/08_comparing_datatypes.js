console.log("2" > 1); // true - JS converts "2" to 2 → 2 > 1 → ✅ true.

console.log("02" > 1); // true
console.log("02" > "01"); // true - "0" vs "0" → equal, then "2" > "1" → ✅ true.

console.log(null > 0); // false - null gets converted to 0, so it's 0 > 0 → ❌ false.

console.log(null == 0); // false
// == does not coerce null to 0.
// null == undefined is the only loose equality that works → ❌ false.

console.log(null >= 0); // true
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(undefined == 0); // false - undefined does not loosely equal 0, only equals null.

// undefined becomes NaN during numeric comparisons.
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false

console.log(undefined == null); // true

// === strict check

console.log(0 === false); // true - 0 is number, false is boolean → types differ → ❌ false
console.log(0 == false); // true - false gets converted to 0 → 0 == 0 → ✅ true
console.log(0 === "0"); // false
console.log(0 == "0"); // true - "0" becomes 0 → 0 == 0 → ✅ true

// "" becomes 0 in ==, but not in === → ✅ true and ❌ false respectively
console.log(0 == ""); // true
console.log(0 === ""); // false

// null is only equal to undefined loosely → ❌ false, undefined is only equal to null loosely → ❌ false
console.log(0 === null); // false
console.log(0 == null); // false
console.log(0 === undefined); // false
console.log(0 == undefined); // false

// Totally different types → ❌ false
console.log(false === null); // false
console.log(false == null); // false
console.log(false === undefined); // false
console.log(false == undefined); // false

console.log(2 === "2"); // false - 2 is number, "2" is string → different types → ❌ false

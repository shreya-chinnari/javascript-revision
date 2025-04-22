// {  ---  } = scope
// prefer not to use VAR variable because of issue in block scope and functional scope

// Variables declared using var are function-scoped. This means they're only accessible inside the function they are declared in.

// Variables declared using let and const are block-scoped. A block is anything inside { ... } — like inside loops, conditionals, or just {}.

{
	let a = 10;
	const b = 20;
	var c = 30;
	console.log(a); // ✅ 10
}
console.log(c); // ✅ 30 (because `var` is NOT block scoped!)

console.log(a); // ❌ ReferenceError
console.log(b); // ❌ ReferenceError

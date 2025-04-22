"use strict";

x = 3.14; // ❌ ReferenceError: x is not defined
// Without strict mode, x would automatically become a global variable. With strict mode, it's an error.

/*
✅ Do You Need "use strict" in 2025?
🔹 NO, if:
You're using ES6 modules (import/export syntax)
👉 Modules are always in strict mode by default.

You're using modern bundlers (like Vite, Webpack, etc.)
👉 They usually convert everything to strict mode behind the scenes.

You're writing React / Node.js ES6+ code
👉 React components and modern Node code are strict-mode by nature.


*/

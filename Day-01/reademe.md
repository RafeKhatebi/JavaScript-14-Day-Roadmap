### Variables are Containers for Storing Data

JavaScript Variables can be declared in 4 ways:

* Automatically
* Using `var`
* Using `let`
* Using `const`

## Key Point:

The `var` keyword was used in all JavaScript code from 1995 to 2015.

The `let` and `const` keywords were added to JavaScript in 2015.

The `var` keyword should only be used in code written for older browsers.

## When to Use var, let, or const?

1. Always declare variables
2. Always use `const` if the value should not be changed
3. Always use `const` if the type should not be changed (Arrays and Objects)
4. Only use `let` if you can't use `const`
5. Only use `var` if you MUST support old browsers.

#### Let Key word:

The `let` keyword was introduced in [ES6 (2015)](https://www.w3schools.com/js/js_es6.asp)

Variables declared with `let` have **Block Scope**

Variables declared with `let` must be **Declared** before use

Variables declared with `let` cannot be **Redeclared** in the same scope.


#### **Const Key word**

The `const` keyword was introduced in [ES6 (2015)](https://www.w3schools.com/js/js_es6.asp)

Variables defined with `const` cannot be **Redeclared**

Variables defined with `const` cannot be **Reassigned**

Variables defined with `const` have **Block Scope**


## What is Good?

`let` and `const` have  **block scope** .

`let` and `const` can not be  **redeclared** .

`let` and `const` must be **declared** before use.

`let` and `const` does **not bind** to `this`.

`let` and `const` are  **not hoisted** .

## What is Not Good?

`var` does not have to be declared.

`var` is hoisted.

`var` binds to this.

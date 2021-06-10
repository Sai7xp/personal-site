---
title: What exactly are SYMBOLS in Javascript ? 
date: "2021-03-23T13:15:03.284Z"
tags: ["web", "javascript"]
description: "Let's understand the Symbols in Javascript introduced in es6."
imagepath: "https://miro.medium.com/max/785/1*H-25KB7EbSHjv70HXrdl6w.png"
author: "https://sumanth.netlify.app/static/avatar-a900fb7f56d08d8331e5b8b67b1a09f7.png"
---

# Introduction

### 1. What exactly is a **Symbol** in Javascript ?

It's a primitive data of Javascript, along with String, Number (Integers, Floats, Infinity, NaN), Boolean, null, and undefined. And it represents a "unique" Identifier. Introduced in ECMAScript 2015, ES6.

## 2. How `symbols` can be used ?

They bring a few benefits to the language and are particularly useful when used as object **properties**. But, what can they do for us that strings cannot? Usually, we use **strings** as object properties.

# Bird's Eye View

- Once you create a symbol, its value is kept private and for internal use.
- You create a symbol by calling the `Symbol()` global factory function.
- Every time you invoke `Symbol()` we get a new and unique symbol, guaranteed to be different from all other symbols

```jsx
Symbol() === Symbol() //false
```

- Symbols are used to identify Object Properties.
- And to avoid name clashing btw properties, since no symbol is equal to another.
- Symbols are not enumerated, which means that they do not get included in a for..of or for..in loop ran upon an object.

```jsx
const NAME = Symbol()
const person = {
  [NAME]: 'Jonathan'
}

person[NAME] //'Sumanth'

const RUN = Symbol()
person[RUN] = () => 'Person is running'
console.log(person[RUN]()) //'Person is running'
```

## Creating Symbols

A value of this type can be created using `Symbol()`:

```jsx
let id = Symbol();
// here id is the new symbol
consolo.log(id); // Symbol()
```

Since a `symbol` is a primitive value, if you attempt to create a symbol using the new operator, you will get an error:

```jsx
let s = new Symbol(); // TypeError
let arr = new Array(); // Totally acceptable
```

We can also give symbol a description in string format as a first argument while instantiating a Symbol and it is optional and it doesn't affect the symbol itself.

This description is mostly useful for debugging purpose.

```jsx
let id = Symbol(); // without description
let id2 = Symbol("firstname"); // symbol with desc "firstname"
console.log(id2); // Symbol("firstname")
console.log(id2.description); // "firstname"
```

The `Symbol()` function creates a new unique value each time you call it:

```jsx
console.log(Symbol() === Symbol()); // false

const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2); // false
```

Even if we give the same **description** to different symbols they are totally different and that's why Symbol is a unique Identifier.

```jsx
let id1 = Symbol("desc");
const str = 'desc';
let id2 = Symbol("desc");
console.log(id1 == id2); // false
console.log(s1 === str); // false

let value1 = "Sumanth"; // primitive type string
let value2 = "Sumanth";
console.log(value1===value2); // true
```

---

### Why Symbols are Introduced

- Basically, primitive values are **Immutable**. They can't be changed. Of course, a variable with a primitive assigned can be reassigned. For example, when you write the code let x = 1; x++; you've **reassigned** the variable x. But, you haven't mutated the primitive numeric value of 1.
- However, if you modify a non-primitive value, the modified value will also be modified where it has been called from.

```jsx
function primitiveMutator(val) {
  return val = val + 1;
}
let x = 1;
primitiveMutator(x); // 2
console.log(x); // 1 (value not changed)

function objectMutator(obj) {
  obj.prop = obj.prop + 1;
}
let obj = { prop: 1 };
objectMutator(obj);
console.log(obj.prop); // 2
```

- Primitive values are equal to another primitive with an equivalent value.

```jsx
const first = "abc" + "def";
const second = "ab" + "cd" + "ef";
console.log(first === second); // true
```

- But, equivalent non-primitive values will not result in values which are exactly equal.

```jsx
const obj1 = { name: "Intrinsic" };
const obj2 = { name: "Intrinsic" };
console.log(obj1 === obj2); // false

// Though, their .name properties ARE primitives:
console.log(obj1.name === obj2.name); // true
```

Objects play an elemental role in the JavaScript language. They’re often used as collections of key/value pairs. However, this is a big limitation of using them in this manner: Until **symbols existed**, object keys could only be strings. If we ever attempt to use a non-string value as a key for an object, the value will be coerced to a string.

**NOTE:** `Map` data structure was created in part to allow for key/value storage in situations where a key is not a string. Whereas in Objects we can use only strings as keys

---

### Where can we use `Symbols` (Symbols actual Use-case)

- There are the ways to add new `properties` to an Object:

```jsx
let obj = {name:"sumanth"};
obj["Native"] = "Mars"; // using square brackets
console.log(obj["Native"]); // "Mars"

obj.phno = 96584; // using dot operator
console.log(obj.phno) // 96584
console.log(obj); // {name: "sumanth", Native: "Mars", phno: 96584}
```

- And the another way using Symbols as object Properties:

```jsx
let obj = {}; // new object
let sym = Symbol("name"); // new symbol
obj[sym] = 'foo'; // adding new property to obj

 obj = {
[sym]:"foobar", // another way of using symbols // not as "sym": 123
[Symbol('name')]: 'foo' // directly creating symbols here
}
```

What’s the benefit of using Symbol("name") as property name or key over a string "name"?

1. **Properties with a symbol key don't appear in the JSON representation of your object. Not even the for-in loop or Object.keys can enumerate them:**

```jsx
let id= Symbol('name'); // new symbol
var newObj = {
  [id]:369, // symbol property
  okay:"A text"
}
JSON.stringify(newObj) // {"okay":"A text"}
 
for( var prop in newObj) {
    console.log(newObj[prop]); // A text
}

console.log(Object.keys( newObj)); // ['okay']
```

If you can observe in the above examples symbol properties are not appeared when we try to access them. In this way they allow us to create some "**HIDDEN**" properties of an object.

But these properties are not fully private in a strict sense. We can access them using `Object.getOwnPropertySymbols()`

```jsx
Object.getOwnPropertySymbols(newObj)[0] // Symbol(name)
newObj[Object.getOwnPropertySymbols(newObj)[0]]; // 369 
```

2.  **Let's say we imported one user `object` from another code**

```jsx
let user = { name: "John" }; // imported code

// Our script wants to create "id" property or identifier
user.id = "Our id value";

// ...Another script also wants "id" for its purposes...
user.id = "Their id value"
// Boom! overwritten by another script!
```

So, to overcome this conflict we can use Symbols as property names.

```jsx
let user = { // belongs to another code
  name: "John"
};

let id = Symbol("id");
user[id] = 1;
```

Also, imagine that another script wants to have its own identifier inside `user`, for its own purposes. That may be another JavaScript library, so that the scripts are completely unaware of each other.

Then that script can create its own `Symbol("id")`, like this:

```jsx
// ...
let id = Symbol("id");
user[id] = "Their id value";
```

There will be no conflict between our and their identifiers, because symbols are always different, even if they have the same name.

…But if we used a string `"id"` instead of a symbol for the same purpose, then there *would* be a conflict as we seen above.

# Summary

To avoid conflicts in identifier names we can use Symbols. If one imported object has a property as "name" and if we accidentally create our property with same "name" then the previous property will be overridden.

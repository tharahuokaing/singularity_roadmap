// script2.js - Functions and Scope Demonstration

// Traditional Function
function greet(name) {
    return "Hello, " + name;
}

// Modern Arrow Function (Concise)
const add = (a, b) => a + b;

// Scope demonstration
let globalVar = "I am everywhere";

const scopeTest = () => {
    let localVar = "I am hidden";
    console.log(globalVar); // Works
    console.log(localVar);  // Works
};

// Testing functions and scope
console.log(greet("AI Developer")); // Hello, AI Developer
console.log(add(5, 10));             // 15
scopeTest();

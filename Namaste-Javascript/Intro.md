# Namaste JavaScript 🙏
## Execution Context
It has two components: 
- Memory - Variables are stored as key value pairs (Varible Environment)
- Code - Code is executed (Thread of execution)

## JS is a synchronous single threaded language
It can execute only one command at a time in a specific order

## What happens when we run js code?
A global execution context is created in creation and code execution phase
- Memory creation phase: Allocate memory to variables, it stores a spatial value `undefined` 
It stored entire function code in memory.
```js
var num = 2;
var a = 10;
var b = 20;
let square = (num) => {
  return num * num
}
num = square(num)
 ```
 
<br/>

In **__memory__** section:
The values of variables and function body is stored.
`num : undefined`

In **__code__** section:
when a function is called new execution context is created
value of num will become ` num: 2 ` in code execution phase. <br/>
value of num will become `num: 4` after the context is returned. <br/>

Whole execution context of the function is deleted when the function call is over. <br/>
When program is finished global execution context is deleted.
<br/>

## Callstack :heart:
When function is invoked its execution context is put in stack, when the execution is context is deleted, it is popped from stack.
Callstack maintains the order of the execution of execution contexts.

## Hoisting in Javascript





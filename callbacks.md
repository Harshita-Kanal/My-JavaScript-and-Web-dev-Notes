## Callbacks

## Web APIs
JS is single threaded. JS is running at most one line of code at a time. <br/>
```js
console.log("Sending request")
setTimeout(() => console.log("Hello!"), 3000)
console.log("I am at the end of file")

 ```
 <br/>
 
 ```
 Sending request
 I am at the end of file
 Hello!
 
 ```
 The JS hands over certain things to the browser. Browser comes with web APIs that handle certain tasks in background. <br/>
 
 

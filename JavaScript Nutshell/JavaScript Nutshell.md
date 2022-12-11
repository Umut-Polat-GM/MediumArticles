# JavaScript Nuts Notes
##  What is JavaScript?
<br>
JavaScript is the most popular web scripting language, used for both client-side and server-side development.Supporting objects-oriented programing abilities, the JavaScript code can be inserted into HTML pages that can be understood and executed by web browsers.
<br>
<img src="https://javascript.divendo-webs.com/img/logo.png" alt="javascript"><br><hr>

##  What is ECMAscript?

ECMAScript (European Computer Manufacturesr Association Script) is a scripting language based on Javascript.

<div style="margin-top: 20px;">
<img src="https://miro.medium.com/max/720/0*Bvk27SKKqJu64d3L." alt="evolution">
</div>

<br><hr>

## Differece between "==" and "===" operators.
The main difference between the "==" and "===" operator in javascript is that the == operator does the type conversion of the operands before <mark>comparison</mark>, whereas the === operator compares the values as well as the <mark>data types of the operands</mark>.<br><hr>
## What are the data types supported by JavaScript?
* Undefined
* Null 
* Boolean
* Object
* String
* Symbol
* Number
 <br><hr>

## What is a Closure?
A closure in JavaScrpt is a fucntion inside another function. The inner function has access to its own variables, the variables defined in the outher function as well as the global variables.
```javascrit
let a = 5;
function outher(){
	let b = 8
    function inner(){
        let c = 3;
        console.log(a + b + c);
    }
    inner();
}
outher();
```
<br><hr>
## What is NaN?
In JavaScript, NaN is short for <mark>Not-a-Number</mark>. In JavaScript, NaN is a number that is not a legal number. The Global NaN property is the same as the Number.
<br><hr>
## How can you create an onject in Javascript?
```javascript
let person = {
name : "Umut",
age : 27,
isHappy: true
}
```
<br><hr>
## How can you create an Array in Javascript?
```javascript
const cars = ["Saab", "Volvo", "BMW"];
```
```javascript
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
```
```javascript
const cars = new Array("Saab", "Volvo", "BMW");
```
<br><hr>

## What are the features of Javascript?
* Lightweight, interpreted programming language
* Cross-platform compatible
* Open-source
* Object-oriented
* Integration with other backend and frontend technologies
* Used especially for the development of network-based applications
<br><hr>

## What are the scopes of a variable in Javascript?
There are two scopes of a varible: <br>
### 1. Global Scope: <br>
* Global variables, having global scope are available everywhere in a JavaScript code.
* In simple terms, a variable that can be accessed anywhere in the program is known as a variable with global scope. Globally scoped variables can be defined using any of the three keywords: let, const, and var.
<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Variables_in_Javacript_3.png">
<br>

### 2. Local Scope: <br>
* Local variables are accessible only within a function in which they are defined.If you try to access any variable defined inside a function from outside or another function, it throws an error.
<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Variables_in_Javacript_4.png">
* Since you cannot access a local variable from outside the function, you can have a variable of the same name in another function as well.
<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Variables_in_Javacript_5.png"><br>

### 3. Block Scope: <br>
* Before introducing ES6 (ECMAScript 6) in 2015, JavaScript had only two types of scopes: Global Scope and Local Scope. 
* With the introduction of let and const keywords, it added a new type of Scope in JavaScript. You cannot access the variables declared inside a particular block (represented by {}) from outside the block.
<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Variables_in_Javacript_6.png"><br>

### 4. Function Scope: <br>
* With the creation of each new function, it creates a new scope in JavaScript. You cannot access variables defined inside a function from outside the function or from another function. Var, let, and const work similarly when used inside a function. 
<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Variables_in_Javacript_8.png">
<br><hr>

## Arrow functions in JavaScript
```javascript
let myFunction = (a, b) => a * b;
```
```javascript
hello = () => {
  return "Hello World!";
}
```
<br><hr>

## What is the <b>this</b> keyword in JavaScript?
The 'this' keyword in JavaScript refers to the currently calling object. It is commonly used in constructors to assing values to object properties.
```javascript
// Regular Function:
hello = function() {
  document.getElementById("demo").innerHTML += this;
}
// The window object calls the function:
window.addEventListener("load", hello);
// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
```
<br><hr>

## What is the diffrance between <b>var</b> and <b>let</b> keyword
var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.<br>
<div style="text-align: center;">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvno4DBpdwnyL0137Dyd0-Y2SPNeYPMLL90A&usqp=CAU">
</div>
<br><hr>

## Types of errors in javascript.

There are 7 types of JavaScript errors:
* Syntax error
* Reference Error
* Type Error
* Evaluation Error
* RangeError
* URI Error
* Internal Error.

<div style="width: 75%;"><img src="https://scaler.com/topics/images/types-of-errors-in-javascript-thumbnail.webp"></div>
<br><hr>

## What is DOM?
The Document Object Model (DOM) is <b>a programming interface for web documents</b>. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

<img src="https://www.guru99.com/images/JavaScript/javascript8_1.png">
<br><hr>

## The difference between attributes and properties in vanilla JS
In JavaScript (the DOM, really), an element has attributes and properties. The terms are often used interchangeably, but they’re actually two separate things.<br>
<mark>An attribute is the initial state when rendered in the DOM. A property is the current state.</mark><br>
In most cases, attributes and properties are kept in-sync automatically. For example, when you use setAttribute() to update an ID attribute, the id property is updated as well.<br>

```javascript
let p = document.querySelector('p');

// Update the ID
p.setAttribute('id', 'first-paragraph');

// These both return "first-paragraph"
let id1 = p.getAttribute('id');
let id2 = p.id;
```
<br><hr>

## What is the difference between call() apply() & bind() ?
All three of the call, bind, and apply methods set the this argument to the function.
* The call and apply methods set this to a function and call the function.
* The bind method will only set this to a function. We will need to separately invoke the function.

<br>

### call

The call method binds the this value to the function and executes the function. It takes the this value and a list of arguments as parameters. Then, it returns the value returned by the function, which is called using the call method.

```javascript
function test(arg1, arg2){
  console.log(this.num, arg1, arg2); // 100, 10, 20
}

test.call({num: 100}, 10, 20);
```
In the code above, we have called the test function using the call method. The call method will invoke the test function with the this value as the object passed to the call method.

### apply

The apply method binds the this value to the function and executes the function. It takes the this value and a single array object as parameters, and it returns the value returned by the function, which is called using the apply method.

```javascript
function test(...arguments){
  console.log(this.num, arguments);//100, [1,2,3]
}

test.apply({num: 100}, [1,2,3]);
```
```
call() and apply() are identical in functionality, the only difference is that call() accepts a list of arguments; whereas, apply() accepts a single array of arguments.
```

### bind

The bind method binds the this value to the function and returns a new function. However, we still need to separately invoke the returned function.

```javascript
function test(arg){
 console.log(this.number, arg);
}

let bindedFn = test.bind({number: 99}, "argument");

bindedFn(); // 99, "argument"
```
In the above code, we bind the this value for the test function and invoke the returned function from the bind method.

<br><hr>

## What is the difference between for and foreach loop in javascript ?

* The forEach method does not have a condition, so it will always run for each element in the array, even if the array is empty. The for loop, on the other hand, will not run if the condition is not met.
* The forEach method is a great way to loop through arrays. It is easier to read and understand than the for loop, and it does not require you to create a loop counter variable. However, there are some situations where you should use a for loop over the forEach method.

```javascript
for (initialization; condition; increment)  
{  
   // code to be executed
}
```
```javascript
for (let i = 1; i <= 5; i++)
{
    document.write(i + "<br/>");
}
```
```javascript
numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
   // code to be executed
   document.write(number + "<br/>");
});
```
```javascript
//output
1
2
3
4
5
```
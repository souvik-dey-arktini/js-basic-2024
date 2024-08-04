// console.log('Hello World');
// ''...>single cort
// """...>double cort
// `...>backtick cort
// out put some text in console with backtick cort 
// ctrl + s for save
// ctrl + shift + s for save as
// console.log(`Hello World`);
// console.log(`i like to eat ${2+2} apples`); template string 

// window.alert('Hello World');// alert box 
// window.confirm('Hello World');// confirm box
// window.prompt('Hello World');// prompt box
// this is a comment
/*
multiple line comment
multiple line comment
*/
// ..............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
// document.getElementById('myH1').textContent = 'hello world';
// document.getElementById('myH1').style.color = 'red';
// document.getElementById('myH1').style.backgroundColor = 'yellow';
// document.getElementById('myH1').style.fontSize = '50px';
// document.getElementById('myH1').style.textAlign = 'center';
// document.getElementById('myH1').textContent = 'sourav chongrey';
// ...............................
// ................variable...............

// variable = A container that stores a value.
// Behaves as if it were the value it contains.
// 1. declaration let x;
// 2. assignment x = 100;

// let x;
// let y;
// x =10;
// y=20;
// console.log(x,y);



// class User {
//     static userCount = 0;
//     constructor(username){
//       this.username = username
//       User
//     }
// }

// example of cluser//

// const outerFunction=()=>{
//   const number = 10;
//   const innerFunction =()=>{
//         console.log(number)
//   }
//   innerFunction();
//   console.log(number)
// }

// outerFunction();
// const createCounter =()=>{
// let count = 0;
// const increment = ()=>{
//   count++;
//   console.log(`count incresed to ${count}`);
// }
// const getCount =()=>{
//   console.log(`count is ${count}`);
// }
// return{increment,getCount}
// }
// const countValu = createCounter()
// countValu.increment()
// countValu.increment()
// countValu.increment()

// console.log(countValu.getCount())


// const myInput = document.getElementById('myInput');
// const myResult = document.getElementById('myResult');
// const myButton = document.getElementById('myBtn')


// myButton.onclick=function(){
//   age=myInput.value;
//   myResult.textContent = `my age ${age}`;
//   console.log(age);;
//   age = document.getElementById("myInput").value;
//   if(age >= 18){
//     console.log('you can enter my site')
//     myResult.textContent = `you can enter my site my age ${age}`;
//   }else if (age <= 18){
//     console.log('you can not enter my site')
//     myResult.textContent = `you can not enter my site${age}`;
//   }else if (age == 0){
//     console.log('your age need to important')
//     myResult.textContent = `your age need to important${age}`;
//   }
  
// }
// callback

// goodby()
// hello()
// painding()

// function goodby(){
//   console.log('good by sourav')
// }

// function painding(){
//   settimeout(()=>{
//     console.log('4 sce i am awiting')
//   },4000)
// }
// settimeout(()=>{
//   console.log('4 sce i am awiting')
// },1000)


// sun(dispaly, 3,4)

// function sun (callback, x,y){
//   let result = x + y;
//   callback(result)
// }

// function dispaly (result){
//   console.log(result)
// }


// setInterval(() => {
//   console.log('sourav chongrey hi')
//   clearInterval()
// }, 1000);

// callback 

// const checkbutton = document.getElementById('mycheckbtn');
// const showPara = document.getElementById('myP')
// const submitbutton = document.getElementById('mysubmitbtn')

// submitbutton.onclick = function() {
//     const isChecked = checkbutton.getAttribute('aria-checked') === 'true';
//     if (isChecked) {
//         showPara.textContent = 'Hello user';
//     } else {
//         showPara.textContent = 'You are not subscribed';
//     }
// };


// if-else sortcut
// ternary
// let age = 18;
// let isAdult = age >= 18? 'you are Adult' : 'you are a baby';
// console.log(isAdult)

// let Student = true;
// let message = Student ? 'you are student' : 'you are not student';
// console.log(message)

// let purchaseAmount = 2020;

// let discount = purchaseAmount>= 200 ? 50 : 0;
// console.log(`your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);


// STRING SLICING

// const fullName = "Sourav Chongrey";
// console.log(fullName)
// let firstName = fullName.slice(0,5)
// console.log(firstName)

// let numStor = [1,2,3,4,5];
// let slicenumStor = numStor.slice(0,5);
// console.log(slicenumStor)
// let string = "Hello, world!";
// let slicedString = string.slice(7, 12);
// console.log(slicedString); 


///////
// ................string method..............
 const myName = "sourav chongrey";
//  play with text
// charAt() method;
// what is the charAt() method?
// The charAt() method returns the character at a specified index in a string.
const myCharValue0 = myName.charAt(0);
console.log(myCharValue0)  
//  ans = S
const myCharValue1 = myName.charAt(1);
console.log(myCharValue1)  
// ans = o
const myCharValue2 = myName.charAt(2);
console.log(myCharValue2)  
// ans = u

const myCharValue3 = myName.charAt(3);
console.log(myCharValue3)
// ans = r

const myCharValue4 = myName.charAt(4);
console.log(myCharValue4)
// ans = a
const myCharValue5 = myName.charAt(5);
console.log(myCharValue5)
// ans = v
const myCharValue6 = myName.charAt(6);

console.log(myCharValue6)
// ans = blnk
const myCharValue7 = myName.charAt(7);
console.log(myCharValue7)
// ans = c
const myCharValue8 = myName.charAt(8);
console.log(myCharValue8)
// ans = h
const myCharValue9 = myName.charAt(9);
console.log(myCharValue9)
// ans = o
const myCharValue10 = myName.charAt(10);
console.log(myCharValue10)
// ans = n
const myCharValue11 = myName.charAt(11);
console.log(myCharValue11)
// ans = g
const myCharValue12 = myName.charAt(12);
console.log(myCharValue12)
// ans = r
const myCharValue13 = myName.charAt(13);
console.log(myCharValue13)
// ans = e
const myCharValue14 = myName.charAt(14);
console.log(myCharValue14)
// ans = y
// ........................end..................
// index of method
// what is the indexOf() method?
// The indexOf() method returns the index of the first occurrence of a specified value in a string.
const myIndexValue0 = myName.indexOf("s");
console.log(myIndexValue0)
// ans = 0
const myIndexValue1 = myName.indexOf("o");
console.log(myIndexValue1)
// ans = 1
const myIndexValue2 = myName.indexOf("u");
console.log(myIndexValue2)
// ans = 2
const myIndexValue3 = myName.indexOf("r");
console.log(myIndexValue3)
// ans = 3
const myIndexValue4 = myName.indexOf("a");
console.log(myIndexValue4)
// ans = 4
const myIndexValue5 = myName.indexOf("v");
console.log(myIndexValue5)
// ans = 5
const myIndexValue6 = myName.indexOf("c");
console.log(myIndexValue6)
// ans = 6
const myIndexValue7 = myName.indexOf("h");
console.log(myIndexValue7)
// ans = 7
const myIndexValue8 = myName.indexOf("o");
console.log(myIndexValue8)
// ans = 8
const myIndexValue9 = myName.indexOf("n");
console.log(myIndexValue9)
// ans = 9
const myIndexValue10 = myName.indexOf("g");
console.log(myIndexValue10)
// ans = 10
const myIndexValue11 = myName.indexOf("r");
console.log(myIndexValue11)
// ans = 11
const myIndexValue12 = myName.indexOf("e");
console.log(myIndexValue12)
// ans = 12
const myIndexValue13 = myName.indexOf("y");
console.log(myIndexValue13)
// ans = 13
// ........................end..................
//  trim method
// what is the trim() method?
// The trim() method removes whitespace from both sides of a string.
const myTrimValue0 = myName.trim();
console.log(myTrimValue0)
// ans = sourav chongrey
// ........................end..................
// toUpperCase() method
// what is the toUpperCase() method?
// The toUpperCase() method converts a string to uppercase letters.
const myUpperCaseValue0 = myName.toUpperCase();
console.log(myUpperCaseValue0)
// ans = SOURAV CHONGREY
// ........................end..................
//tolowerCase() method
// what is the toLowerCase() method?
// The toLowerCase() method converts a string to lowercase letters.
const myLowerCaseValue0 = myName.toLowerCase();
console.log(myLowerCaseValue0)
// ans = sourav chongrey
// ........................end..................
// repeat() method
// what is the repeat() method?
// The repeat() method returns a new string with a specified number of copies of the string it was called on.
const myRepeatValue0 = myName.repeat(2);
console.log(myRepeatValue0)
// ans = sourav chongrey sourav chongrey
// ........................end..................
// StartsWith() method
// what is the startsWith() method?
// The startsWith() method returns true if a string begins with a specified value, otherwise false.
const myStartsWithValue0 = myName.startsWith("s");
console.log(myStartsWithValue0)
// ans = true
// return true
 if(myStartsWithValue0){
  console.log("yes it is a value " )
 }else{
  console.log("no it is not a value " )
 }
  const myStartsWithValue1 = myName.startsWith(" ");
  console.log(myStartsWithValue1)
  // ans = false
  // return false
  if(myStartsWithValue1){
    console.log("yes it is a value " )
  }else{
    console.log("no it is not a value " )
  }
//   ........................end..................
// endsWith() method
// what is the endsWith() method?
// The endsWith() method returns true if a string ends with a specified value, otherwise false.
const myEndsWithValue0 = myName.endsWith("y");
console.log(myEndsWithValue0)
// ans = true
// return true
 if(myEndsWithValue0){
  console.log("yes it is a value " )
 }else{
  console.log("no it is not a value " )
 }
 const myEndsWithValue1 = myName.endsWith(" ");
 console.log(myEndsWithValue1)
 // ans = false
 // return false
 if(myEndsWithValue1){
  console.log("yes it is a value " )
 }else{
  console.log("no it is not a value " )
 }
//   ........................end..................
//replaceAll() method
// what is the replace() method?
// The replace() method replaces a specified value with another value in a string.
let myPhNo = "700-158-9285";
const myReplaceValue0 = myPhNo.replaceAll("-", "/");
console.log(myReplaceValue0);

// ans = 700/158/9285
// ........................end..................
// padStart() method
// what is the padStart() method?
// The padStart() method pads a string with another string.
const myPadStartValue0 = myName.padStart(20,"*");
console.log(myPadStartValue0)
// ans = **********sourav chongrey
// ........................end..................
// padEnd() method
// what is the padEnd() method?
// The padEnd() method pads a string with another string.
const myPadEndValue0 = myName.padEnd(20,"*");
console.log(myPadEndValue0)
// ans = sourav chongrey**********
// ........................end..................
// string slicing method
// what is the slice() method?
// The slice() method extracts a part of a string and returns the extracted part in a new string.
//  String.slice(start, end)
 // start = The position where to start the extraction. Default is 0.
 // end = The position (up to) where to end the extraction. Default is last character.
 // The slice() method extracts parts of a string and returns the extracted parts in a new string.
const mySliceValue0 = myName.slice(0,6);
console.log(mySliceValue0)
// ans = sourav
const mySliceValue1 = myName.slice(6,12);
console.log(mySliceValue1)
// ans = chong
const mySliceValue2 = myName.slice(6);
console.log(mySliceValue2)
// ans = chongrey
 const mySliceValue3 = myName.slice(0,1);
 console.log(mySliceValue3)
 // ans = S
 const mySliceValue4 = myName.slice(0, myName.indexOf(" "));
 console.log(mySliceValue4)
  // ans = sourav
  const mySliceValue5 = myName.slice(myName.indexOf(" ")+1);
  console.log(mySliceValue5)
   // ans = chongrey
   const myEmail = "souravchongrey@gmail.com";
   const myEmailSliceValue0 = myEmail.slice(0, myEmail.indexOf("@"));
   console.log(myEmailSliceValue0)
   // ans = souravchongrey
   const myEmailSliceValue1 = myEmail.slice(myEmail.indexOf("@")+1);
   console.log(myEmailSliceValue1)
   // ans = gmail.com
   const myEmailSliceValue2 = myEmail.slice(myEmail.indexOf("@")+1, myEmail.indexOf("."));
   console.log(myEmailSliceValue2)
   // ans = gmail

// ........................end..................
//  method chaining method
// what is the method chaining method?
// The method chaining is a technique that can be used to simplify code in scenarios that involve calling multiple methods on an object in a single statement without having to repeatedly type the object's name.
 const myMethodChainingValue0 = myName.slice(0, myName.indexOf(" ")).toUpperCase();
 console.log(myMethodChainingValue0)
 // ans = SOURAV
// ......no method chaining method..........
//  let username = window.prompt("Enter your name");

// console.log(username)
// username = username.trim();
// let letter = username.charAt(0).toUpperCase();
// console.log(letter)
// letter += username.slice(1).toLowerCase();
// console.log(letter)


    // ........................end..................
// .....method chaining method..........
// let username1 = window.prompt("Enter your name");
// username1 = username1.trim().charAt(0).toUpperCase() + username1.slice(1).toLowerCase();
// console.log(username1)
// ........................end..................
// logical oprators 
// what is the logical oprators ?
// used to combine or manipulate boolean values (true or false)
// AND = && two condition willbe true;
// OR = || alteast one conditon willbe true;
// NOT = ! reverse the value; true = true ; !true = false;
const isSunny = true;
if(isSunny){
  console.log("It is sunny outside")
}else{
  console.log("It is not sunny outside")
}
//  ans = It is sunny outside
// using NOT

if(!isSunny){
  console.log("It is sunny outside")
}else{
  console.log("It is not sunny outside")
}
//  ans = It is not sunny outside
// using AND &&
 const temp = 20;
 if(temp> 0){
  console.log ('The weather is good');
 }else if(temp <= 30){
  console.log('The weather is very good');
 }else{
  console.log("The Weather is very bad");
 }
// 2 conditon true  using AND && 
if(temp > 0 && temp <= 30){
  console.log ('The weather is good and');
}else{
  console.log("The Weather is very bad");
}
// ans = The weather is good and
// using or ||
if(temp <= 0 || temp >= 10){
  console.log ('The weather is good or');
}else{
  console.log("The Weather is very bad"); 
}
// ans = The weather is good or
// ........................end..................
// = assignmemt operator  const a = 10;
// == comparison operator (compare if values are equal) ;
// === strict equality operator (compare if values & datatype ara equal);
// != inequality operator
// !== strict inequality operator


const PI = 3.14;
// == comparison operator (compare if values are equal) ;
if(PI == "3.14" ){
  console.log("That is PI")
} else {
  console.log("That is NOT PI")
}
// ans =That is PI

// === strict equality operator (compare if values & datatype ara equal);
if(PI === "3.14" ){
  console.log("That is PI")
} else {
  console.log("That is NOT PI")
}
// ans = That is NOT PI
// === strict equality operator (compare if values & datatype ara equal);
if(PI === 3.14 ){
  console.log("That is PI")
} else {
  console.log("That is NOT PI")
}
// ans = That is  PI

// != inequality operator
if(PI != "3.14"){
  console.log("This is PIppppp")
}else{
  console.log("This is not PIiii")
}
// ans =This is not PI
// !== strict inequality operator
if(PI !==  3.14){
  console.log("This not  PIppppp")
}else{
  console.log("This is PI")
}
// ans = This is not PI
// ........................end................
// while loop 
// while loop = repeat some code WHILE some condition is true;
  let userName = "";
  if(userName === ""){
    console.log ("you did't enter your name");

  }else{
    console.log(`hello ${userName}`)
  }
// using while loop

// repeting loop while some condition is true
// while (userName === ""|| userName == null){
  //  userName= window.prompt("you did not enter your name");
// }
  console.log(`hello ${userName}`)


// more example
let logIn = false;
let username;
let password;

// while(logIn){
  // userName = window.prompt(`Enter your username`);
  // password = window.prompt(`Enter your password`);

  if(userName === "sourav" && password === "chongrey"){
    logIn = true;
    console.log(`welcome ${userName}`)
  }else{
    console.log(`invalid username or password`)
  }
// }

  // ........................end..................
  // for loop
  //  for loop = repeat some code FOR some number of times;

    // increment 
  for(let i=0; i < 20; i++){
    console.log(`my number ${i}`)
  }
  // increment 2 
  for (let i = 0; i<= 20; i=i+2){
    console.log(`my number ${i}`)
  }
  // infinite loop
  // for(;;){
  //   console.log("hello")
  // }
  // ........................end..................
// decrement
for (let i = 20; i > 0; i--){
  console.log(`my number ${i}`)
}
// decrement 2
 for (let i = 30; i > 0; i=i-2){
  console.log(`my number ${i}`)
 }
  //  continue
  // 13 mising
  for (let i = 0; i < 20; i++){
    if(i == 13){
      continue;
    }else{
      console.log(`my number ${i}`)
    }
  }
  //break
  // break after 12
  for(let i = 0; i<20; i++){
    if(i == 13){
      break;
    }else{
      console.log(`my number ${i}`)
    }
  }

  // function = a block of code which only runs when it is called;
  // A section of reusable code. Declare code one, use it whenever you want. call the function to execute that code.

// Example of function
function myFunction1(x,y){
    return x+y;
}
console.log(myFunction1(5,6));

// basic Example of Function
function myFunction(){
  console.log("hello world")

  console.log(`this is very easy function`)
}
// reused it
myFunction()
myFunction()
myFunction()
// reused it
myFunction()
myFunction()
myFunction()
myFunction()
// reused it



 // parameter and argument
// This is parameter
 function HappyBirthday(name, age){
  console.log(`Happy birthday to you my dear ${name}`)
  console.log(`you are ${age} yr old`)
 }
//  This is amgument
HappyBirthday("sourav", 25)


// return statement not used
// not return someting
function add(x,y){
  let result = x + y;
}
let store1 = add(2,3);
//ans = undefine
console.log(store1)

// return statement  used
//  return someting

function sumNum (x,y){
  let sumValu = x+y;
  return sumValu;

}
let store = sumNum(2,4)
// get function value
console.log(store)
// ans = 6

// more function example

function subtract(x,y){
  return x - y;
}
console.log(subtract(7,4))
// ans = 3

function multiple(x,y){
  return x * y

}
console.log(multiple(3,4))
// ans = 12

function divide(x,y){
  return x / y
}
console.log(divide(12,4))
// ans = 3


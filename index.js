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
let myPhNo = 700-158-9285;
const myReplaceValue0 = myPhNo.replaceAll("-","/");
console.log(myReplaceValue0)
// ans = 700/158/9285
// ........................end..................


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

const checkbutton = document.getElementById('mycheckbtn');
const showPara = document.getElementById('myP')
const submitbutton = document.getElementById('mysubmitbtn')

submitbutton.onclick = function() {
    const isChecked = checkbutton.getAttribute('aria-checked') === 'true';
    if (isChecked) {
        showPara.textContent = 'Hello user';
    } else {
        showPara.textContent = 'You are not subscribed';
    }
};
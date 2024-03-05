// let subheading = document.getElementById("about")
// subheading.textContent = 'About : DigipreneurEarning'

// let paragraph = document.getElementsByClassName('aboutpara')

// paragraph[0].textContent = 'hello everyone this is teja polisetti im a vvery passinate worker in this company at Hyderbad'

// var is oldest
// let middle  -> boundaries
//const youngest one,

//declaration

//redeclaration

// var varSibling = 'I might cause neglect and no boundaries'
// varSibling = 'Hello'
// let letSibling = 'I can comit to change and having boundaries'
// letSibling = 'hello hello'
// const constSibling =  'I remain constant'
// constSibling = 'hello hello'

// console.log(varSibling)
// console.log(letSibling)
// console.log(constSibling)

// let name = 'teja'
// let age = 21
// let info = `Student name is : ${name} and  age : ${age}`

// console.log(info)

//spread
//rest
//De-Structuring

//Array

// let array1 = [1, 2, 3, 4]
// let array2 = [...array1, 5, 6, 7]
// let array3 = [...array2, 8, 9, 10]
// console.log(array3)

// object

// let object1 = {
//     a:1,
//     b:2
// }
// let object2 = {
//     ...object1,
//     c:3,
//     d:4
// }
// console.log(object2)

//Function

// function sum(a,b,c,d){
//     return a + b + c + d
// }
// let number = [1,2,3,4]

// console.log(sum(...number))

// //Rest

// function addingNumber(...number){
//     console.log(number)
// }
// console.log(addingNumber(1,2,3,4,5,6,7))

//DAY 16 -> tradiation function, arrow function

function addition(a, b) {
  return a + b;
}
//  console.log(addition(4,5))

//Arrow fucniton

let sum = (a, b) => a + b; //implies creates the relationship between parameters and code

// console.log(sum(5,45))

//this binding

// let student = {
//   name: "teja",
//   age: 21,
//   isStudent: true,
//   sayHello: function () {
//     console.log("Hello " + this.name); //traditon function access this keyword
//   },
//   sayHii: () => {
//     console.log("Hii " + this.age); // arrow function can't access this keyword
//   },
// };
// student.sayHello();
// student.sayHii();

//arguments objects

function printArgument() {
  for (i = 0; i < arguments.length; i++) {
    // tradition function parameter is not required

    console.log(arguments[i]);
  }
}

// printArgument(1,2,3,4,5);

let printArgument1 = (...para) => {
  //in arrow function parameter is required

  for (i = 0; i < para.length; i++) {
    console.log(para[i]);
  }
};

// printArgument1(1,2,3,4,5)

//4th -> return

// function multiply(x, y) {
//   // In tradition funciton return is required
//   return x * y;
// }
// console.log(multiply(4,5))

let trick = (x, y) => x * y; // return is not required while one line code occur

// console.log(trick(4,5))

// let calculateArea = (radius) => {
//     Area =  3.14 * (radius**2)
//     return Area
// }

// console.log(calculateArea(5))

// const power = (base, exponent = 2) => {
//     return Math.pow(base,exponent)
// };

// console.log(power(2,5));
// console.log(power(2));

//call back function

// let name = (x) => {
//   console.log("name");
//   role();
// }; //function can be passed through in another fucntion parameter is know as call back fucntion

// let role = () => console.log("Student");

// name(role);

//Array method

//Map -> addressing all the parts
//filters -> condition satifies
//reduce -> arrange single values

// map method contain to parameter one is call back function and other one is this value , call back have three parameters one is current value, index, array

// let original = [1, 2, 3, 4, 5];

// let multiply = {
//     Number: 2,
// }

// let data = original.map(function(currentvalue, index, arr){
//     // console.log(currentvalue)
//     // console.log(index)
//     console.log(currentvalue * this.Number)

// }, multiply)
// let original = [1, 2, 3, 4, 5];

// let filterArray = original.filter((currentValue, index, arr)=> {

//     return currentValue % 2 == 0;
// })
// console.log(filterArray) // only satify

// let originalArray = [6, 2, 3, 4, 5]

// let reduceArray = originalArray.reduce((accum, curre, ind, arr) => {
//     return curre
// })
// console.log(reduceArray)



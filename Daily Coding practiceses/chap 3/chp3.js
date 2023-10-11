"use strict";
// // var a: number = 7;
// // console.log(a);
// // var b;
// // b = 8 // number
// // b = "k"// string
// // console.log(typeof b);
// // // union <<<< 
// // let Age: number | string = "eighteen";
// // let age: string | null = null;
// // if (1 > 0.5) {
// //     age = "okiess"
// // }
// // console.log(typeof age);
// // // chap no 4 objects
// type studentType = {
//     name: string,
//     age: number,
//     email: string,
//     height: number
// }
// let student: studentType[] = [{
//     name: "Farhan",
//     age: 23,
//     email: "farhanyounas5204@gmail.com",
//     height: 5.9
// }]
// type dataTypeClass = {
//     name: string,
//     age: number,
//     roll: number,
//     city: string
// }
// let fruits: string[] = ["orange", "banana", "Kiwi", "Apple", "Starawberry"];
// fruits.pop(); // it will remove last element from arrauy
// console.log(fruits);
// console.log(fruits.pop());// return the poped value
// console.log(fruits);
// fruits.push("Pizza");// add element at the end of array
// console.log(fruits)
// console.log(fruits.push());// return the length of array
// type objType = {
//     Name: string,
//     age: number,
//     Degree: string,
//     University: string
// }
// let obj: objType = {
//     Name: "Farhan",
//     age: 23,
//     Degree: "BSSE",
//     University: "Agriculture"
// }
// console.log("object", obj);
// type WithFirstName = {
//     firstName: string;
// };
// type WithLastName = {
//     lastName: string;
// };
// const hasBoth = {
//     firstName: "Lucille",
//     lastName: "Clifton",
// };
// let withFirstName: WithFirstName = hasBoth;
// console.log("withFirstName", withFirstName);
// type FirstAndLastNames = {
//     first: string;
//     last: string;
// };
// // Ok
// const hasBoth1: FirstAndLastNames = {
//     first: "Sarojini",
//     last: "Naidu",
// };
// const hasOnlyOne1 = {
//     first: "Sappho",
//     last: "leo",
//     name: "Mary Oliver"
// };
// const ali: FirstAndLastNames = hasOnlyOne1;
// console.log("ali", ali);
// type poem = {
//     author: {
//         firstName: string,
//         lastName: string
//     };
//     name: string
// }
// const poemMatch: poem = {
//     author: {
//         firstName: "Farhan",
//         lastName: "Ali"
//     },
//     name: "Farhan Ali",
// };
// console.log("poemMatch", poemMatch);
// console.log("Type of poemMatch", typeof poemMatch);
// type bookType = {
//     Author?: string,
//     Pages?: number
// }
// const book: bookType = {
//     Author: "Talha",
//     Pages: 45
// }
// const book2: bookType = {
//     Author: "loin"
// }
// var arr1: number[] = [1, 2, 3, 4, 5];
// arr1.push(6);
// console.log("arr1", arr1);
// console.log(arr1.push(7));
// console.log(arr1);
// arr1.pop();
// console.log(arr1);
// console.log(arr1.pop());
// console.log(arr1);
// var pets: string[] = [];
// pets[0] = "dog";
// pets[1] = "cato";
// pets[2] = "parrot"
// pets[3] = "kaboter"
// pets.push("chuzziiii")
// pets.shift() // it will remove elemnent from the 1st indewx
// console.log("pets", pets);
// pets.unshift("Monkey")
// console.log("pets", pets);
// // push >>> add element to last
// // pop >>> remove element from last
// // shift >>> remove element from 1st
// // unshift >>> add elemny in 1st index
// console.log("***************");
// var Fruits: string[] = [];
// Fruits.push("Orange");
// Fruits.push("Banana");
// Fruits.push("Kiwi");
// console.log("Fruits", Fruits);
// Fruits.splice(1, 0, "Strawberry", "Grapes")
// console.log("Fruits", Fruits);
// console.log(Fruits[2]);
// console.log("______________________");
// console.log("Fruits", Fruits);
// let newfruits: string[] = Fruits.slice(2);
// console.log(newfruits);
// let a: number = 10
// if (true) {
//     a = 20;
//     console.log("A is ", a);
// }
// console.log("after if statement the value of A", a);
// function exampleLet() {
//     let z = 10;
//     if (true) {
//         let z = 20; // This is a different 'z' variable within the block.
//         console.log(z);
//     }
//     console.log(z); // Outputs 10
// }
// exampleLet();
// setTimeout(() => {
//     console.log(1);
// }, 0);
// console.log(2);
// let a = "Pakistan";
// a = 9;
// console.log(a);
let myType = { name: "Zia", id: 1 };
myType = { id: 2, name: "Tom" };
myType = { id: 3, name: "Mike", gender: false };
myType = { id: 4, gender: false };
console.log(myType);
let notSure = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
console.log(colorName);

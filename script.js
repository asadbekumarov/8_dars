let count = 0;

const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

decrementButton.addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// 1------------------------
// const reverseSeq = (n) => {
//   let result = [];
//   for (let i = n; i > 0; i--) {
//     result.push(i);
//   }
//   return result;
// };
// console.log(reverseSeq(6));
// 2--------------------------
// function simpleMultiplication(number) {
//   return number % 2 === 0 ? number * 8 : number * 9;
// }
// console.log(simpleMultiplication(4));
// console.log(simpleMultiplication(5));
// 3---------------------------------
// function makeUpperCase(str) {
//     return str.toUpperCase();
// }
// console.log(makeUpperCase("salom, dunyo!"));
// 4----------------------------------
// function removeExclamationMarks(s) {
//   return s.replace(/!/g, "");
// }
// console.log(removeExclamationMarks("Hello! World!!"));
// 5---------------------------------
// function greet(name){
//     if(name === "Johnny")
//       return "Hello, my love!";
//     return "Hello, " + name + "!";
//   }
// 6-------------------------------------
// function stringToArray(string) {
//   return string.split(" ");
// }
// console.log(stringToArray("This is a test"));
// 7------------------------------
// function sumMix(x) {
//   return x.reduce((sum, value) => sum + Number(value), 0);
// }
// console.log(sumMix([1, "2", 3, "4"]));
// 8------------------------------------
// function invert(array) {
//   return array.map((num) => -num);
// }
// console.log(invert([1, -2, 3, -4, 5]));
// 9----------------------------------------
// const square = (x) => x * x;
// console.log(square(6));
// 10----------------------------------------
// function reverseWords(str) {
//   return str.split(" ").reverse().join(" ");
// }
// console.log(reverseWords("Hello world this is JavaScript"));
// qoshimcha----------------------------
// 1-------------------------
// function greet(name) {
//     return `Hello, ${name} how are you doing today?`;
// }
// console.log(greet("Ali"));
// 2-----------------------------
// function digitize(n) {
//   const digitsArray = n.toString().split("");
//   return digitsArray.reverse().map(Number);
// }
// console.log(digitize(12345));
// 3----------------------------------
// function grow(x) {
//   return x.reduce((product, num) => product * num, 1);
// }
// console.log(grow([1, 2, 3, 4]));
// console.log(grow([5, 10, 2]));
// 4-----------------------------------
// function switchItUp(number) {
//     switch (number) {
//         case 0:
//             return "Zero";
//         case 1:
//             return "One";
//         case 2:
//             return "Two";
//         case 3:
//             return "Three";
//         case 4:
//             return "Four";
//         case 5:
//             return "Five";
//         case 6:
//             return "Six";
//         case 7:
//             return "Seven";
//         case 8:
//             return "Eight";
//         case 9:
//             return "Nine";
//         default:
//             return "Invalid number";
//     }
// }
// console.log(numberToWord(1));
// 5--------------------------
// const summation = (num) => (num * (num + 1)) / 2;
// console.log(summation(5));

// ЦИКЛЫ FOR!!!

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += "\n";
// }

// console.log(result);

// first: for(let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// Задача номер 1!!!
// for (number = 5; number < 11; number ++) {
//     console.log(number);
// }

// Задача номер 2!!!
// for (let number = 20; number > 9; number--) {
//     if (number === 12) {
//         break;
//     }
//     console.log(number);
// }

// Задача номер 3!!!
// for (let number = 2; number <= 10; number+=2) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// }

// Задача номер 4!!! (с циклом for)
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// (с циклом while)
// let i = 2;
// while (i <= 16) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// Задача номер 5!!!

// let myArray = [];
// for (let i = 5; i <= 10; i++) {
//     myArray[i - 5] = i;
// }
// console.log(myArray);

// ФУНКЦИИ !!!

// let num = 20;

// function ShowFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }

// ShowFirstMessage("Hello world!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello!");
// };

// logger();

// const calc1 = (a, b) => {
//     console.log("1");
//     return(a + b);
// };

// console.log(calc1(4, 6));

// return в обьектах!!!

// const usdCurr = 28;
// const eurCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion (result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return;
//     }
//     console.log("Done"); // Функция return остановила весь код а не только цикл for как с break
// }

// test();

// Методы и свойства строк и чисел
// function doNothing() {}
// console.log(doNothing() === undefined);

// const str = "test";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


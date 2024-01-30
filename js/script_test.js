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

// Callback функции

// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// Фишки с функциями и callback!!!

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log("Я прошел этот урок!");
// }

// learnJS("JavaScript", done);

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);
// console.log(bg);

// console.log(Object.keys(options).length);

// const market = {
//     apple: 4,
//     banana: 3,
//     oranges: 5
// };

// console.log(Object.keys(market).length);

// console.log(options["colors"]["border"]);


// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key}, имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// Методы массивов!!

// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// let a = 5;
// let b = a; // Копия переменной

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Передает ссылку на обьект
// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy (mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.c.x = 10;
// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add); // Клонирует обьект

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// newArray[1] = "asdasdasd";
// console.log(newArray);
// console.log(oldArray);

// const video = ["youtube", "vimeo", "rutube"],
//       blogs = ["wordpress", "livejournal", "blogger"],
//       internet = [...video, ...blogs, "vk", "facebook"];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// Упражнение по написанию кода 11, массивы

// function showFamily (family) {
//     if (family == "") {
//         console.log("Семья пуста");
//     }
//     else {
//         console.log(`Семья состоит из: ${family}`);
//     }
// }

// const family = ["Peter", "Ann", "Alex", "Linda"];
// let newFamily = family.slice();
// newFamily = [];
// console.log(family);
// console.log(newFamily);

// showFamily(family);
// showFamily(newFamily);

// Прототипы и ООП!!!

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     healt: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; // Устаревший метод!

// Object.setPrototypeOf(john, soldier);

// john.sayHello();


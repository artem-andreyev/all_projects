const box = document.getElementById("box");
console.log(box);

const btns = document.getElementsByTagName("button");
console.log(btns[0]);

const circles = document.getElementsByClassName("circle");
console.log(circles);

// Новые елементы

const hearts = document.querySelectorAll(".heart"); // Все елементы
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector(".heart"); // Первый елемент
console.log(oneHeart);

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = `background-color: blue; width: 500px`

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
// const text = document.createTextNode("Тут был я");

div.classList.add("black");
function showResult(text) {
document.getElementById("output").textContent = text;
}

function task1() {
var userName = prompt("Введіть ваше ім'я:");


if (userName !== null) {
    var message = "Hello, " + userName + "! Welcome to JavaScript";

    alert(message);
    showResult(message);
}

}

function task2() {
var age = Number(prompt("Введіть ваш вік:"));


if (isNaN(age) || age < 0) {
    alert("Введено некоректний вік.");
    showResult("Введено некоректний вік.");
    return;
}

var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

var message = "Ви народилися приблизно у " + birthYear + " році.";

alert(message);
showResult(message);


}

function task3() {
var firstName = prompt("Введіть ім'я:");
var lastName = prompt("Введіть прізвище:");


if (firstName === null || lastName === null) {
    return;
}

var resultPlus = "Your full name is " + firstName + " " + lastName;
var resultTemplate = "Your full name is " + firstName + " " + lastName;

console.log(resultPlus);
console.log(resultTemplate);

showResult(resultPlus + "\n" + resultTemplate);


}

function task4() {
var userName = "Захарій";


if (true) {
    var enteredName = prompt("Введіть інше ім'я:");

    console.log("Ім'я всередині блоку:", enteredName);
    console.log("Глобальне ім'я:", userName);

    showResult(
        "Ім'я всередині блоку: " + enteredName +
        "\nГлобальне ім'я: " + userName +
        "\n\nПродемонстровано роботу змінних у різних областях."
    );
}


}

function task5() {
var name = prompt("Введіть ваше ім'я:");
var age = Number(prompt("Введіть ваш вік:"));


if (name === null) {
    return;
}

var answer = confirm(
    "Hello, " + name + "! Your age is " + age + ". Continue?"
);

if (answer) {
    alert("Welcome!");
    showResult("Welcome!");
} else {
    alert("Goodbye!");
    showResult("Goodbye!");
}


}

function task6() {
var number = Number(prompt("Введіть число:"));


if (isNaN(number)) {
    alert("Введено некоректне число.");
    showResult("Введено некоректне число.");
    return;
}

if (number % 2 === 0) {
    alert("Number is even");
    showResult("Number is even");
} else {
    alert("Number is odd");
    showResult("Number is odd");
}


}

function task7() {
function calculate() {
var result = 10;
var innerResult = 20;
    console.log("Результат всередині блоку:", innerResult);
    console.log("Результат поза блоком:", result);

    showResult(
        "Результат всередині блоку: " + innerResult +
        "\nРезультат поза блоком: " + result +
        "\n\nПродемонстровано область видимості змінних."
    );
}

calculate();


}

function task8() {
var secretNumber = 11 
var enteredNumber = Number(
    prompt("Введіть число від 0 до 9:")
);

if (isNaN(enteredNumber)) {
    alert("Введено некоректне число.");
    showResult("Введено некоректне число.");
    return;
}

if (enteredNumber === secretNumber) {
    alert("Correct!");
    showResult("Correct! Секретне число: " + secretNumber);
} else {
    alert("Wrong!");
    showResult("Wrong! Правильне число: " + secretNumber);
}


}

function task9() {
var studentName = prompt("Введіть ваше ім'я:");
var firstNumber = Number(prompt("Введіть перше число:"));
var secondNumber = Number(prompt("Введіть друге число:"));


if (studentName === null) {
    return;
}

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Введено некоректні числа.");
    showResult("Введено некоректні числа.");
    return;
}

var sum = firstNumber + secondNumber;

var result =
    "Hello, " + studentName +
    "! The sum of " + firstNumber +
    " and " + secondNumber +
    " is " + sum;

console.log(result);
showResult(result);

}

document.getElementById("button1").addEventListener("click", task1);
document.getElementById("button2").addEventListener("click", task2);
document.getElementById("button3").addEventListener("click", task3);
document.getElementById("button4").addEventListener("click", task4);
document.getElementById("button5").addEventListener("click", task5);
document.getElementById("button6").addEventListener("click", task6);
document.getElementById("button7").addEventListener("click", task7);
document.getElementById("button8").addEventListener("click", task8);
document.getElementById("button9").addEventListener("click", task9);


function showResult(text) {
const output = document.getElementById("output");
output.textContent = text;
}

function task1() {
const userName = prompt("Введіть ваше ім'я:");

```
if (userName !== null && userName.trim() !== "") {
    const message = `Hello, ${userName}! Welcome to JavaScript`;

    alert(message);
    showResult(message);
}
```

}

function task2() {
const age = Number(prompt("Введіть ваш вік:"));

```
if (Number.isNaN(age) || age < 0) {
    alert("Введено некоректний вік.");
    showResult("Введено некоректний вік.");
    return;
}

const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;

const message = `Ви народилися приблизно у ${birthYear} році.`;

alert(message);
showResult(message);
```

}

function task3() {
const firstName = prompt("Введіть ім'я:");
const lastName = prompt("Введіть прізвище:");

```
if (firstName === null || lastName === null) {
    return;
}

const resultPlus = "Your full name is " + firstName + " " + lastName;
const resultTemplate = `Your full name is ${firstName} ${lastName}`;

console.log(resultPlus);
console.log(resultTemplate);

showResult(
    resultPlus +
    "\n" +
    resultTemplate
);
```

}

function task4() {
const userName = "Захарій";

```
{
    const userNameInside = prompt("Введіть інше ім'я:");

    console.log("Ім'я всередині блоку:", userNameInside);
    console.log("Ім'я поза блоком:", userName);

    showResult(
        "Ім'я всередині блоку: " + userNameInside +
        "\nІм'я поза блоком: " + userName +
        "\n\nЗмінна всередині блоку має власну блочну область видимості."
    );
}
```

}

function task5() {
const name = prompt("Введіть ваше ім'я:");
const age = Number(prompt("Введіть ваш вік:"));

```
if (name === null) {
    return;
}

const answer = confirm(
    `Hello, ${name}! Your age is ${age}. Continue?`
);

if (answer) {
    alert("Welcome!");
    showResult("Welcome!");
} else {
    alert("Goodbye!");
    showResult("Goodbye!");
}
```

}

function task6() {
const number = Number(prompt("Введіть число:"));

```
if (Number.isNaN(number)) {
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
```

}

function task7() {
function calculate() {
const result = 10;
let insideResult = "";

```
    {
        const result = 20;

        insideResult = "Результат всередині блоку: " + result;

        console.log("Результат всередині блоку:", result);
    }

    console.log("Результат поза блоком:", result);

    showResult(
        insideResult +
        "\nРезультат поза блоком: " + result +
        "\n\nЦе демонструє блочну область видимості let і const."
    );
}

calculate();
```

}

function task8() {
const secretNumber = 11 % 10;

```
const enteredNumber = Number(
    prompt("Введіть число від 0 до 9:")
);

if (Number.isNaN(enteredNumber)) {
    alert("Введено некоректне число.");
    showResult("Введено некоректне число.");
    return;
}

if (enteredNumber === secretNumber) {
    alert("Correct!");
    showResult("Correct! Секретне число: " + secretNumber);
} else {
    alert("Wrong!");
    showResult(
        "Wrong! Правильне число: " + secretNumber
    );
}
```

}

function task9() {
const studentName = prompt("Введіть ваше ім'я:");
const firstNumber = Number(prompt("Введіть перше число:"));
const secondNumber = Number(prompt("Введіть друге число:"));

```
if (studentName === null) {
    return;
}

if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    alert("Одне з введених значень не є числом.");
    showResult("Одне з введених значень не є числом.");
    return;
}

const sum = firstNumber + secondNumber;

const result =
    "Hello, " + studentName +
    "! The sum of " + firstNumber +
    " and " + secondNumber +
    " is " + sum;

console.log(result);
showResult(result);
```

}

document.getElementById("task1Button").addEventListener("click", task1);
document.getElementById("task2Button").addEventListener("click", task2);
document.getElementById("task3Button").addEventListener("click", task3);
document.getElementById("task4Button").addEventListener("click", task4);
document.getElementById("task5Button").addEventListener("click", task5);
document.getElementById("task6Button").addEventListener("click", task6);
document.getElementById("task7Button").addEventListener("click", task7);
document.getElementById("task8Button").addEventListener("click", task8);
document.getElementById("task9Button").addEventListener("click", task9);


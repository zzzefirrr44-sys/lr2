
function showResult(text) {
    document.getElementById("output").textContent = text;
}


// Рівень 4–6 балів

function task1() {
    let userName = prompt("Введіть ваше ім'я:");

    if (userName !== null) {
        alert(`Hello, ${userName}! Welcome to JavaScript`);
        showResult(`Hello, ${userName}! Welcome to JavaScript`);
    }
}


function task2() {
    let age = Number(prompt("Введіть ваш вік:"));
    let currentYear = new Date().getFullYear();
    let birthYear = currentYear - age;

    alert(`You were born in ${birthYear}`);
    showResult(`You were born in ${birthYear}`);
}


function task3() {
    let firstName = prompt("Введіть ім'я:");
    let lastName = prompt("Введіть прізвище:");

    let resultPlus = "Your full name is " + firstName + " " + lastName;
    let resultTemplate = `Your full name is ${firstName} ${lastName}`;

    console.log(resultPlus);
    console.log(resultTemplate);

    showResult(
        resultPlus +
        "\n" +
        resultTemplate
    );
}


// Рівень 7–9 балів

function task4() {
    let userName = "Захарій";

    if (true) {
        let userName = prompt("Введіть інше ім'я:");

        console.log("Ім'я всередині блоку:", userName);
        console.log("Глобальне ім'я:", window.userName);

        showResult(
            "Ім'я всередині блоку: " + userName +
            "\nГлобальне ім'я: Захарій" +
            "\n\nЗмінна всередині блоку if має власну блочну область видимості."
        );
    }
}


function task5() {
    let name = prompt("Введіть ваше ім'я:");
    let age = Number(prompt("Введіть ваш вік:"));

    let answer = confirm(
        `Hello, ${name}! Your age is ${age}. Continue?`
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
    let number = Number(prompt("Введіть число:"));

    if (number % 2 === 0) {
        alert("Number is even");
        showResult("Number is even");
    } else {
        alert("Number is odd");
        showResult("Number is odd");
    }
}


// Рівень 10–12 балів

function task7() {
    function calculate() {
        let result = 10;

        if (true) {
            let result = 20;

            console.log("Результат всередині if:", result);

            showResult(
                "Результат всередині if: " + result
            );
        }

        console.log("Результат поза if:", result);

        showResult(
            "Результат всередині if: 20" +
            "\nРезультат поза if: " + result +
            "\n\nЦе демонструє блочну область видимості let."
        );
    }

    calculate();
}


function task8() {
    const secretNumber = 11 % 10;

    let enteredNumber = Number(
        prompt("Введіть число від 0 до 9:")
    );

    if (enteredNumber === secretNumber) {
        alert("Correct!");
        showResult("Correct!");
    } else {
        alert("Wrong!");
        showResult("Wrong!");
    }
}


function task9() {
    let studentName = prompt("Введіть ваше ім'я:");
    let firstNumber = Number(prompt("Введіть перше число:"));
    let secondNumber = Number(prompt("Введіть друге число:"));

    let sum = firstNumber + secondNumber;

    let result =
        "Hello, " + studentName +
        "! The sum of " + firstNumber +
        " and " + secondNumber +
        " is " + sum;

    console.log(result);
    showResult(result);
}


const studentName = "Захарій";
const surname = "Шкляр";


// Завдання 1

const nameList = document.getElementById("nameList");

for (const letter of studentName) {

    const item = document.createElement("li");

    item.textContent = letter;

    item.addEventListener("mouseenter", () => {
        alert(`Це літера ${letter}`);
    });

    nameList.appendChild(item);
}


// Завдання 2

const studentsButton = document.getElementById("studentsButton");
const studentsContainer = document.getElementById("students");

studentsButton.addEventListener("click", () => {

    while (true) {

        const fullName = prompt("Введіть прізвище та ім'я студента:");

        if (fullName === null) {
            break;
        }

        if (fullName.trim() !== "") {

            const student = document.createElement("p");

            student.textContent = fullName;

            studentsContainer.appendChild(student);
        }
    }
});


// Завдання 3

const lettersButton = document.getElementById("lettersButton");
const lettersContainer = document.getElementById("letters");

let blocksCreated = false;

lettersButton.addEventListener("click", () => {

    if (blocksCreated === true) {

        lettersContainer.innerHTML = "";

        blocksCreated = false;

        lettersButton.textContent = "Показати блоки";

    } else {

        for (const letter of surname) {

            const block = document.createElement("div");

            block.textContent = letter;

            block.style.display = "inline-flex";
            block.style.width = "60px";
            block.style.height = "60px";
            block.style.margin = "5px";
            block.style.backgroundColor = "#333";
            block.style.color = "white";
            block.style.justifyContent = "center";
            block.style.alignItems = "center";
            block.style.fontSize = "25px";
            block.style.fontWeight = "bold";
            block.style.cursor = "pointer";

            block.addEventListener("mouseenter", () => {
                alert(`Це літера ${letter}`);
            });

            lettersContainer.appendChild(block);
        }

        blocksCreated = true;

        lettersButton.textContent = "Очистити блоки";
    }
});


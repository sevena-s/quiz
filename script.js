const answers = {
    "question-1": "smartsweets",
    "question-2": "august",
    "question-3": "money"
};

let currentQuestion = 1;

const final = document.querySelector('.final')
const questionsDiv = document.querySelector(".questions");
const win = document.querySelector(".you-win");
const title = document.querySelector(".title");

function checkAnswer(event) {
    const input = event.target;
    const questionId = input.id;
    const userAnswer = input.value.trim().toLowerCase();

    if (userAnswer === answers[questionId]) {
        const currentDiv = document.querySelector(`.question-${currentQuestion}`);
        currentDiv.classList.remove("active"); 
        
        currentQuestion++; 
        
        const nextDiv = document.querySelector(`.question-${currentQuestion}`);
        if (nextDiv) {
            nextDiv.classList.add("active");
        } else {
            final.classList.add("active");
            win.classList.add("active");
            questionsDiv.classList.add("hidden")
            questionsDiv.classList.remove("active")
            title.classList.add("hidden")
            title.classList.remove("active")
        }
    }
}

document.querySelectorAll(".questions input").forEach(input => {
    input.addEventListener("input", checkAnswer);
});

const button = document.getElementById("yes-button");
const firstDiv = document.querySelector(".first");

// Add event listener to button
button.addEventListener("click", function() {
    questionsDiv.classList.add("active"); // Adds the class to the element
    title.classList.add("active");
    firstDiv.classList.add("hidden"); 
});
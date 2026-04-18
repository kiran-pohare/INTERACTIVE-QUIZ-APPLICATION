const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Pune", "Chennai"],
        answer: "Delhi"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlinks Text Mark Language",
            "None"
        ],
        answer: "Hyper Text Markup Language"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const quizEl = document.getElementById("quiz");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    feedbackEl.textContent = "";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";

    let q = questions[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;

        btn.onclick = () => selectAnswer(btn, q.answer);

        optionsEl.appendChild(btn);
    });
}

function selectAnswer(button, correctAnswer) {
    const buttons = optionsEl.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.disabled = true;

        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        }
    });

    if (button.textContent === correctAnswer) {
        score++;
        feedbackEl.textContent = "Correct!";
    } else {
        button.classList.add("wrong");
        feedbackEl.textContent = "Wrong!";
    }

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = score + " / " + questions.length;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultEl.classList.add("hidden");
    quizEl.classList.remove("hidden");
    loadQuestion();
}

// Initialize
loadQuestion();


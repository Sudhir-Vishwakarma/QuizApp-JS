const questions = [
    {
        question: "What is the smallest unit of data in a computer?",
        answers: [
            { text: "Gigabyte", correct: "false" },
            { text: "Bit", correct: "true" },
            { text: "byte", correct: "false" },
            { text: "Terabyte", correct: "false" }
        ]
    },
    {
        question: "Which of the following is NOT an anti-virus software?",
        answers: [
            { text: "Avast", correct: "false" },
            { text: "Linux", correct: "true" },
            { text: "Norton", correct: "false" },
            { text: "Kaspersky", correct: "false" }
        ]
    },
    {
        question: "In the context of digital computer, which of the following pairs of digits is referred to as binary code ?",
        answers: [
            { text: "3 and 4", correct: "false" },
            { text: "4 and 1", correct: "false" },
            { text: "3 and 0", correct: "false" },
            { text: "0 and 1", correct: "true" }
        ]
    },
    {
        question: "Which unit of the computer is considered as the brain of the computer?",
        answers: [
            { text: "Memory unit", correct: "false" },
            { text: "Input unit", correct: "false" },
            { text: "CPU", correct: "true" },
            { text: "Output unit", correct: "false" }
        ]
    },
    {
        question: "What is the full form of PROM?",
        answers: [
            { text: "Programmable read-only memory", correct: "true" },
            { text: "Program read-only memory", correct: "false" },
            { text: "Program read-output memory", correct: "false" },
            { text: "Primary read-only Memory", correct: "false" }
        ]
    },
    {
        question: "In the context of computing, what is the full form of URL?",
        answers: [
            { text: "Uniform Region Locator", correct: "false" },
            { text: "Uniform Resource Locator", correct: "true" },
            { text: "Undistributed Resource Locator", correct: "false" },
            { text: "Unified Resource Locator", correct: "false" }
        ]
    },
    {
        question: "	In the context of computing, a byte is equal to how many bits?",
        answers: [
            { text: "4", correct: "false" },
            { text: "16", correct: "false" },
            { text: "24", correct: "false" },
            { text: "8", correct: "true" }
        ]
    },
    {
        question: "Trackball is which of the following devices?",
        answers: [
            { text: "Input device", correct: "true" },
            { text: "Touch-pad", correct: "false" },
            { text: "Output device", correct: "false" },
            { text: "Barcode Reader", correct: "false" }
        ]
    },
    {
        question: "Which type of computers is used to control air traffic and radar of national defence?",
        answers: [
            { text: "Personal Computer", correct: "false" },
            { text: "Hybrid Computers", correct: "true" },
            { text: "Analogue Computer", correct: "false" },
            { text: "Digital Computer", correct: "false" }
        ]
    },
    {
        question: "A computer on the Internet that uses HTTP protocol is known as:?",
        answers: [
            { text: "LAN", correct: "false" },
            { text: "WAP", correct: "false" },
            { text: "Web Server", correct: "true" },
            { text: "WLAN", correct: "false" }
        ]
    },
    {
        question: "What is the shortcut key for the central alignment of a line or text in MS Office software?",
        answers: [
            { text: "Ctrl+V", correct: "false" },
            { text: "Ctrl+Q", correct: "false" },
            { text: "Ctrl+L", correct: "false" },
            { text: "Ctrl+E", correct: "true" }
        ]
    },
    {
        question: "Which is the central server in computer network which lets the concerned user utilise the storage capacity of the server?",
        answers: [
            { text: "Application Server", correct: "false" },
            { text: "Print Server", correct: "false" },
            { text: "File Server", correct: "true" },
            { text: "Web Server", correct: "false" }
        ]
    },
    {
        question: "What is the fastest to read from and write to than the other kinds of storage in a computer?",
        answers: [
            { text: "RAM", correct: "true" },
            { text: "CD-ROM", correct: "false" },
            { text: "Floppy Disk", correct: "false" },
            { text: "Hard Disk", correct: "false" }
        ]
    },
    {
        question: "Who designed the first analog computer in India?",
        answers: [
            { text: "Deb Kumar Bose", correct: "false" },
            { text: "Samarendra Kumar Mitra", correct: "true" },
            { text: "Subodh Chandra Das Gupta", correct: "false" },
            { text: "Bimal Kumar Bhattacharyya", correct: "false" }
        ]
    },
    {
        question: "Who among the following pioneered Binary Logic and Arithmetic in Computers Programming?",
        answers: [
            { text: "John Backus", correct: "false" },
            { text: "Leslie Lamport", correct: "false" },
            { text: "Noam Chomsky", correct: "false" },
            { text: "Claude Shannon", correct: "true" }
        ]
    },
    {
        question: "AIX is the operating system of which company?",
        answers: [
            { text: "IBM", correct: "true" },
            { text: "Apple", correct: "false" },
            { text: "Unisys", correct: "false" },
            { text: "Microsoft", correct: "false" }
        ]
    },
    {
        question: "In computer terminology, what is the full form of RAM?",
        answers: [
            { text: "Random Access Memory", correct: "true" },
            { text: "Repeated Access Memory", correct: "false" },
            { text: "Rapid Access Memory", correct: "false" },
            { text: "Regular Access Memory", correct: "false" }
        ]
    },
    {
        question: "A database used by Microsoft Windows for storing configuration information is known as?",
        answers: [
            { text: "Record", correct: "false" },
            { text: "Registry", correct: "true" },
            { text: "Cookie", correct: "false" },
            { text: "Cache", correct: "false" }
        ]
    },
    {
        question: "Who among the following invented the World Wide Web (www) in 1989?",
        answers: [
            { text: "Charles Babbage", correct: "false" },
            { text: "Steve Wozniak", correct: "false" },
            { text: "Bill Gates", correct: "false" },
            { text: "Tim Berners-Lee", correct: "true" }
        ]
    },
    {
        question: "	In the context of memory size in computer data storage, one gigabyte is equal to how many megabytes?",
        answers: [
            { text: "1012 MB", correct: "false" },
            { text: "1022 MB", correct: "false" },
            { text: "1024 MB", correct: "true" },
            { text: "1002 MB", correct: "false" }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display  = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextbutton();
    } else {
        startQuiz();
    }
});


startQuiz();
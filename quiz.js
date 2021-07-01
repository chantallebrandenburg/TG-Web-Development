//Arrays 

const arrayQuestions =
    [
        "what is 1?",
        "what is 2?",
        "What is 3?",
        "What is 4?",
    ]

const arrayAnswersFirst = [
    "1",
    "2",
    "3",
    "4",
]
const arrayAnswersSecond = [
    "5",
    "6",
    "7",
    "8",
]
const arrayAnswersThird = [
    "9",
    "10",
    "11",
    "12",
]

const arrayAnswersFourth = [
    "13",
    "14",
    "15",
    "16",
]
  
let div1 = document.getElementById("div1");


/// Create Button ///
let startButton = document.createElement("BUTTON");     // Create a Button
startButton.innerHTML = "START";                    // Insert Text
startButton.classList.add("start__button");          // Add Class
div1.appendChild(startButton);                      // Append Button to <div1>



//function start Button "when the start button is clicked..=>"
startButton.addEventListener("click", () => {

    startButton.style.display = "inline-block";       //  Make startButton invisable
    startButton.style.display = "none";
    div1.style.backgroundColor = "rgb(78, 197, 206)";      //  Change div1 style

    // create Math Quiz
    let mathQuiz = document.createElement("P");
    mathQuiz.innerText = "Math Quiz";
    mathQuiz.classList.add("math__quiz");
    div1.appendChild(mathQuiz);

    //create Quiz Question
    let quizQuestion = document.createElement("P");
    quizQuestion.innerText = arrayQuestions[0];
    quizQuestion.classList.add("quiz__question");
    div1.appendChild(quizQuestion);



    // Loops to match random questions and random answers //
    //    first question
    if (quizQuestion.innerText === arrayQuestions[0]) {
        //create answers
        let quizAnswerA = document.createElement("button");
        quizAnswerA.innerText = "A: " + arrayAnswersFirst[0];
        quizAnswerA.classList.add("quiz__answer");
        div1.appendChild(quizAnswerA);

        let quizAnswerB = document.createElement("button");
        quizAnswerB.innerText = "B: " + arrayAnswersFirst[1];
        quizAnswerB.classList.add("quiz__answer");
        div1.appendChild(quizAnswerB);

        let quizAnswerC = document.createElement("button");
        quizAnswerC.innerText = "C: " + arrayAnswersFirst[2];
        quizAnswerC.classList.add("quiz__answer");
        div1.appendChild(quizAnswerC);

        let quizAnswerD = document.createElement("button");
        quizAnswerD.innerText = "D: " + arrayAnswersFirst[3];
        quizAnswerD.classList.add("quiz__answer");
        div1.appendChild(quizAnswerD);
    }
    // second question
    if (quizQuestion.innerText === arrayQuestions[1]) {
        //create answers
        let quizAnswerA = document.createElement("button");
        quizAnswerA.innerText = "A: " + arrayAnswersSecond[0];
        quizAnswerA.classList.add("quiz__answer");
        div1.appendChild(quizAnswerA);

        let quizAnswerB = document.createElement("button");
        quizAnswerB.innerText = "B: " + arrayAnswersSecond[1];
        quizAnswerB.classList.add("quiz__answer");
        div1.appendChild(quizAnswerB);

        let quizAnswerC = document.createElement("button");
        quizAnswerC.innerText = "C: " + arrayAnswersSecond[2];
        quizAnswerC.classList.add("quiz__answer");
        div1.appendChild(quizAnswerC);

        let quizAnswerD = document.createElement("button");
        quizAnswerD.innerText = "D: " + arrayAnswersSecond[3];
        quizAnswerD.classList.add("quiz__answer");
        div1.appendChild(quizAnswerD);
    }
    if (quizQuestion.innerText === arrayQuestions[2]) {
        //create answers
        let quizAnswerA = document.createElement("button");
        quizAnswerA.innerText = "A: " + arrayAnswersThird[0];
        quizAnswerA.classList.add("quiz__answer");
        div1.appendChild(quizAnswerA);

        let quizAnswerB = document.createElement("button");
        quizAnswerB.innerText = "B: " + arrayAnswersThird[1];
        quizAnswerB.classList.add("quiz__answer");
        div1.appendChild(quizAnswerB);

        let quizAnswerC = document.createElement("button");
        quizAnswerC.innerText = "C: " + arrayAnswersThird[2];
        quizAnswerC.classList.add("quiz__answer");
        div1.appendChild(quizAnswerC);

        let quizAnswerD = document.createElement("button");
        quizAnswerD.innerText = "D: " + arrayAnswersThird[3];
        quizAnswerD.classList.add("quiz__answer");
        div1.appendChild(quizAnswerD);
    }

    if (quizQuestion.innerText === arrayQuestions[3]) {
        //create answers
        let quizAnswerA = document.createElement("button");
        quizAnswerA.innerText = "A: " + arrayAnswersFourth[0];
        quizAnswerA.classList.add("quiz__answer");
        div1.appendChild(quizAnswerA);

        let quizAnswerB = document.createElement("button");
        quizAnswerB.innerText = "B: " + arrayAnswersFourth[1];
        quizAnswerB.classList.add("quiz__answer");
        div1.appendChild(quizAnswerB);

        let quizAnswerC = document.createElement("button");
        quizAnswerC.innerText = "C: " + arrayAnswersFourth[2];
        quizAnswerC.classList.add("quiz__answer");
        div1.appendChild(quizAnswerC);

        let quizAnswerD = document.createElement("button");
        quizAnswerD.innerText = "D: " + arrayAnswersFourth[3];
        quizAnswerD.classList.add("quiz__answer");
        div1.appendChild(quizAnswerD);
    }
})


// functions for random sort
arrayQuestionsRandom = (randomQuestion) => {

    randomQuestion = arrayQuestions.sort(() => Math.random() - 0.5)
    return randomQuestion
}

arrayAnswersRandom = (randomAnswer) => {
    randomAnswer = arrayAnswersFirst.sort(() => Math.random() - 0.5)
    randomAnswer = arrayAnswersSecond.sort(() => Math.random() - 0.5)
    randomAnswer = arrayAnswersThird.sort(() => Math.random() - 0.5)
    randomAnswer = arrayAnswersFourth.sort(() => Math.random() - 0.5)
    return randomAnswer
}


console.log(arrayAnswersRandom(arrayQuestions))
console.log(arrayQuestionsRandom(arrayAnswersFirst))
// console.log(arrayAnswersFirst)
// console.log(arrayAnswersSecond)
// console.log(arrayAnswersThird)
// console.log(arrayAnswersFourth)














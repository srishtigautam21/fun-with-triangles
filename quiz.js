var quizForm=document.querySelector(".quiz-form");
var quizbtn=document.querySelector("#submit-answer-button");
var outpute1=document.querySelector(".output");

const correctAnswer=["90°","right angled","one right angle","Equilateral triangle","12, 16, 20"];

function calculateScore()
{
    let score=0;
    let index=0;
    const formResult = new FormData(quizForm);
    for(let value of formResult.values())
    {
        if(value===correctAnswer[index]){
            score=score+1;
        }
        index=index+1;
    }
    outpute1.innerText = "Your Score is " + score;
}

quizbtn.addEventListener("click",calculateScore);
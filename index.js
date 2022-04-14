// This is array of objects
const questions = [
    {
        'question':'What is full form of HTML?',
        'a':'HyperText Modify Language',
        'b':'HyperText Manipulate Language',
        'c':'HyperText Markup Language',
        'd': 'HyperText Mobile Language',
        'correct':'c'
    },
    {
        'question':'What is full form of CSS?',
        'a':'Cascade Small Sheet',
        'b':'Cascade Style Sheet',
        'c':'Cascade Store Sheet',
        'd': 'Cascade Secure Sheet',
        'correct':'b'
    },
    {
        'question':'What is the right way of make text Italic?',
        'a':'<u>',
        'b':'<p>',
        'c':'<i>',
        'd': '<h1>',
        'correct':'c'
    },
    {
        'question':'What does box-shizing="border-box" in CSS?',
        'a':'Reduce webpage loading',
        'b':'Reduce Width of the element',
        'c':'Reduce height of the element',
        'd': 'Include padding and border of the element',
        'correct':'d'
    }
]

let score=0,index=0;
let totalQuestion=questions.length;

const setQuestion = document.querySelector("#qbox");
const op1 = document.querySelector("#first");
const op2 = document.querySelector("#second");
const op3 = document.querySelector("#third");
const op4 = document.querySelector("#fourth");
const allRadios = document.querySelectorAll(".options");
function loadQuestion()
{
    if(index===totalQuestion)
    {
       endquiz();
    }
    reset();
    const data = questions[index];
    setQuestion.innerText = data.question;
    op1.innerText = data.a;
    op2.innerText = data.b;
    op3.innerText = data.c;
    op4.innerText = data.d;
}


function checkAnswer()
{
    const data = questions[index];
    const answer = getAnswer()
    console.log(answer);
    if(answer === data.correct)
    {
        score++;
    }
    index++;
    console.log(index,score);
    loadQuestion();
    return;
}

function getAnswer()
{
    let checkValue;
    allRadios.forEach(
        (current) => {
            if(current.checked)
            {
                checkValue = current.value;
            }
        }
    )
    return checkValue;
}

function reset()
{
    allRadios.forEach((current) => {
        current.checked = false;
    })
}

function endquiz()
{
    document.querySelector(".btn").style.display = "none";
    document.querySelector("#question-container").innerHTML = `
    <h2>Your Score is : ${score}</h2>
    `;
}

loadQuestion();
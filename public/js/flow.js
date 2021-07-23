var buttons = document.querySelector(".buttons");
var header = document.querySelector("h3");
var image = document.querySelector("img");
var hof = document.querySelector("#hof");
var startButton = document.querySelector("#start");
var bubbles = document.querySelector("#answerBubbles");
var answerOne = document.querySelector("#answerOne");
var answerTwo = document.querySelector("#answerTwo");
var answerThree = document.querySelector("#answerThree");
var answerFour = document.querySelector("#answerFour");

bubbles.style.display = "none";

questionNumber = 1;

var timer = document.querySelector("#countdownSpan");
var timerText = 40;
var countdown;
var score = 0;

startButton.addEventListener("click", function () {
    myTimer();
    questionOne();
})

function myTimer() {
    countdown = setInterval(function () {
        timerText--;
        timer.textContent = "Time Left: " + timerText;
        //this is if you run out the clock 
        if (timerText <= 0) {
            clearInterval(countdown);
            // timer.textContent = "TIME IS UP!";
            gameOver(timerText);


        }

    }, 1000)
}


function questionOne() {
    startButton.style.display = "none";
    hof.style.display="none";
    bubbles.style.display = "block";
    header.innerHTML = "<h3>What is your current salary range?</h3>";
    image.src = "images/dalmation.jpg";

    answerOne.innerHTML = "<b>25,000 - 35,000</b>";

    answerOne.addEventListener("click", function () {
        correct();
    });

    answerTwo.innerHTML = "<b>36,000 - 46,000</b>";

    answerTwo.addEventListener("click", function () {
        incorrect();
    });

    answerThree.innerHTML = "<b>47,000 - 57,000</b>";

    answerThree.addEventListener("click", function () {
        incorrect();
    });

    answerFour.innerHTML = "<b>58,000 - 68,000</b>";

    answerFour.addEventListener("click", function () {
        incorrect();
    });
}

function questionTwo() {
    startButton.style.display = "none";
    bubbles.style.display = "block";
    header.innerHTML = "<h3>What breed of dog is this?</h3>";
    image.src = "images/gshort.jpg";

    answerOne.innerHTML = "<b>English Pointer</b>";

    answerOne.addEventListener("click", function () {
        incorrect();
    });

    answerTwo.innerHTML = "<b>German Shepherd</b>";

    answerTwo.addEventListener("click", function () {
        incorrect();
    });

    answerThree.innerHTML = "<b>German Shorthair Pointer</b>";

    answerThree.addEventListener("click", function () {
        correct();
    });

    answerFour.innerHTML = "<b>Polka Dot</b>";

    answerFour.addEventListener("click", function () {
        incorrect();
    });
}

function questionThree() {
    startButton.style.display = "none";
    bubbles.style.display = "block";
    header.innerHTML = "<h3>What breed of dog is this?</h3>";
    image.src = "images/ausshep.jpg";

    answerOne.innerHTML = "<b>Ausiedoodle</b>";

    answerOne.addEventListener("click", function () {
        incorrect();
    });

    answerTwo.innerHTML = "<b>Australian Shepherd</b>";

    answerTwo.addEventListener("click", function () {
        gameOver(timerText + 20);
    });

    answerThree.innerHTML = "<b>English Setter</b>";

    answerThree.addEventListener("click", function () {
        incorrect();
    });

    answerFour.innerHTML = "<b>Polka Dot</b>";

    answerFour.addEventListener("click", function () {
        incorrect();
    });
}


function correct() {
    questionNumber++;
    nextQuestion();
}

function nextQuestion() {
    if (questionNumber === 2) {
        questionTwo();
    };
    if (questionNumber === 3) {
        questionThree();
    }
}
function incorrect() {
    if (timerText <= 10) {
        time = 0;
    } else {
        timerText -= 10;
    }
    questionNumber++;
    nextQuestion();

}

//Game Over
function gameOver(timerText) {
    timer.style.display = "none";
    clearInterval(countdown);
    score = timerText;
    console.log(score);
    // alert("Quiz Over! Your score is " + score + "!");

    var inputEl = document.createElement("input");
    inputEl.setAttribute("id", "initialInput");
    inputEl.setAttribute("type", "text");
    console.log(inputEl);

    var buttonEl = document.createElement("button");
    buttonEl.setAttribute("id", "submitScore");
    buttonEl.innerHTML = "Submit your initials";
    console.log("This is the button element for submit button",buttonEl);



    var initials = document.getElementById("enterScore");
    initials.appendChild(inputEl);
    initials.appendChild(buttonEl);


    document.getElementById("submitScore").addEventListener("click", function () {
    var initialsText = document.getElementById("initialInput").value;
        localStorage.setItem("HOF", initialsText);
        localStorage.setItem("score", score);
        console.log(initialsText);
        console.log(score);
        hofRedirect();
    }
    )

}

function hofRedirect() {
    window.location.replace("https://markkimeyer.github.io/codeQUIZ/highScore.html");
    return false;
}
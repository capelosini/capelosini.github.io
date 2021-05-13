const Display = document.getElementById("Display");
const Answer = document.getElementById("Answer");
const gameResult = document.getElementById("gameResult");
const Points = document.getElementById("Points");
const maxLenght = 199;
const numPoints = 25;
var n1 = 0;
var n2 = 0;
var points = 0;

function game(){
    gameResult.innerText = "";
    Answer.value = null;
    Points.innerText = "Points: " + points;
    Answer.focus();
    n1 = Math.floor(Math.random() * maxLenght);
    n2 = Math.floor(Math.random() * maxLenght);
    Display.innerText = n1 + " + "+ n2;
};

function submit(){
    result=n1+n2;
    if (result == Answer.value){
        gameResult.innerText = "Correct!";
        gameResult.style.color = "hsl(120, 100%, 60%)";
        points = points+numPoints;
        setTimeout(() => { game(); }, 2000);
    }
    else{
        gameResult.innerText = "Incorrect!     Result: " + result;
        gameResult.style.color = "hsl(0, 100%, 61%)";
        points=0
        setTimeout(() => { game(); }, 2000);
    };
};

addEventListener("keypress", (key) => {
    if (key.key == "Enter"){
        submit();
    };
});

game();
const Display = document.getElementById("Display");
const Answer = document.getElementById("Answer");
const gameResult = document.getElementById("gameResult");
const maxLenght = 100;

function game(){
    gameResult.innerText = "";
    Answer.value = null;
    Answer.focus();
    var n1 = Math.floor(Math.random() * maxLenght);
    var n2 = Math.floor(Math.random() * maxLenght);
    function submit(){
        result=n1+n2;
        if (result == Answer.value){
            gameResult.innerText = "Correct!";
            gameResult.style.color = "green";
            setTimeout(() => { game(); }, 2000);
        }
        else{
            gameResult.innerText = "Incorrect!     Result: " + result;
            gameResult.style.color = "red";
            setTimeout(() => { game(); }, 2000);
        };
    };
    Display.innerText = n1 + " + "+ n2;
    Answer.addEventListener("keypress", (key) => {
        if (key.key == "Enter"){
            submit();
        };
    });
};

game();
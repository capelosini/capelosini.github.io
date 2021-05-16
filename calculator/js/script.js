const calculator = document.getElementById("calculator");
const display = document.getElementById("display");
const calcBody = document.getElementById("calcBody");
const inputs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var buttonName = "";
var calc = "";
var fontSize = 40;

function reload(text){
    display.style.fontSize = fontSize + "px";
    if (text.length >= 12){
        var size = fontSize - text.length;
        display.style.fontSize = size + "px";
        display.value = text;
    }
    display.value = text;
};

function result(){
    return eval(calc);
};

calculator.addEventListener("click", (event) => {
    if (event.target.nodeName == "BUTTON"){
        buttonName = event.target.innerText;
        if (buttonName == "⚈️"){
            calc=calc+".";
            reload(calc);
        }
        else if (buttonName == "="){
            calc=result();
            reload(calc);
        }
        else if (buttonName == "C"){
            calc="";
            reload(calc);
        }
        else if (buttonName == "÷"){
            calc=calc+"/"
            reload(calc);
        }
        else if(buttonName == "x"){
            calc=calc+"*"
            reload(calc);
        }
        else{
            calc=calc+buttonName;
            reload(calc);
        }
    };
});

addEventListener("keypress", (key) => {
    if (key.key == "d"){
        try{
            calc=calc.substr(0, calc.length - 1);
            reload(calc);
        }
        finally{
            console.log("Try clean first");
        }
    }
    else if (key.key in inputs){
        calc=calc+key.key
        reload(calc);
    }
    else if (key.key == "."){
        calc=calc+key.key
        reload(calc);
    }
    else if (key.key == "+"){
        calc=calc+key.key
        reload(calc);
    }
    else if (key.key == "-"){
        calc=calc+key.key
        reload(calc);
    }
    else if (key.key == "*"){
        calc=calc+key.key
        reload(calc);
    }
    else if (key.key == "/"){
        calc=calc+key.key
        reload(calc);
    }
    else if (key.key == "Enter"){
        calc=result();
        reload(calc);
    }
    else if (key.key == "c"){
        calc="";
        reload(calc);
    }
});

addEventListener("dblclick", () => {
    calculator.style.left = event.pageX + "px";
    calculator.style.top = event.pageY + "px";
});

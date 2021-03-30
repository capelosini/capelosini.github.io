var code2 = "";

addEventListener("keyup", refresh)

function refresh(){
    var code = document.getElementById('code').value;
    if (code2 == code){
        console.log("Nothing to change");
    }
    else{
        code2 = code;
        document.getElementById("responsive-page").innerHTML = code;
        console.log(code)
    }
}
  

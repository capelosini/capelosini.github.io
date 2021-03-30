var code2 = "";

function check() {
    refresh();
}

var codeeditor = document.getElementById("code");
addEventListener("keyup", check)

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
  

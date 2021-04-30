const imgRocket = document.getElementById("rocket");
const htmlCode = document.getElementById("code-html");
const cssCode = document.getElementById("code-css");
const jsCode = document.getElementById("code-js");
const responsePage = document.getElementById("responsive-page");

addEventListener("keyup", refresh)

addEventListener("scroll", () => {
    var s = window.scrollY;
    var rh = responsePage.scrollHeight;
    if (rh <= window.outerHeight){
        responsePage.style.paddingTop = s + "px";
    }
    else{
        responsePage.style.paddingTop = "0px";
    }
})

imgRocket.addEventListener("click", download)

htmlCode.addEventListener("keydown", (key) => {
    if (key.key == "Tab"){
        var cp = htmlCode.selectionStart;
        htmlCode.value = htmlCode.value.substring(0, cp) + "    " + htmlCode.value.substring(cp, htmlCode.lenght);
        setTimeout(() => { htmlCode.focus(); }, 50);
        htmlCode.selectionStart = cp + 4;
        htmlCode.selectionEnd = cp + 4;
    }
});

cssCode.addEventListener("keydown", (key) => {
    if (key.key == "Tab"){
        var cp = cssCode.selectionStart;
        cssCode.value = cssCode.value.substring(0, cp) + "    " + cssCode.value.substring(cp, cssCode.lenght);
        setTimeout(() => { cssCode.focus(); }, 50);
        cssCode.selectionStart = cp + 4;
        cssCode.selectionEnd = cp + 4;
    }
});

jsCode.addEventListener("keydown", (key) => {
    if (key.key == "Tab"){
        var cp = jsCode.selectionStart;
        jsCode.value = jsCode.value.substring(0, cp) + "    " + jsCode.value.substring(cp, jsCode.lenght);
        setTimeout(() => { jsCode.focus(); }, 50);
        jsCode.selectionStart = cp + 4;
        jsCode.selectionEnd = cp + 4;
    }
});

function refresh(){
    var code = ("<script>" + jsCode.value + "</script>" + htmlCode.value + " " + "<style>" + cssCode.value + "</style>");
    document.getElementById("responsive-page").innerHTML = code;
    return (code);
}

function download(){
    var newWindow = window.open('', '', 'left=0,top=0,width=1000,height=700,toolbar=0,scrollbars=0,status=0,resizable=yes');
    var htmlCode = refresh();
    newWindow.document.write(htmlCode);
    newWindow.focus();
    console.log("<html>" + htmlCode + "</html>");
}
  

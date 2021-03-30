addEventListener("keyup", refresh)

function refresh(){
    var codeHtml = document.getElementById('code-html').value;
    var codeCss = document.getElementById('code-css').value;
    var codeJs = document.getElementById('code-js').value;
    var code = ("<script>" + codeJs + "</script>" + codeHtml + " " + "<style>" + codeCss + "</style>")
    document.getElementById("responsive-page").innerHTML = code;
    console.log(code)
    return (code + " " + "<title>index</title>")
}

function download(){
    document.writeln(refresh())
}
  

addEventListener("keyup", refresh)

function refresh(){
    var codeHtml = document.getElementById('code-html').value;
    var codeCss = document.getElementById('code-css').value;
    var codeJs = document.getElementById('code-js').value;
    var code = ("<script>" + codeJs + "</script>" + codeHtml + " " + "<style>" + codeCss + "</style>");
    document.getElementById("responsive-page").innerHTML = code;
    return (code)
}

function download(){
    var newWindow = window.open('', '', 'left=0,top=0,width=1000,height=700,toolbar=0,scrollbars=0,status=0');
    newWindow.document.write(refresh());
    newWindow.focus();
}
  

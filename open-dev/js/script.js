var htmlCode = document.getElementById("code-html");
var cssCode = document.getElementById("code-css");
var jsCode = document.getElementById("code-js");
var di = document.getElementById("DisplayI")
var editor;
var editor2;
const responsePage = document.getElementById("responsive-page");
const imgRocket = document.getElementById("rocket");
const buttonBaseHtml = document.getElementById("basehtml")

cssCode.style.zIndex = "-1"
jsCode.style.zIndex = "-1"

$(".sbtn").click(() => {
    $(".sbtn").removeClass("btn-primary")
    $(".sbtn").addClass("btn-outline-primary")
    event.target.className = "sbtn btn btn-primary"
    $(".editor").css({zIndex: "-1"})
    $("#code-"+event.target.title).css({zIndex: "0"})
})

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


require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' }});
window.MonacoEnvironment = { getWorkerUrl: () => proxy };

let proxy = URL.createObjectURL(new Blob([`
    self.MonacoEnvironment = {
        baseUrl: 'https://unpkg.com/monaco-editor@latest/min/'
    };
    importScripts('https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js');
`], { type: 'text/javascript' }));

require(["vs/editor/editor.main"], function () {
    htmlCode = monaco.editor.create(document.getElementById('code-html'), {
        value: [].join('\n'),
        language: 'html',
        theme: 'vs-dark'
    });
    cssCode = monaco.editor.create(document.getElementById('code-css'), {
        value: [].join('\n'),
        language: 'css',
        theme: 'vs-dark'
    });
    jsCode = monaco.editor.create(document.getElementById('code-js'), {
        value: [].join('\n'),
        language: 'javascript',
        theme: 'vs-dark'
    });
    function refresh(){
        var code = (htmlCode.getValue() + " <style scoped'>" + cssCode.getValue() + "</style> " + "<script>" + jsCode.getValue() + "</script>");
        var newBlob = new Blob([code], {type: "text/html"})
        var newUrl = URL.createObjectURL(newBlob)
        di.src = newUrl
        URL.revokeObjectURL(newUrl)
        return (code);
    }
    function download(){
        var newWindow = window.open('', '', 'left=0,top=0,width=1000,height=700,toolbar=0,scrollbars=0,status=0,resizable=yes');
        var htmlCode = refresh();
        newWindow.document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">' + htmlCode + '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>');
        newWindow.focus();
        console.log("<html>" + htmlCode + "</html>");
    }
    addEventListener("keyup", refresh)
    addEventListener("click", refresh)
    imgRocket.addEventListener("click", download)
    buttonBaseHtml.addEventListener("click", () => { htmlCode.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
      
</body>
</html>`) })
});

  

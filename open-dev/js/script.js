var htmlCode = document.getElementById("code-html");
var cssCode = document.getElementById("code-css");
var jsCode = document.getElementById("code-js");
var di = document.getElementById("DisplayI")
var editor;
var editor2;
var saves = 0
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
        var code = ('<!-- Created with capelosini.github.io/open-dev -->\n\n<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">\n'+ htmlCode.getValue() + "\n<style>\n" + cssCode.getValue() + "\n</style>\n" + '<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>\n<script>\n' + jsCode.getValue() + "\n</script>");
        var newBlob = new Blob([code], {type: "text/html"})
        var newUrl = URL.createObjectURL(newBlob)
        di.src = newUrl
        URL.revokeObjectURL(newUrl)
        return (code);
    }
    function download(){
        var htmlCode = refresh();
        var blob = new Blob([htmlCode], {type: "text"})
        var urlNow = URL.createObjectURL(blob)
        var newa = document.createElement("a")
        newa.href=urlNow
        newa.target = "_blank"
        newa.download="index.html"
        newa.id = "downloadA"
        document.body.appendChild(newa)
        document.querySelector("#downloadA").click()
        document.querySelector("#downloadA").remove()
        URL.revokeObjectURL(urlNow)
        
        var demoWindow=window.open("", "Demo", "width=700,height=700")
        demoWindow.document.write(htmlCode)
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
    <title>Template</title>
</head>
<body>
    
</body>
</html>`) })
});

  

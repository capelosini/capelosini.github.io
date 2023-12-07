var htmlCode = document.getElementById("code-html");
var cssCode = document.getElementById("code-css");
var jsCode = document.getElementById("code-js");
var di = document.getElementById("DisplayI")
const responsePage = document.getElementById("responsive-page");
const imgRocket = document.getElementById("rocket");
const buttonBaseHtml = document.getElementById("basehtml")
const updateDelay=1000

// frameworks
let bootstrap=["", "", ""]
let jquery=""
let picoCss=""
let tailwind=""

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

    addEventListener("resize", () => {
        htmlCode.layout();
        cssCode.layout();
        jsCode.layout();
    })

    function refresh(e=undefined){
        var code = ('<!-- Created with capelosini.github.io/open-dev -->\n'+ picoCss + bootstrap[0] + bootstrap[2] + bootstrap[1] + tailwind + htmlCode.getValue() + "\n<style>\n" + cssCode.getValue() + "\n</style>\n" + jquery + '<script>\n' + jsCode.getValue() + "\n</script>");
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

    setInterval(() => {
        refresh()
    }, updateDelay)

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

function handleConfigChange(){
    bootstrap=["", "", ""]
    jquery=""
    picoCss=""
    tailwind=""
    if ($("#bootstrapVersion").val() != "none"){
        bootstrap[0]='<link href="https://cdn.jsdelivr.net/npm/bootstrap@'+ $("#bootstrapVersion").val() +'/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">\n'
        bootstrap[1]='<script src="https://cdn.jsdelivr.net/npm/bootstrap@'+ $("#bootstrapVersion").val() +'/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>\n'
        bootstrap[2]='<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@latest/font/bootstrap-icons.min.css">\n'
    }
    if ($("#jqueryVersion").val() != "none"){
        jquery='<script src="https://cdn.jsdelivr.net/npm/jquery@'+ $("#jqueryVersion").val() +'/dist/jquery.min.js" crossorigin="anonymous"></script>\n'
    }
    if ($("#picoCssVersion").val() != "none"){
        picoCss='<link href=" https://cdn.jsdelivr.net/npm/@picocss/pico@'+ $("#picoCssVersion").val() +'/css/pico.min.css" rel="stylesheet">\n'
    }
    if ($("#tailwindVersion").val() != "none"){
        tailwind='<script src="https://cdn.tailwindcss.com"></script>\n'
    }
}
$(".config-select").on("change", handleConfigChange)

function getVersions(user, repo){
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", "https://data.jsdelivr.com/v1/packages/gh/"+user+"/"+repo, false)
    xmlHttp.send(null)
    return JSON.parse(xmlHttp.responseText).versions
}
var bootstrapVersions = getVersions("twbs", "bootstrap")
var jqueryVersions = getVersions("jquery", "jquery")
var picoCssVersions = getVersions("picocss", "pico")

bootstrapVersions.forEach(e => {
    $("#bootstrapVersion").append('<option value="'+e.version+'">'+e.version+"</option>\n")
})

jqueryVersions.forEach(e => {
    $("#jqueryVersion").append('<option value="'+e.version+'">'+e.version+"</option>\n")
})

picoCssVersions.forEach(e => {
    $("#picoCssVersion").append('<option value="'+e.version+'">'+e.version+"</option>\n")
})

// var list=""
// document.querySelectorAll(".version-dropdown_wrapper_list_item").forEach(e => {
//   list+='<option value="'+e.innerText+'">'+e.innerText+"</option>\n"
// })

// console.log(list)  

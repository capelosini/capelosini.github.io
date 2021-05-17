var htmlCode = document.getElementById("code-html");
var cssCode = document.getElementById("code-css");
var jsCode = document.getElementById("code-js");
var editor;
var editor2;
const responsePage = document.getElementById("responsive-page");
const imgRocket = document.getElementById("rocket");


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
        var code = (htmlCode.getValue() + " " + "<style>" + cssCode.getValue() + "</style>" + " " + "<script>" + jsCode.getValue() + "</script>");
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
    addEventListener("keyup", refresh)
    imgRocket.addEventListener("click", download)
});


  

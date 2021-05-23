window.addEventListener("scroll", function(){
    var value = window.scrollY;
    var title = document.getElementById("title-my-projects");
    if (value <= 600){
        title.style.paddingLeft = (value + "px");
    }
});

function scrollDown(){
    var title = document.getElementById("title-my-projects");
    var atualScroll = window.scrollY;
    if (atualScroll == 0){
        window.scroll(0, 526);
    }
}

function openDev(){
    window.location.href = "https://capelosini.github.io/open-dev/";
}

function math(){
    window.location.href = "https://capelosini.github.io/math/";
}

function calculator(){
    window.location.href = "https://capelosini.github.io/calculator/";
}

function musicsword(){
    window.location.href = "https://capelosini.github.io/musicsword/";
}
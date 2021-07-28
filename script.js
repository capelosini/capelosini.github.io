window.addEventListener("scroll", function(){
    var value = window.scrollY;
    var title = document.getElementById("title-my-projects");
    if (value <= window.innerWidth / 2 - title.innerText.length * 6){
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

function redirect(url){
    window.location.href = url
}
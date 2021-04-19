window.addEventListener("scroll", function(){
    var value = window.scrollY;
    var title = document.getElementById("title-my-projects");
    if (value <= 300){
        title.style.paddingLeft = (value + "px");
    }
});

function openDev(){
    window.location.href = "https://capelosini.github.io/open-dev/";
}
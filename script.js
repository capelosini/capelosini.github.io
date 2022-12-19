// The dev said welcome!

AOS.init();

window.addEventListener("scroll", function(){
    var value = window.scrollY;
    var title = document.getElementById("title-my-projects");
    if (value <= window.innerWidth / 2 - title.innerText.length * 6){
        title.style.paddingLeft = (value + "px");
    }
});

// Animation for title
setInterval(() => {
    if ($(".welcome").text() == "Welcome to my GitHub!"){
        $(".welcome").text("Welcome to my GitHub! _")
    } else{
        $(".welcome").text("Welcome to my GitHub!")
    }
}, 700)
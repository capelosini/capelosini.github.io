///////
// Hello there!
//////


AOS.init();

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    let title = document.getElementById("title-my-projects");
    if (value <= window.innerWidth / 2 - title.innerText.length * 6){
        title.style.paddingLeft = (value + "px");
    }

    if (value < this.innerHeight){
        // "rotate("+value/3+"deg) " + 
        $(".mainImage").css({"transform": "translateY("+value/2+"px) " + "translateX("+value/4+"px"})
        $(".welcome").css({"transform": "translateY("+value/2+"px) " + "translateX("+value/3+"px"})
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
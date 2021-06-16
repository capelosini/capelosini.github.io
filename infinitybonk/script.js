const bonk = document.getElementById("bonk");
const fps = 0;
const xVelocity = 1;
const yVelocity = 1;
const rotationSpeed = 1;
var sizeRange = document.getElementById("sizeRange")
var x = 1;
var y = 50;
var dx = 1;
var dy = 1;
var bonkSize = 70;
var bonkRotation = 0;

function update(){
    
    // COLISION

    if(x <= 0 || x >= window.innerWidth - bonkSize){
        if(dx == -1){
            dx = 1
        } else{
            dx = -1
        }
    } if(y <= 0 || y >= window.innerHeight - bonkSize){
        if(dy == 1){
            dy = -1
        } else{
            dy = 1
        }
    }

    // UPDATE LOCAL

    if(dx == 1){
        x = x + xVelocity
    } if(dy == 1){
        y = y + yVelocity
    } if(dx == -1){
        x = x - xVelocity
    } if(dy == -1){
        y = y - yVelocity
    }

    // UPDATE ROTATION

    if(dx == 1){
        bonkRotation = bonkRotation + rotationSpeed
    } else{
        bonkRotation = bonkRotation - rotationSpeed
    }

    bonk.style.transform = "rotate(" + bonkRotation + "deg)"
    bonk.style.top = y + "px"
    bonk.style.left = x + "px"
}



// FRAMES UPDATE

setInterval(() =>{
    update()
}, fps);


// BONK EVENT

addEventListener("click", () => {
    x=event.pageX
    y=event.pageY
})

// SKINS BUTTONS

document.getElementById("changeSkin").addEventListener("click", () => {
    var skinUrl = prompt("Skin URL")
    if(skinUrl == undefined || skinUrl == null || skinUrl == ""){
        alert("Please Put A Valid URL")
    } else{
        bonk.src = skinUrl;
    }
})

document.getElementById("changeBackgroundSkin").addEventListener("click", () => {
    var skinUrl = prompt("Skin URL")
    if(skinUrl == undefined || skinUrl == null || skinUrl == ""){
        alert("Please Put A Valid URL")
    } else{
        document.body.style.backgroundImage = "url(" + skinUrl + ")";
        document.body.style.backgroundSize = "cover"
    }
})

// SIZE RANGE

setInterval(() => {
    bonkSize = sizeRange.value * 2
    bonk.style.width = bonkSize + "px"
    bonk.style.height = bonkSize + "px"
}, 50)

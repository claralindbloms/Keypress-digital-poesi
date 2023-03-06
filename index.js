

document.querySelector("body").addEventListener("keypress", keypress);
function keypress(event){
    if(event.key == "a"){

        let astronaut = document.querySelector(".astronaut-invisible");
        astronaut.style.transition = 'all 0.5s linear 0s';
        astronaut.style.opacity = 100;
    }
}
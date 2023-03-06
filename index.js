

document.querySelector("body").addEventListener("keyup", keyup);
function keyup(event, letter){
    if(event.key == "Enter"){

        document.querySelector("body").innerHTML = `<p>test</p>`;
    }
}
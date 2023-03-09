

document.querySelector("body").addEventListener("keypress", keypress);
function keypress(event) {

    if (event.key) {
        var styleSheetssy = document.getElementsByTagName("link");
        console.log(styleSheetssy);

        let specificSheet = event.key + ".css";

        getStyleSheet(specificSheet);
    }
}

function getStyleSheet(key) {
    var styleSheetss = document.getElementsByTagName("link");
    for (var i = 0; i < styleSheetss.length; i++) {
        if (styleSheetss[i].attributes[1].nodeValue.includes(key)) {
            console.log(key);
            if (styleSheetss[i].attributes[1].nodeValue == key) {
                styleSheetss[i].disabled = false;
                
                DisableAgain(i);
            }
        }

    }
}

function DisableAgain(i) {

    var styleSheetssy = document.getElementsByTagName("link");

    setTimeout(() => {
        styleSheetssy[i].setAttribute("disabled", true);
    }, 3000);

}

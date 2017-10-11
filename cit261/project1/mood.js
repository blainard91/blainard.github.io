window.onload = function() {
    var grey = document.getElementById("grey");
    var container = document.getElementById("container");
    var scanner = document.getElementById("scanner");
    var mood = document.getElementById("mood");

    container.addEventListener('touchstart', function(){
        if (grey.style.opacity > "0"){
            scanner.style.opacity = "0";
        } else {
            scanner.style.opacity = "1";
            }
    })

    container.addEventListener('touchend', function(){
            grey.style.opacity = "0.7";
            scanner.style.opacity = "0";
            mood.style.opacity = "1"
            mood.style.zIndex = "99999";
    })

    grey.addEventListener('touchstart', function(){
        if (grey.style.opacity > "0"){
            grey.style.opacity = "0";
            mood.style.opacity = "0"
            mood.style.zIndex = "9";
        }
    })
}







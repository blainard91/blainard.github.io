window.onload = function() {
    var grey = document.getElementById("grey");
    var container = document.getElementById("container");
    var scanner = document.getElementById("scanner");
    console.log(grey.style.opacity);

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
    })

    grey.addEventListener('touchstart', function(){
        if (grey.style.opacity > "0"){
            grey.style.opacity = "0";
        }
    })
}







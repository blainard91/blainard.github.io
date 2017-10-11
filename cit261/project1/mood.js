
var moods = [
    "/images/happy.gif",
    "/images/sad.gif",
    "/images/bored.gif",
    "/images/disgust.gif",
    "/images/fear.gif",
    "/images/love.gif",
    "/images/anger.gif"]


function pickMood(){
var num = Math.round(Math.random()*7);
var save = moods[num].valueOf();
    console.log(save);
var moodGif = document.getElementById("moodGif");
moodGif.setAttribute("src", save);
};

window.onload = function() {
    var grey = document.getElementById("grey");
    var container = document.getElementById("container");
    var scanner = document.getElementById("scanner");
    var mood = document.getElementById("mood");
    var body = document.getElementById("body");

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
            mood.style.zIndex = "9999";
            container.style.zIndex = "9";
            pickMood();
    })

    grey.addEventListener('touchstart', function(){
        if (grey.style.opacity > "0"){
            grey.style.opacity = "0";
            mood.style.opacity = "0"
            mood.style.zIndex = "9";
            container.style.zIndex = "999";
        }
    })
    mood.addEventListener('touchstart', function(){
        if (grey.style.opacity > "0"){
             grey.style.opacity = "0";
             mood.style.opacity = "0"
             mood.style.zIndex = "9";
             container.style.zIndex = "999";
        }
    })
}







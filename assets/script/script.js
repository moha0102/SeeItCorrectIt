var open = document.getElementById("open");
var close = document.getElementById("close")
var nav = document.getElementById("menu");

open.onclick=function(){
    close.style.display = "block";
    nav.style.display ="block";
    setTimeout(showAnimate, 0);
}

close.onclick=function(){
    nav.style.transform = "translateX(200px)";
    setTimeout(closeAnimate, 560);


}

function showAnimate() {
    nav.style.transform = "translateX(0px)";
}

function closeAnimate() {
    nav.style.display = "none";

}
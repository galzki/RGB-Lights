const rbgcolor = document.getElementById("tree");

function lights() {

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let all = "rgb(" + red + ", " + green + ", " + blue + ")";

    rbgcolor.style.color = all;
    document.getElementById("kulay").textContent = all;
}
function start() {
    colors = setInterval(lights, 300);
}

function stop() {
    clearInterval(colors);
}
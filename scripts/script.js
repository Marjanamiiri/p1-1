// play page 
const truthBtn = document.getElementById("truth")
const dareBtn  = document.getElementById("dare")
const pics     = document.getElementById("bottle-pics")
const stopBtn  = document.getElementById("done")
const question = document.getElementById("question")

const $howToPlayPopUp = $(".how-to-play-toggle")

$howToPlayPopUp.hide();
$('#help').click(function () {
    $howToPlayPopUp.slideToggle();
});
$('#continue-toggle').click(function () {
    $howToPlayPopUp.slideUp();
});
$('#backToLevel').click(function () {
    location.replace("index.html")
})
$('#goToGame').click(function () {
    location.replace("game.html")
})
let timerHandler;
let bikeHandler;
let delay   = 1;
let spining = false;
let notStarted = true;
let minImageNumber = 1;
let maxImageNumber = 8;
let minAngle = 0;
let maxAngle = 360;

truthBtn.addEventListener('click', function () {
    truthBtn.style.display = "none"
    dareBtn.style.display = "none"

    if (notStarted) {
        spining = true;
        bikeHandler = requestAnimationFrame(spinImage);
        notStarted = false;
    }
    const delay = 3000;
    setTimeout(function () {
        question.innerHTML = `<p>${truth[Math.floor(Math.random() * truth.length)]}</p>`;
        stopBtn.style.display = "inline-block"
    }, delay);

});
dareBtn.addEventListener('click', function () {
    truthBtn.style.display = "none"
    dareBtn.style.display  = "none"

    if (notStarted) {
        spining = true;
        bikeHandler = requestAnimationFrame(spinImage);
        notStarted = false;
    }
    const delay = 3000;
    setTimeout(function () {
        question.innerHTML = `<p>${dare[Math.floor(Math.random() * dare.length)]}</p>`;
        stopBtn.style.display = "inline-block"
    }, delay);

});
stopBtn.addEventListener("click", function () {
    truthBtn.style.display = "inline-block"
    dareBtn.style.display  = "inline-block"
    stopBtn.style.display  = "none"
    spining    = false;
    notStarted = true;    
    question.innerHTML = `<h3 style="color: #14141477;">Question</h3>`;

});
function spinImage() {
    pics.style.transform = `rotate(${minAngle}deg)`;
    minAngle += 3
    if (minAngle > maxAngle) {
        minAngle = 0;
    }
    timerHandler = setTimeout(function () {
        bikeHandler = requestAnimationFrame(spinImage);
    }, 10);

    const delay = 3000;
    setTimeout(function () {
        clearInterval(timerHandler);
        cancelAnimationFrame(bikeHandler);
    }, delay);

}
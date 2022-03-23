var Sounda = new Audio("sounds/tom-1.mp3");
var Sounds = new Audio("sounds/tom-2.mp3");
var Soundd = new Audio("sounds/tom-3.mp3");
var Soundf = new Audio("sounds/tom-4.mp3");
var Soundj = new Audio("sounds/snare.mp3");
var Soundk = new Audio("sounds/crash.mp3");
var Soundl = new Audio("sounds/kick-bass.mp3");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

    document.addEventListener("keypress", function(event) {
        playSound(event.key);
        buttonAnimation(event.key);


    });

    function playSound(value) {


        switch (value) {
            case "a":
                Sounda.play();
                break;
            case "s":
                Sounds.play();
                break;

            case "d":
                Soundd.play();
                break;
            case "f":
                Soundf.play();
                break;
            case "j":
                Soundj.play();
                break;
            case "k":
                Soundk.play();
                break;
            case "l":
                Soundl.play();
                break;
            case "A":
                Sounda.play();
                break;
            case "S":
                Sounds.play();
                break;

            case "D":
                Soundd.play();
                break;
            case "F":
                Soundf.play();
                break;
            case "J":
                Soundj.play();
                break;
            case "K":
                Soundk.play();
                break;
            case "L":
                Soundl.play();
                break;
            default:
                console.log(value);
        }
    }
}

function buttonAnimation(value) {
    var activeButton = document.querySelector("." + value);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 150);
}
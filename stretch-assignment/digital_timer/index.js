
/*
A timer that:
* Counts up to 10 seconds
* Increments every 10 ms
* Has digits change to red when it gets to 10 seconds
* Should not count past 10 seconds
*/
let msHundreds = 0;
let msTens = 0;
let ones = 0;
let tens = 0;

const body = document.getElementsByTagName("body")[0];
const bigContainer = document.createElement("div");
const digitsDiv = document.getElementsByClassName("digits")[0];
bigContainer.appendChild(digitsDiv);
body.appendChild(bigContainer);
const digits = document.querySelectorAll(".digit");
const msHundredsEl = document.getElementById("msHundreds");
const msTensEl = document.getElementById("msTens");
const onesEl = document.getElementById("secondOnes");
const tensEl = document.getElementById("secondTens");

function tenSecTimer() {
    
    setInterval(timeIt, 10);
    function timeIt() {
        if (tens < 1) {
            msHundreds++;
            if (msHundreds >= 10) {
                msHundreds = 0;
                msTens++;
            }
            if (msTens >= 10) {
                msTens = 0;
                ones++;
            }
            if (ones >= 10) {
                ones = 0;
                tens++;
            }
        } else {
            for(let i=0; i<digits.length; i++) {
                digits[i].classList.add("redDigit");
            }
        }  
        tensEl.textContent = tens.toString();
        onesEl.textContent = ones.toString();
        msTensEl.textContent = msTens.toString();
        msHundredsEl.textContent = msHundreds.toString();
    }     
}
//tenSecTimer();

//SG1: Implement a start button. 
//The digital timer should not start until the button is pressed.

const startButton = document.createElement("button");
startButton.textContent = "Start";
bigContainer.prepend(startButton);

//SG2: Once you have a start button working, 
//configure it so that when a user presses the start button 
//it is disabled and not enabled until the timer finishes.
startButton.onclick = function(event) {
    event.target.disabled = true;
    tenSecTimer();
    event.stopPropagation();
    body.classList.add("rotateElement");
}

/*SG3: Once you have finished SG2, add new new button called 
reset that resets the timer to 0:00:00 and then pressing the start 
button again will start the timer from 0.
*/
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
bigContainer.appendChild(resetButton);
resetButton.onclick = function() {
    msHundreds = 0;
    msTens = 0;
    ones = 0;
    tens = 0;
    tenSecTimer();
    for(let i=0; i<digits.length; i++) {
        digits[i].classList.remove("redDigit");
    }
}

/*SG4: styling your timer and buttons.
*/

//body styles
body.style.position = "relative";
body.overflow = "hidden";
body.style.height = "100vh";
body.style.fontFamily = "'Nova Mono', cursive";

//bigContainer styles
bigContainer.style.cssText = "display: flex; \
    flex-flow: column nowrap; \
    justify-content: center; \
    alignItems: center; \
    width: 40%; \
    background: rgba(0, 46, 91, 0.5); \
    padding: 1rem;\
    border-radius: 3px;";

// digits div style
digitsDiv.style.margin = "0.5rem auto";

// button styles
startButton.style.cssText = "width: 50%; \
    padding: 0.5rem; \
    margin: 0.5rem auto; \
    font-family: 'Nova Mono', cursive; \
    font-size: 1.5rem; \
    background: rgba(0, 135, 83, 0.5)";

resetButton.style.cssText = "width: 50%; \
    padding: 0.5rem; \
    margin: 0.5rem auto; \
    font-family: 'Nova Mono', cursive; \
    font-size: 1.5rem; \
    background: rgba(204, 163, 0, 0.5);";

startButton.onmouseover = function(event) {
    event.target.style.fontStyle = "italic";
    event.target.style.background = "rgba(0, 135, 83, 0.8)";
}

startButton.onmouseout = function(event) {
    event.target.style.fontStyle = "normal";
    event.target.style.background = "rgba(0, 135, 83, 0.5)";
}

resetButton.onmouseover = function(event) {
    event.target.style.fontStyle = "italic";
    event.target.style.background = "rgba(204, 163, 0, 0.8)";
}

resetButton.onmouseout = function(event) {
    event.target.style.fontStyle = "normal";
    event.target.style.background = "rgba(204, 163, 0, 0.5)";
}


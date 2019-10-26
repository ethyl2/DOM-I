
function makeTimer(elt, timeInterval) {
    let counter = 0;
    setInterval(timeIt, timeInterval); 
      
    function timeIt() {
      elt.textContent = counter;
      counter++;
    }
}

const testTimer = document.createElement("p");
const digitsDiv = document.getElementsByClassName("digits")[0];
digitsDiv.appendChild(testTimer);
//makeTimer(testTimer, 10);
/*
To make a timer that:
* Counts up to 10 seconds
* Increments every 10 ms
* Has digits change to red when it gets to 10 seconds
* Should not count past 10 seconds
*/

function tenSecTimer(elt) {
    let msHundreds = 0;
    let msTens = 0;
    let ones = 0;
    let tens = 0;
    setInterval(timeIt, 10);
    function timeIt() {
        //while (ones < 10) {
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
        //}
        elt.textContent = tens.toString() + ones.toString() + msTens.toString() + msHundreds.toString();
    }     
}
tenSecTimer(testTimer);
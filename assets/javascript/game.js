// global variable

//counters
var winCount = 0;
var lossCount = 0;
var collectorScore = 0;
var luminousScore = 0;

var cryValue = {
    diamond: {
        value: 0
    },
    cylinder: {
        value: 0
    },

    oval: {
        value: 0
    },

    prism: {
        value: 0
    }
};

// global functions

//random collector score to be reached
function collectorScoreCreate() {
    collectorScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#collectorScore").html(collectorScore);
    console.log(collectorScore);
}

//value of crystal ranomization
function crystalRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// adding values to crystals and to your score
function addvalues(cryValue) {
    luminousScore = luminousScore + cryValue.value;
    $("#luminousScore").html(luminousScore);
    winLose();
    console.log("luminous Score: " + luminousScore);
}

//game - create start game proccess
function startGame() {
    luminousScore = 0;
}

collectorScoreCreate();
cryValue.diamond.value = crystalRandom(1, 12);
cryValue.cylinder.value = crystalRandom(1, 12);
cryValue.oval.value = crystalRandom(1, 12);
cryValue.prism.value = crystalRandom(1, 12);

$("#wins").html(winCount);
$("#losses").html(lossCount);
$("#luminousScore").html(luminousScore);

console.log("diamond: " + cryValue.diamond.value + " | cylinder: " + cryValue.cylinder.value + " | oval: " + cryValue.oval.value + " | prism: " + cryValue.prism.value);


// restarts of full game after to manyl losses
function restartGame() {
    winCount = 0;
    lossCount = 0;
    luminousScore = 0;


    collectorScoreCreate();
    cryValue.diamond.value = crystalRandom(1, 12);
    cryValue.cylinder.value = crystalRandom(1, 12);
    cryValue.oval.value = crystalRandom(1, 12);
    cryValue.prism.value = crystalRandom(1, 12);

    $("#wins").html(winCount);
    $("#losses").html(lossCount);
    $("#luminousScore").html(luminousScore);
    $("#status").html("Shine on! Click a crystal to begin");

    console.log("diamond: " + cryValue.diamond.value + " | cylinder: " + cryValue.cylinder.value + " | oval: " + cryValue.oval.value + " | prism: " + cryValue.prism.value);
}

// wins and losses record to check
function winLose() {

    if (luminousScore === collectorScore) {
        winCount++;
        $("#status").text(luminousScore + " Bling! You Won! Click any crystal to begin!")
        startGame();
    } else if (luminousScore > collectorScore) {
        lossCount++;
        $("#status").text(luminousScore + "oops! To many, Click a any crystal to try again!")
        startGame();
    }
    if (lossCount === 12) {
        alert("Uh oh, too many rounds lost. Let's try again, Shine on!")
        restartGame();
    }
}

//Crystal Game Main Logic
$(document).ready(function () {

    restartGame();

    $("#diamond").on("click", function () {
        addvalues(cryValue.diamond);
    });
    $("#cylinder").on("click", function () {
        addvalues(cryValue.cylinder);
    });
    $("#oval").on("click", function () {
        addvalues(cryValue.oval);
    });
    $("#prism").on("click", function () {
        addvalues(cryValue.prism);
    });

})
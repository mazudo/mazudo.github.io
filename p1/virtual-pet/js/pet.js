let mood = 0;
let belly = 5;

function feedPet() {
    console.log("Feeding pet...");
    // belly = belly + 1;
    if (belly < 10) {
        belly += 1;
    }
    console.log("belly: " + belly);

    refreshUI();
}

function decreasePet() {
    // decrease belly value
    if (belly > 0) {
        belly -= 1;
    }
    refreshUI();
}

function refreshUI() {
    let bellyMeter = document.getElementById("belly-meter");
    bellyMeter.value = belly;

    let bellyParagraph = document.getElementById("belly-paragraph");
    bellyParagraph.innerHTML = belly;
}

let petTimer = setInterval(decreasePet, 1000);

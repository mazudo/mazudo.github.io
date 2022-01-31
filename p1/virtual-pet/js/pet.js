let mood = 5;
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

function petPet() {
    console.log("Petting pet...");
    if (mood < 10) {
        mood += 1;
    }
    console.log("mood: " + mood);

    refreshUI();
}

function decreasePet() {
    // decrease belly value
    if (belly > 0) {
        belly -= 1;
    }

    // decrease mood value
    if (mood > 0) {
        mood -= 1;
    }

    refreshUI();
}

function refreshUI() {
    // update belly meter + paragraph
    let bellyMeter = document.getElementById("belly-meter");
    bellyMeter.value = belly;
    let bellyParagraph = document.getElementById("belly-paragraph");
    bellyParagraph.innerHTML = belly;

    // update mood meter + paragraph
    let moodMeter = document.getElementById("mood-meter");
    moodMeter.value = mood;
    let moodParagraph = document.getElementById("mood-paragraph");
    moodParagraph.innerHTML = mood;

    // update pet image and paragraph
    let petImg = document.getElementById("pet-img");
    let petParagraph = document.getElementById("pet-condition");
    if (mood <= 5 && belly <= 5) {
        petImg.src = "images/psyduck.jpg";
        petParagraph.innerHTML = "You are dead to me";
    } else { // default image and state
        petImg.src = "images/eevee-happy.png"
        petParagraph.innerHTML = "Happy Eevee";
    }
}

let petTimer = setInterval(decreasePet, 1000);
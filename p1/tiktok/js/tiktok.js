// tiktok's magic algorithm
// TODO: tweak algorith
// add at least two more new parameters
function magicAlgorithm(numLikes, comment) {
    let rank = 0;

    // magic!
    if (numLikes >= 10000 && comment.includes("dog")) {
        rank = 1;
    } else if (numLikes >= 500 && comment.includes("cat")) {
        rank = 100;
    } else {
        rank = 1000;
    }
    return rank;
}

alert("Welcome to Tiktok! Imagine I'm showing you a tiktok video right now");
let likeCount = Number(prompt("How many likes did this Tiktok video get?"));
// ask for a video comment
let comment = prompt("What is the most recent comment for this video?");

// using the two inputs above
// pass that into the magic function and return the result in an alert popup
let rankResult = magicAlgorithm(likeCount, comment);
let resultString = "Based off of the magic algorithm, this video's rank is: " + rankResult;

alert(resultString);
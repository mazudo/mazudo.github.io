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

function popup() {
    alert("Welcome to Tiktok! Imagine I'm showing you a tiktok video right now");
    let likeCount = Number(prompt("How many likes did this Tiktok video get?"));
    // ask for a video comment
    let comment = prompt("What is the most recent comment for this video?");

    // using the two inputs above
    // pass that into the magic function and return the result in an alert popup
    let rankResult = magicAlgorithm(likeCount, comment);
    let resultString = "Based off of the magic algorithm, this video's rank is: " + rankResult;

    alert(resultString);
}

function showUI() {
    // grab values from text boxes
    let likeCount = Number(document.getElementById("like-textbox").value);
    let comment = document.getElementById("comment-textbox").value;
    // TODO grab your additional inputs from the html with IDs

    // do the magic
    // TODO: Pass all 4 inputs into your magic function
    let rankResult = magicAlgorithm(likeCount, comment);

    // display the output
    document.getElementById("result-paragraph").innerHTML = "Tiktok Rank: " + rankResult;

}
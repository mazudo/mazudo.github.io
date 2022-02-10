// get canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

// get paragraph items
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");

// player position and movement
let playerX = 250;
let playerY = 250;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 2;

// ball position and movement
let ballX = 100;
let ballY = 100;
let ballXDir = 3;
let ballYDir = 2;
let ballRadius = 15;

// draw player with global player x and y coords
function drawPlayer() {
    ctx.fillRect(playerX, playerY, 100, 20);
}

// move player
function movePlayer() {
    playerX += (playerSpeed * playerXDir);

    //edge check
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 500 - 100) {
        playerX = 500 - 100;
    }
}

// draw ball with global ball x and y coords
function drawBall() {
    // draw a filled circle at xBallPos and yBallPos
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    ctx.fill();
}

// move ball
function moveBall() {
    ballY += ballYDir;
    ballX += ballXDir;
}

// check for ball collisions and change directions
function checkBallCollision() {
    // check vertical wall
    if ((ballY > 500 - ballRadius) || (ballY < 0 + ballRadius)) {
        ballYDir = ballYDir * -1;
    }
    // check horizontal wall
    if ((ballX > 500 - ballRadius) || (ballX < 0 + ballRadius)) {
        ballXDir = ballXDir * -1;
    }
}

// refresh entire UI
function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    // animate ball
    checkBallCollision();
    moveBall();
    drawBall();
}



// when key is pressed
function keyPressed(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keydownOutput.innerHTML = "Key down code: " + key;

    // move player
    if (key === 37) {
        playerXDir = -1;
    } else if (key === 39) {
        playerXDir = 1;
    }
}

// when key is released
function keyReleased(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keyupOutput.innerHTML = "Key up code: " + key;

    // make player stop
    if (key === 37) {
        playerXDir = 0;
    } else if (key === 39) {
        playerXDir = 0;
    }
}

// object position
let xPosition = 0;

// rect moving horizontally
function moveHorizontal() {
    // clear screen
    // ctx.clearRect(0, 0, 500, 500);
    // draw rect at current position
    ctx.fillRect(xPosition, 0, 20, 20);

    // move the x position over by x pixels
    xPosition += 1;

    // did I hit the wall? if so wrap around
    if (xPosition >= 500) {
        xPosition = 0;
    }
}

setInterval(refreshUI, 10);
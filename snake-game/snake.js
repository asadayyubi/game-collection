const canvas = document.getElementById('snake');
const ctx = canvas.getContext('2d');
let speed = 5;

class SnakeParts {
    constructor (x , y){
        this.x = x;
        this.y = y;
    }
}

const gulpSound = new Audio("Gulp.mp3");
const gamEover = new Audio("gameoveR.mp3");

let tileCount = 20;
let tileSize = canvas.width / tileCount -2 ;
let headX = 10;
let headY = 10;
let score = 0;
// snake size tracking
const snakepartCollection = [];
let tailLength = 0;


// change position on key press
let xVelocity = 0;
let yVelocity = 0;

// food of snake
let foodX = 15;
let foodY = 10;


//gameloop
function drawGame() {
    moveSnake();
    let result=gameOver();
    if (result) {
        return;
    }
    clearScreen();
    Score();

    checkFoodCollision();

    drawFood();
    
    drawSnake();

    if(score === 3){
        speed = 7;
    }
    else if(score === 7){
        speed = 11;
    }
    else if(score === 11){
        speed = 15;
    }

    setTimeout(drawGame , 1000 / speed); 
    
}



function gameOver() {
    let gameover = false;
    
    // walls
    if (headX < 0) {
        gameover = true;
    }
    else if (headX === tileCount) {
        gameover = true;
    }
    else if (headY < 0){
        gameover = true;
    }
    else if(headY === tileCount){
        gameover = true;
    }
    
    // own body
    for (let i = 0; i < snakepartCollection.length; i++) {
        let part = snakepartCollection[i];
        if (part.x === headX && part.y === headY) {
            gameover = true;
            break;
        }
        
    }

    if (gameover) {
            ctx.fillStyle = 'white';
            ctx.font = '50px Verdana';
            ctx.fillText('Game Over', canvas.width /6 ,200 );
            gamEover.play();
        
    }
    return gameover;
}

function Score() {
    
    ctx.fillStyle = 'white';
    ctx.font = '15px Verdana'
    ctx.fillText('Score '+score ,canvas.width -75, 20 )
}

function checkFoodCollision() {

    if (foodX === headX && foodY === headY) {
        foodX = Math.floor(Math.random()*tileCount);
        foodY = Math.floor(Math.random()*tileCount);
        tailLength++;
        score++;
        gulpSound.play();
    }
    
}

function drawFood() {

    ctx.fillStyle = 'red';
    ctx.fillRect(foodX * tileCount, foodY * tileCount, tileSize , tileSize)
    
}

function moveSnake() {
    headX += xVelocity;
    headY += yVelocity;
    }

function clearScreen() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, canvas.width , canvas.height);
}

function drawSnake() {
    
    ctx.fillStyle = 'green';
    for (let i = 0; i < snakepartCollection.length; i++) {
        let part = snakepartCollection[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize , tileSize );
    }

    snakepartCollection.push(new SnakeParts(headX , headY));
    if (snakepartCollection.length > tailLength) {
        snakepartCollection.shift();
    }

    ctx.fillStyle = 'orange';
    ctx.fillRect(headX * tileCount , headY * tileCount, tileSize , tileSize);

}

document.body.addEventListener('keydown' , keyDown);

function keyDown(event) {
    if (event.key === 'ArrowUp') {
        if (yVelocity === 1)
            return;
        xVelocity = 0;
        yVelocity = -1;
        
    }

    if (event.key === 'ArrowDown') {
        if (yVelocity === -1)
            return;
        xVelocity = 0;
        yVelocity = 1;
        
    }

    if (event.key === 'ArrowLeft') {
        if (xVelocity === 1)
            return;
        xVelocity = -1;
        yVelocity = 0;
        
    }

    if (event.key === 'ArrowRight') {
        if (xVelocity === -1)
            return;
        xVelocity = 1;
        yVelocity = 0
        
    }
    
}


drawGame();
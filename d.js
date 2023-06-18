// script.js
// Get the canvas element
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Set initial drawing color and brush size
var currentColor = 'black';
var brushSize = 5;

// Set initial mouse position
var isDrawing = false;
var lastX = 0;
var lastY = 0;

// Function to draw on the canvas
function draw(e) {
    if (!isDrawing) return;

    ctx.strokeStyle = currentColor;
    ctx.lineWidth = brushSize;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Add event listeners to the canvas
canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', function() {
    isDrawing = false;
});

canvas.addEventListener('mouseout', function() {
isDrawing = false;
});

// Function to change drawing color
function changeColor(color) {
currentColor = color;
}

// Function to change brush size
function changeBrushSize(size) {
brushSize = size;
}

// Function to clear the canvas
function clearCanvas() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
}
// Function to change brush size
function changeBrushSize(size) {
brushSize = size;
}

// Function to clear the canvas
function clearCanvas() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to resize the canvas to fit the screen
function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

// Add event listener to window resize event
window.addEventListener('resize', resizeCanvas);

// Call the resizeCanvas function initially
resizeCanvas();

// Add event listeners to color buttons
document.getElementById('color-red').addEventListener('click', function() {
changeColor('red');
});
document.getElementById('color-blue').addEventListener('click', function() {
changeColor('blue');
});

document.getElementById('color-green').addEventListener('click', function() {
changeColor('green');
});

document.getElementById('color-white').addEventListener('click', function() {
changeColor('#fff');
});

document.getElementById('color-black').addEventListener('click', function() {
changeColor('black');
});

// Add event listeners to brush size buttons
document.getElementById('brush-small').addEventListener('click', function() {
changeBrushSize(3);
});
document.getElementById('brush-medium').addEventListener('click', function() {
changeBrushSize(5);
});

document.getElementById('brush-large').addEventListener('click', function() {
changeBrushSize(10);
});

// Add event listener to eraser button
document.getElementById('eraser').addEventListener('click', function() {
changeColor('#fff');
changeBrushSize(brushSize);
});

// Add event listener to reset button
document.getElementById('clear').addEventListener('click', function() {
clearCanvas();
changeColor('black');
changeBrushSize(5);
});

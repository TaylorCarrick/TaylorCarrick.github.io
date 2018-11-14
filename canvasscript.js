window.onload = function init() {
           
    var canvas = document.getElementById('myCanvas'); 
            var ctx = canvas.getContext('2d');

            ctx.fillStyle = 'red';
            // x y width height
            ctx.fillRect(450,450,100,100);
            //x y radius startangle endangle anticlockwise
            //ctx.arc(300,300,50,0,2 * Math.PI, false);
            //have to fill
            ctx.fillStyle = 'blue';
            ctx.fill();

xoffset = 0;
yoffset = 450;
    
      ctx.beginPath();
            ctx.moveTo(100+xoffset, 100+yoffset);
            ctx.lineTo(200+xoffset, 50+yoffset);
            ctx.lineTo(100+xoffset, 0+yoffset);
            ctx.fill();
    
xoffset = 750;
yoffset = 450;
    
      ctx.beginPath();
    ctx.fillStyle = 'yellow';
            ctx.moveTo(100+xoffset, 100+yoffset);
            ctx.lineTo(200+xoffset, 50+yoffset);
            ctx.lineTo(100+xoffset, 0+yoffset);
            ctx.fill();
    
xoffset = 350;
yoffset = 50;
    
      ctx.beginPath();
    ctx.fillStyle = 'green';
            ctx.moveTo(100+xoffset, 100+yoffset);
            ctx.lineTo(200+xoffset, 50+yoffset);
            ctx.lineTo(100+xoffset, 0+yoffset);
            ctx.fill();
    
    xoffset = 350;
    yoffset = 750;
    
      ctx.beginPath();
    ctx.fillStyle = 'pink';
            ctx.moveTo(100+xoffset, 100+yoffset);
            ctx.lineTo(200+xoffset, 50+yoffset);
            ctx.lineTo(100+xoffset, 0+yoffset);
            ctx.fill();
    
    
    ctx.fillStyle = 'black';
    ctx.font = '48px serif';
    ctx.fillText('Score:', 00, 100);
    ctx.fillText(score, 150, 100);
    ctx.fillText('Time:', 700, 100);
    ctx.fillText(timer, 850, 100);
    
    
     };




var score = 0;
var perfect = 0;
var fast = 0;
var slow = 0;
var timer = 0;

//make text appear
//add functionality for score
//add fast/slow/perfect
//lock triangles to each of the 4 sides
//flip the triangle based on the side of the square
//add animation related to beat
//add background
//start menu
//highscores
//add music
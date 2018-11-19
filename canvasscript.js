window.onload = function init() {
           
    var canvas = document.getElementById('myCanvas'); 
    var ctx = canvas.getContext('2d');
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    ctx.fillStyle = 'red';
    // x y width height
    ctx.fillRect(450,450,100,100);


function createLeftTriangle(xoffset,yoffset){

    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(100+xoffset, 100+yoffset);
    ctx.lineTo(200+xoffset, 50+yoffset);
    ctx.lineTo(100+xoffset, 0+yoffset);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    
}    
 
function createRightTriangle(xoffset,yoffset){
     
    ctx.beginPath();
    ctx.moveTo(100+xoffset, 50+yoffset);
    ctx.lineTo(200+xoffset, 100+yoffset);
    ctx.lineTo(200+xoffset, 0+yoffset);
    ctx.lineTo(100+xoffset, 50+yoffset);
    //ctx.miterLimit = 1;
   // ctx.lineCap = 'round';
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.closePath();
    ctx.stroke();  
    ctx.fillStyle = 'yellow';
    ctx.fill();
    
}  
    
function createUpTriangle(xoffset,yoffset){
    
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.moveTo(150+xoffset, 100+yoffset);
    ctx.lineTo(200+xoffset, 0+yoffset);
    ctx.lineTo(100+xoffset, 0+yoffset);
    ctx.lineTo(150+xoffset, 100+yoffset);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    
}    
    
function createDownTriangle(xoffset,yoffset){
    
    ctx.beginPath();
    ctx.fillStyle = 'pink';
    ctx.moveTo(100+xoffset, 100+yoffset);
    ctx.lineTo(200+xoffset, 100+yoffset);
    ctx.lineTo(150+xoffset, 0+yoffset);
    ctx.lineTo(100+xoffset, 100+yoffset);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); 
       
}
    
    
createLeftTriangle(0,450);
     
createRightTriangle(750,450); 
    
createUpTriangle(350,50)
   
createDownTriangle(350,750)    
     
ctx.fillStyle = 'black';
ctx.font = '48px serif';
ctx.fillText('Score:', 0, 100);
ctx.fillText(score, 150, 100);
ctx.fillText('Time:', 700, 100);
ctx.fillText(timer, 850, 100);
    

    
    
};


//KEY_STATUS.left || KEY_STATUS.right || KEY_STATUS.down || KEY_STATUS.up 
//KEY_STATUS.space pause
var score = 0;
var perfect = 0;
var fast = 0;
var slow = 0;
var timer = 0;
  

//make text appear
//add functionality for score
//add fast/slow/perfect
//lock triangles to each of the 4 sides
//add animation related to beat
//add background
//start menu
//highscores
//add music
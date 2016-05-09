var rotation = 0;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
	
var temp = document.getElementById("videoContent");
temp.style.display = "none";

function interval()
{
	setInterval(rotate, 33);
}

function rotate()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	ctx.setTransform(1,0,0,1,0,0);
	
	var videoWidth = temp.width;
	var videoHeight = temp.height;
	
	var x = 300;
	var y = 300;
	var angle = rotation * Math.PI/180;

	ctx.translate(x+.5*videoWidth, y+.5*videoHeight);
	ctx.rotate(angle);
    ctx.drawImage(videoContent, 85, 30);	
	
	ctx.restore();
	rotation++;
}
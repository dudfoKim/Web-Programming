var gameover = 0; // 게임이 끝나는 것에 대한 flag 변수
var size = 30; // 초기 사이즈
var charGrade = 1; // 사용자 개체 크기의 등급 변수
var currentCharNo = 0; // 사용자 개체 크기의 등급에 대한 변수(4가 넘으면 charGrade가 증가한다.)
var kill = 0; // 먹은 과일의 갯수
var fruitCount = 0; // 총 과일에 대한 갯수
var index = 0; // 반복문을 사용하기 위한 변수

var playerSpd = 7; // 사용자 개체의 속도
var playerX = 0;
var playerY = 0; // 사용자 개체에 대한 x, y 좌표 변수
var winPlayerX = 400;
var winPlayerY = 400; // 전체 화면에서 사용자 개체의 위치에 대한 변수
var mapX = 0;
var mapY = 0; // 게임 화면에 대한 x, y 좌표 변수
var winMapX = 400;
var winMapY = 400; // 전체 화면에서 게임 화면의 위치에 대한 변수

var eatSound = new Audio("./sound/eat.wav");
var finishSound = new Audio("./sound/gameover.wav"); // 효과음 객체를 2개 생성

var startday = new Date();
var clockStart = startday.getTime(); // Date 객체를 이용해서 현재의 시간을 할당받는 변수

var player; // 사용자 개체에 대한 img형 변수
var newfruit=[]; // recratefruit에서 새로 생성하는 과일의 변수
var key; // 키보드의 입력에 대한 변수
var left,right,up,down; // 키보드의 좌, 우, 상, 하에 대한 변수
var randomVar; // 과일를 다시 호출하는 함수에서 사용하는 rand변수
var charRecursive; // 사용자가 움직이는 개체에 대한 변수

function keyDown() // 해당하는 키보드를 누를 때 값이 바뀐다.(onkeypressdown)
{
	key = event.keyCode;

	if(key==37)
	{
		left = true;
	}
	if(key==38)
	{
		up = true;
	}
	if(key==39)
	{
		right = true;
	}
	if(key==40)
	{
		down = true;
	}
}

function keyUp() // 해당하는 키보드를 땔 때 변수의 값이 바뀐다.(onkeypressup)
 {
	key = event.keyCode;

	if(key==37)
	{
		left = false;
	}
	if(key==38)
	{
		up = false;
	}
	if(key==39)
	{
		right = false;
	}
	if(key==40) 
	{
		down = false;
	}
}

function initGame() // 초기 함수
{
	player = document.getElementById("player");
	
	setInterval(Moving,20);
	charRecursive = setInterval(refreshCharacter, 100);
	var createRecursive = setInterval(recreatefruit, 1000);
	var timeRecursive = setTimeout("getGametime()", 1);
}

function initGametime() // Date 객체를 이용해서 브라우져의 이용시간을 구하는 함수
{
	var myTime = new Date(); 
	var timeNow = myTime.getTime();  
	var timeDiff = timeNow - clockStart; 

	this.diffSecs = timeDiff/1000;

	return(this.diffSecs); 
}

function getGametime() // initGametime()에서 나온 결과값을 timer 태그에 출력한다.
{ 
	var tempTime = initGametime(); 
	var result = tempTime + " ";

	result = result.substring(0, result.indexOf(".")) + " s"; 
	document.getElementById("timer").value = result;
	setTimeout("getGametime()", 1000);
}

function Moving() // 사용자 개체의 움직임을 정의하는 함수
{
	if(gameover==0) // game이 끝나지 않았을 때 keyEvent에 따라 사용자 개체를 다르게 움직이도록 한다.
	{
		if(left==true)
		{
			playerX -= playerSpd;
			
			if(((winPlayerX+size/2)>(parseInt(window.innerWidth*30/100))) || (winMapX > 1000))
			{
				winPlayerX -= playerSpd;
			}
			else
			{
				winMapX += playerSpd;
			}
		} 
		if(right==true)
		{
			playerX += playerSpd;
			
			if(((winPlayerX+size/2)<(parseInt(window.innerWidth*70/100))) || (winMapX < -1000))
			{
				winPlayerX += playerSpd;
			}
			else 
			{
				winMapX -= playerSpd;
			}
		}  
		if(up==true) 
		{
			playerY -= playerSpd;

			if(((winPlayerY+size/2)>(parseInt(window.innerHeight*30/100))) || (winMapY>1000))
			{
				winPlayerY -= playerSpd;
			}
           	else
			{
				winMapY += playerSpd;
			}
		}
		if(down==true) 
		{
			playerY += playerSpd;
	            
			if(((winPlayerY+size/2)<(parseInt(window.innerHeight*70/100))) || (winMapY<-1000))
			{
				winPlayerY += playerSpd;
			}
			else 
			{
				winMapY -= playerSpd;
			}
		}
	}
	
	// 사용자 개체(player)의 위치와 모든 속성값을 바꾼다.
	player.style.left = winPlayerX + "px";
    player.style.top = winPlayerY + "px";
	
	// 게임 화면(map)의 위치 속성 값을 바꾼다.
	map.style.left = winMapX + "px";
	map.style.top = winMapY + "px";
	
	// 게임 화면 좌측 상단에 나타나는 수치 값들을 바꿔준다.
	document.getElementById("kill").value = kill;
	document.getElementById("size").value = size;
}

var fruit = function(positionX,positionY,fruitSize) // 과일 개체에 대한 모든 것을 정의한다.
{
	// 과일 개체의 속성에 대한 변수
	this.div;
	this.img;
	this.type;
	this.spd;
	this.fruitSize = fruitSize;
	this.positionX = positionX;
	this.positionY = positionY;
	
	// 랜덤 함수를 호출해서 결과값으로 난수를 사용한다.
	this.movePoint = parseInt(Math.random()*100);
	this.randomXY = parseInt(Math.random()*4);

	this.init = function() // 맨 처음 div를 이용해서 과일들을 생성한다.
	{
		this.div = document.createElement("div");
		this.img = document.createElement("img");
		this.type = parseInt(Math.random()*11);

		// 난수로 생성한 type에 따라 과일 개체의 이미지를 다르게 삽입한다.
		if(this.type<2)
		{
			this.img.src="./image/apple.png";
			this.spd = 3;
		}
		else if(this.type<5)
		{
			this.img.src="./image/pear.png";
			this.spd = 4;
		}
		else if(this.type<8)
		{
			this.img.src="./image/melon.png";
			this.spd = 3;
		}
		else
		{
			this.img.src="./image/banana.png";
			this.spd = 2;
		}
		
		// 과일 개체에 이미지를 삽입한 후, 나머지 속성값을 바꿔주고, 게임 화면(map)에 appendChild한다.
		this.div.style.position = "absolute";
		this.img.style.width = fruitSize + "px";
		this.img.style.height = fruitSize + "px";
		this.div.style.left = this.positionX + "px";
		this.div.style.top = this.positionY + "px";
		this.div.appendChild(this.img);
		document.getElementById("map").appendChild(this.div);
	};

	// 사용자 개체가 과일 개체를 먹을 때
	this.eat = function()
	{
		var obj = this;

		// 사용자 개체와 과일 개체가 만날 때(사용자 개체와 과일 개체의 XY좌표와 크기를 이용한다. 음수일 수도 있으므로 절대값 함수도 이용)
		if(((Math.abs((playerX+size/2)-parseInt((this.positionX+this.fruitSize/2))))<(size/2+charGrade)) && (Math.abs((playerY+size/2)-parseInt((this.positionY+this.fruitSize/2)))<(size/2 + charGrade)))
		{
           	if(size>=this.fruitSize) // 사용자 개체가 과일보다 크기가 크면 먹는다.
			{
            	this.movePoint = -1;
            	sizeUp();
				kill++;
            	this.success();
            	clearTimeout(st);
			}
			else // 사용자 개체가 과일보다 작으면 게임이 끝난다. 게임을 다시 시작할 것인지 물어본다.
			{
				finishSound.play();
				
				player = document.getElementById("player");
	            player.src = "./image/die.jpeg";
				player.style.width = "300px";
				player.style.height = "300px";

	            gameover = 1;

				window.alert("게임 끝!");

				var over = confirm("다시 시작하시겠습니까?");

				if(over)
				{
					location.reload();
				}
				else
				{
					window.alert("새로고침을 눌러서 게임을 다시 시작해주세요!");
				}
				return;
	           }
		} 

		this.st = setTimeout(function(){obj.eat();}, 10);	
	};
			
	 // 과일이 랜덤으로 움직인다.
	this.randMove = function()
	{
		var obj2 = this;

		// 맨 처음 과일 개체를 생성할 때 난수로 값을 지정해준 movePoint 변수를 이용한다.
		if(this.movePoint==0)
		{
			this.movePoint = parseInt(Math.random()*100);
			this.randomXY = parseInt(Math.random()*4);
		}
		else if(this.movePoint>0) // 제대로 movePoint 변수에 값이 들어가 있을 경우(제대로 생성되었을 경우)
		{
			this.movePoint--;

			// 과일 개체가 사용자 개체의 시야에 보일 경우
			if(Math.abs((playerX+size/2)-parseInt((this.positionX+this.fruitSize/2))) < size*2 && Math.abs((playerY+size/2)-parseInt((this.positionY+this.fruitSize/2))) < size*2)
			{
	            if(size>=this.fruitSize) // 사용자 개체가 과일 개체보다 크기가 더 클 때에는 과일 개체가 반대쪽으로 도망간다.
				{
           			if(playerX>this.positionX && this.positionX>-1000)
					{
						this.positionX -= this.spd*2;
					}
       				if(playerX<this.positionX && this.positionX<4500)
					{
						this.positionX += this.spd*2;
					}
       				if(playerY>this.positionY && this.positionY>-1000)
					{
						this.positionY -= this.spd*2;
					}
       				if(playerY<this.positionY && this.positionY<2700)
					{
						this.positionY += this.spd*2;
					}
            	}
				else // 사용자 개체가 과일 개체보다 크기가 더 작을 때에는 사용자를 공격한다.
				{
					if(playerX>this.positionX && this.positionX>-1000)
					{
						this.positionX += this.spd*2;
					}
            		if(playerX<this.positionX && this.positionX<4500)
					{
						this.positionX -= this.spd*2;
					}
            		if(playerY>this.positionY && this.positionY>-1000)
					{
						this.positionY += this.spd*2;
					}
            		if(playerY<this.positionY && this.positionY<2700)
					{
						this.positionY -= this.spd*2;
					}
				} 
			} 
			else // 과일 개체가 사용자 개체의 시야에서 보이지 않을 때
			{
				// 역시 과일 개체를 생성할 때 값을 할당한 randomXY 변수를 이용해서 각각 다르게 움직이도록 한다.
	            switch(this.randomXY)
				{
					case 0:
					{
						if(this.positionX>-1000)
						{
							this.positionX -= this.spd;
							break;
						}
					}
					case 1:
					{
						if(this.positionY>-1000)
						{
							this.positionY -= this.spd;
							break;
						}
					}
					case 2:
					{
						if(this.positionX<4500)
						{
							this.positionX += this.spd;
							break;
						}
					}
					case 3:
					{
						if(this.positionY<2700)
						{
							this.positionY += this.spd;
							break;
						}
					}
				}		
			}

			this.div.style.left = this.positionX+'px';
			this.div.style.top = this.positionY+'px';
		}
		else 
		{
			clearTimeout(st2);
		}
				
		this.st2 = setTimeout(function() {obj2.randMove();}, 30);
	};

	this.success = function() // 사용자 개체와 과일이 먹을 때 이 소스코드 부분도 작동한다.
	{
		var obj = this;
		
		eatSound.play();
			
		fruitCount--;

		this.div.removeChild(this.img);
		document.getElementById("map").removeChlid(this.div);
		clearTimeout(st3);

		eatSound.currentTime = 0;
		eatSound.pause();
		
		this.st3 = setTimeout(function() {obj.success();},100);
	};

	this.init();
	this.eat();
	this.randMove();
};

function refreshCharacter() // 사용자 개체의 크기에 따라 각각 다른 사진을 넣어준다.
{
	if(gameover==1)
	{
		clearInterval(charRecursive);
	}

	if((currentCharNo>=3) && (charGrade<3)) // charGrade가 1, 2면 currentCharNo는 3까지 밖에 없다.
	{
		currentCharNo = 0;
	}
	else if(currentCharNo>=4) // charGrade가 3, 4면 currentCharNo는 4까지 있다.
	{
		currentCharNo = 0;
	}
	
	// 해당하는 charGrade와 currentCharNo를 이용해서 사용자 개체에 이미지를 삽입한다.
	currentCharNo++;
	player.src = "./image/yeonglae" + charGrade + currentCharNo + ".jpg";
}

function sizeUp() // 사용자 개체가 과일를 먹는 것을 성공했을 때 크기를 키워준다.
{
	var temp = document.getElementById("player");

	// 과일 먹는 것을 성공했으므로 size를 키우고 size와 charGrade의 비교에 따라 charGrade 변수를 1 증가시킨다.
	size += 3;

	if(size>=(50*charGrade) && charGrade<4)
	{
		charGrade++;
	}

	temp.style.width = size + "px";
	temp.style.height = size + "px";
}
		
function recreatefruit() // 과일를 다시 호출해준다.
{
	if(fruitCount==0) // 남은 과일이 없을 때
	{
		for(index=0; index<100; index++)
		{
			fruitCount++;
			randomVar = parseInt(Math.random()*5500-1000);
			newfruit.push(new fruit(randomVar,parseInt(Math.random()*3700-1000), parseInt(Math.random()*size + 25)));
		}
	}
	else if((kill%10)==0) // 죽인 과일의 갯수 modular 값이 0일 때
	{
		for(index=0; index<30; index++)
		{
			fruitCount++;
			randomVar = parseInt(Math.random()*5500-1000);
			newfruit.push(new fruit(randomVar,parseInt(Math.random()*3700-1000), parseInt(Math.random()*size + 25)));
		}
	}
}
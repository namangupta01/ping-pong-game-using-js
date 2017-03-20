/*leftBarHeight=leftBar.offsetHeight;
rightBarHeight=rightBar.offsetHeight;*/
leftBar=document.getElementById("left-bar");
rightBar=document.getElementById("right-bar");
gameArea=document.getElementById("game-area");
ball=document.getElementById("ball");
var gameAreaTop=gameArea.getBoundingClientRect().top;
var gameAreaBottom=gameArea.getBoundingClientRect().bottom;
var gameAreaLeft=gameArea.getBoundingClientRect().left;
var gameAreaRight=gameArea.getBoundingClientRect().right;
var gameAreaHeight=gameArea.getBoundingClientRect().height;
var leftBarHeight=leftBar.getBoundingClientRect().height;
var rightBarHeight=rightBar.getBoundingClientRect().height;
var leftBarTop=leftBar.getBoundingClientRect().top;
var rightBarTop=rightBar.getBoundingClientRect().top;
var leftBarInitialTop=leftBarTop;
var rightBarInitialTop=rightBarTop;
var ballPositionTop=ball.getBoundingClientRect().top;
var ballPositionLeft=ball.getBoundingClientRect().left;
var ballInitialPositionX=ballPositionLeft;
var ballInitialPositionY=ballPositionTop;
var ballRadius=ball.getBoundingClientRect().width/2;
var ballCenterX=ballPositionLeft+(ballRadius);
var ballCenterY=ballPositionTop+(ballRadius);
var ballInitialCenterX=ballCenterX;
var ballInitialCentery=ballCenterY;
var start=false;
var ballSpeedY
var ballSpeedX=(Math.random()-.50)*40;
var random = Math.random()-.50;
if(random>0){
	ballSpeedY=Math.sqrt(400-Math.pow(ballSpeedX,2));
}
else {
	ballSpeedY=Math.sqrt(400-Math.pow(ballSpeedX,2))*(-1);
}
function gameController(e){
	if(e.which==32){
		start=!start;
	}
	else if((e.which==38||e.which==40)&&start==true){
		if(e.which==38){
			rightBarTop=rightBarTop-30;
			if(rightBarTop > 0){
				console.log("i am here");
				rightBar.style.top=rightBarTop-rightBarInitialTop +"px";
			}
			else{
				rightBarTop=rightBarTop+30;
			}
		}
		else{
			rightBarTop=rightBarTop+30;
			if(rightBarTop+rightBarHeight<gameAreaHeight){
				rightBar.style.top=rightBarTop-rightBarInitialTop +"px";
			}
			else{
				rightBarTop=rightBarTop-30;
			}
		}
	}
	else if((e.which==87||e.which==83)&&start==true){
		if(e.which==87){
			leftBarTop=leftBarTop-30;
			if(leftBarTop>0){	
				leftBar.style.top=leftBarTop-leftBarInitialTop +"px";
			}
			else{
				leftBarTop=leftBarTop+30;
			}
		}
		else{
			leftBarTop=leftBarTop+30;
			if(leftBarTop+leftBarHeight<gameAreaHeight){
				leftBar.style.top=leftBarTop-leftBarInitialTop +"px";
			}
			else{
				leftBarTop=leftBarTop-30;
			}
		}
	}
}
document.addEventListener("keydown",gameController);
function gameStart(){
	if(start){
		ballCenterX = ballCenterX + ballSpeedX;
		ballCenterY = ballCenterY + ballSpeedY;
		ballPositionLeft=ballPositionLeft+ballSpeedX;
		ballPositionTop=ballPositionTop+ballSpeedY;
		ball.style.top = ballPositionTop - ballInitialPositionY +"px";
		ball.style.left = ballPositionLeft - ballInitialPositionX +"px";
		if(ballPositionTop<gameAreaTop){
			ballSpeedY=ballSpeedY*(-1);
		}
		else if(ballPositionTop + 2*ballRadius>gameAreaBottom){
			ballSpeedY=ballSpeedY*(-1);	
		}
		else if(ballPositionLeft<gameAreaLeft){
			ballSpeedX = ballSpeedX *(-1);
		}
		else if(ballPositionLeft+2*ballRadius>gameAreaRight){
			ballSpeedX = ballSpeedX *(-1);	
		}
	}
}
window.onload=setInterval(gameStart,25);
/*function speedIncrementer(){
	console.log("speed");
	ballSpeedX=ballSpeedX+1;
	ballSpeedY=ballSpeedY+1;
}
setInterval(speedIncrementer,10000);*/
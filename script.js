/*leftBarHeight=leftBar.offsetHeight;
rightBarHeight=rightBar.offsetHeight;*/
leftBar=document.getElementById("left-bar");
rightBar=document.getElementById("right-bar");
gameArea=document.getElementById("game-area");
ball=document.getElementById("ball");
var gameAreaHeight=gameArea.getBoundingClientRect().height;
var leftBarHeight=leftBar.getBoundingClientRect().height;
var rightBarHeight=rightBar.getBoundingClientRect().height;
var leftBarTop=leftBar.getBoundingClientRect().top;
var rightBarTop=rightBar.getBoundingClientRect().top;
var leftBarInitialTop=leftBarTop;
var rightBarInitialTop=rightBarTop;
var start=false;
var ballSpeedX=10;
var ballSpeedY=10;
var ballRadius=ball.getBoundingClientRect().width/2;
var ballCenterX=ball.getBoundingClientRect().left+(ballRadius);
var ballCenterY=ball.getBoundingClientRect().top+(ballRadius);
var ballInitialPositionX=ballCenterX-ballRadius;
var ballInitialPositionY=ballCenterX-ballRadius;
var ballInitialCenterX=ballCenterX;
var ballInitialCentery=ballCenterY;
var ballPositionTop=ballInitialPositionY;
var ballPositionLeft=ballInitialPositionX;
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
	}
}
window.onload=setInterval(gameStart,50);
function speedIncrementer(){
	console.log("speed");
	ballSpeedX=ballSpeedX+2;
	ballSpeedY=ballSpeedY+2;
}
setInterval(speedIncrementer,10000);
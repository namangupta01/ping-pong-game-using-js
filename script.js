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
var ballDiameter=ball.getBoundingClientRect().width;
var ballCenterX=ball.getBoundingClientRect().left+(ballDiameter/2);
var ballCenterY=ball.getBoundingClientRect().top+(ballDiameter/2);
var ballInitialPositionX=ballCenterX-ballRadius;
var ballInitialPositionY=ballCenterX-ballRadius;
var ballInitialCenterX=ballCenterX;
var ballInitialCentery=ballCenterY;
var ballPositionTop=ballInitialPositionY;
var ballPositionLeft=ballInitialPositionY;
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
		ballCenterX = ballCenterX + 10;
		ballCenterY = ballCenterY + 10;
		ball.style.top = ballCenterY+"px";
		ball.style.left = ballCenterX+"px";
	}
}
window.onload=setInterval(gameStart,50);
function speedIncrementer(){
	ballSpeedX=ballSpeedX+4;
	ballSpeedY=ballSpeedy+4;
}
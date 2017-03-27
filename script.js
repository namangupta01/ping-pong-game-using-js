var startingOfGame = (function(){
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
	var leftBarBottom=leftBar.getBoundingClientRect().bottom;
	var rightBarTop=rightBar.getBoundingClientRect().top;
	var rightBarBottom=rightBar.getBoundingClientRect().bottom;
	var leftBarInitialTop=leftBarTop;
	var rightBarInitialTop=rightBarTop;
	var ballPositionTop=ball.getBoundingClientRect().top;
	var ballPositionLeft=ball.getBoundingClientRect().left;
	var ballPositionRight;
	var ballInitialPositionX=ballPositionLeft;
	var ballInitialPositionY=ballPositionTop;
	var ballRadius=ball.getBoundingClientRect().width/2;
	var ballCenterX=ballPositionLeft+(ballRadius);
	var ballCenterY=ballPositionTop+(ballRadius);
	var ballInitialCenterX=ballCenterX;
	var ballInitialCentery=ballCenterY;
	var ballPositionTop;
	var ballPositionBottom;
	var leftBarRight=leftBar.getBoundingClientRect().right;
	var rightBarLeft=rightBar.getBoundingClientRect().left;
	var start=false;
	var ballSpeedY;
	var speedOfBar=50;
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
				rightBarTop=rightBarTop-speedOfBar;
				if(rightBarTop > 0){
					console.log("i am here");
					rightBar.style.top=rightBarTop-rightBarInitialTop +"px";
				}
				else{
					rightBarTop=rightBarTop+speedOfBar;
				}
			}
			else{
				rightBarTop=rightBarTop+speedOfBar;
				if(rightBarTop+rightBarHeight<gameAreaHeight){
					rightBar.style.top=rightBarTop-rightBarInitialTop +"px";
				}
				else{
					rightBarTop=rightBarTop-speedOfBar;
				}
			}
		}
		else if((e.which==87||e.which==83)&&start==true){
			if(e.which==87){
				leftBarTop=leftBarTop-speedOfBar;
				if(leftBarTop>0){	
					leftBar.style.top=leftBarTop-leftBarInitialTop +"px";
				}
				else{
					leftBarTop=leftBarTop+speedOfBar;
				}
			}
			else{
				leftBarTop=leftBarTop+speedOfBar;
				if(leftBarTop+leftBarHeight<gameAreaHeight){
					leftBar.style.top=leftBarTop-leftBarInitialTop +"px";
				}
				else{
					leftBarTop=leftBarTop-speedOfBar;
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
			ballPositionRight=ball.getBoundingClientRect().right;
			ballPositionTop=ball.getBoundingClientRect().top;
			ballPositionBottom=ball.getBoundingClientRect().bottom;
			leftBarTop=leftBar.getBoundingClientRect().top;
			leftBarBottom=leftBar.getBoundingClientRect().bottom;
			rightBarTop=rightBar.getBoundingClientRect().top;
			rightBarBottom=rightBar.getBoundingClientRect().bottom;
			if(ballPositionTop<gameAreaTop){
				ballSpeedY=ballSpeedY*(-1);
			}
			else if(ballPositionTop + 2*ballRadius>gameAreaBottom){
				ballSpeedY=ballSpeedY*(-1);	
			}
			else if(ballPositionLeft<leftBarRight){
					if((ballPositionTop<leftBarTop&&ballPositionBottom>leftBarTop)||(ballPositionBottom>leftBarBottom&&ballPositionTop<leftBarBottom)||(ballPositionTop>leftBarTop&&ballPositionBottom<leftBarBottom)){
						ballSpeedX = ballSpeedX *(-1);	
				}
					else if(ballPositionLeft<gameAreaLeft){
						location.reload();
						alert("Player 1 lose");
						setByDefault();
				}
			}
			else if(ballPositionRight>rightBarLeft){
				if((ballPositionTop<rightBarTop&&ballPositionBottom>rightBarTop)||(ballPositionBottom>rightBarBottom&&ballPositionTop<rightBarBottom)||(ballPositionTop>rightBarTop&&ballPositionBottom<rightBarBottom)){
					ballSpeedX = ballSpeedX *(-1);	
				}
				else if(ballPositionRight>gameAreaRight){
					location.reload();
					alert("Player 2 lose");
					setByDefault();
				}
			}
		}
	}
	window.onload=setInterval(gameStart,20);
	function speedIncrementer(){
		console.log("speed");
		if(ballSpeedX>0)
			ballSpeedX=ballSpeedX+0.1;
		else
			ballSpeedX=ballSpeedX-0.1;
		if (ballSpeedY>0)
			ballSpeedY=ballSpeedY+0.1;
		else 
			ballSpeedY=ballSpeedY-0.1;
	}
	setInterval(speedIncrementer,1000);
	function setByDefault(){
		ball.style.removeProperty("top");
		ball.style.removeProperty("left");
		leftBar.style.removeProperty("top");
		rightBar.style.removeProperty("top");
	}
}());

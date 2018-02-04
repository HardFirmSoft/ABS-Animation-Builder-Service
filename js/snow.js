var canvas = document.getElementById("content-pane");
var context = canvas.getContext("2d");
var maxFlakes = 40;
var flakes = [];


for(var i=0; i<maxFlakes; i++){
    flakes.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*5 + 1,
        d: Math.random()*maxFlakes,
    });
}

//function to draw the flakes
function drawSnow(){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "rgba(255, 255, 255, 0.8)";
		context.beginPath();
		for(var i = 0; i < maxFlakes; i++)
		{
			var current = flakes[i];
			context.moveTo(current.x, current.y);
            context.arc(current.x, current.y, current.r, 0, Math.PI*2, true);
		}
		context.fill();
		move();
}

	
	//Function to move the snowflakes
	var angle = 0;
	function move()
	{
		angle += 0.01;
		for(var i = 0; i < maxFlakes; i++)
		{
			var current = flakes[i];
			
			current.y += Math.cos(angle+current.d) + 1 + current.r/2;
			current.x += Math.sin(angle) * 2;
			
			
			if(current.x > canvas.width+5 || current.x < -5 || current.y > canvas.height+5)
			{
				if(i%3 > 0) //66.67% of the flakes
				{
					flakes[i] = {x: Math.random()*canvas.width, y: -10, r: current.r, d: current.d};
				}
				else
				{
					//If the flake is exitting from the right
					if(Math.sin(angle) > 0)
					{
						//Enter from the left
						flakes[i] = {x: -5, y: Math.random()*canvas.height, r: current.r, d: current.d};
					}
					else
					{
						//Enter from the right
						flakes[i] = {x: canvas.width+5, y: Math.random()*canvas.height, r: current.r, d: current.d};
					}
				}
			}
		}
	}
    
    var timer;
    var snowEnabled = false;
    var snowBtn = document.getElementById("snowFX");
    snowBtn.onclick = function(){
        if(snowEnabled){
            snowEnabled = false;
            context.clearRect(0,0,canvas.width,canvas.height);
            clearInterval(timer);
        }  
        else {
            snowEnabled = true;
            timer = setInterval(drawSnow,33);
        }
    }
	

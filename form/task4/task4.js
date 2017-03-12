window.onload = function(){
	var map = document.getElementById("map");
	for(var i=0;i<10;i++){//row
		for(var j=0;j<10;j++){//coloum
			var grid = document.createElement("div");
			grid.className = "gridCell";
			grid.style.top = i*50+"px";
			grid.style.left = j*50+"px";
			map.appendChild(grid);
		};
	};
	var cube = document.getElementById("cube");
	document.onkeydown = function(e){
		if (e.keyCode==39) {
			// cube.style.transformOrigin = "100% 100% 50px";
			// cube.style.transform = "rotateY(90deg) translate3d(50px,0,0)";
			// cube.style.left = 100 +"px";
			cube.style.transformOrigin = "100% 100% 50px";
			cube.style.transform = "rotateY(90deg) translate3d(50px,0,0)";
			cube.style.left = 100 +"px";
			document.remove(cube);
		}else if (e.keyCode==37) {
			// cube.style.transformOrigin = "0% 0% 50px";
			// cube.style.transform = "rotateY(180deg) translate3d(-50px,0,50px)";
			cube.style.transformOrigin = "100% 100% 50px";
			cube.style.transform = "rotateY(180deg) translate3d(50px,0,50px)";
			cube.style.left = 150 +"px";
		}else if(e.keyCode==38){
			cube.style.transformOrigin = "100% 100% 50px";
			cube.style.transform = "rotateY(270deg) translate3d(0px,0,50px)";
			cube.style.left = 200 +"px";
		}else if(e.keyCode==40){
			cube.style.transformOrigin = "100% 100% 50px";
			cube.style.transform = "rotateY(360deg) translate3d(0px,0px,0px)";
			cube.style.left = 250 +"px";
		}else if(e.keyCode==65){
			cube.style.transformOrigin = "100% 100% 50px";
			cube.style.transform = "rotateY(450deg) translate3d(50px,0,0)";
			cube.style.left = 300 +"px";
		}
	}
}
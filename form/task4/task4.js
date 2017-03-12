window.onload = function() {
	var map = document.getElementById("map");
	var horizontal = 0;
	var vertical = 0;
	var check = 0;
	for (var i = 0; i < 10; i++) { //row
		for (var j = 0; j < 10; j++) { //coloum
			var grid = document.createElement("div");
			grid.className = "gridCell";
			grid.style.top = i * 50 + "px";
			grid.style.left = j * 50 + "px";
			map.appendChild(grid);
		};
	};
	var cube = document.getElementById("cube");
	document.onkeydown = function(e) {
		if (e.keyCode == 39 && check == 0) {
			check = 1;
			console.log(check);
			var left = cube.offsetLeft;
			left += 50;
			horizontal
				+= 90;
			cube.style.transformOrigin = "50% 50% 25px";
			cube.style.transform = 'rotateY(' + horizontal + 'deg)';
			cube.style.left = left + "px";
			setTimeout(function() {
				check = 0;
			}, 1000);
		} else if (e.keyCode == 37 && check == 0) {
			check=1;
			var left = cube.offsetLeft;
			left -= 50;
			horizontal
				-= 90;
			cube.style.transformOrigin = "50% 50% 25px";
			cube.style.transform = 'rotateY(' + horizontal + 'deg)';
			cube.style.left = left + "px";
			setTimeout(function() {
				check = 0;
			}, 1000);
		} else if (e.keyCode == 38&&check==0) {
			check=1;
			var top = cube.offsetTop;
			top -= 50;
			vertical+=90;
			cube.style.transformOrigin = "50% 50% 25px";
			cube.style.transform = 'rotateX(' + vertical + 'deg)';
			cube.style.top = top + "px";
			setTimeout(function() {
				check = 0;
			}, 1000);
		}else if(e.keyCode==40&&check==0){
			check=1;
			var top = cube.offsetTop;
			top += 50;
			vertical-=90;
			cube.style.transformOrigin = "50% 50% 25px";
			cube.style.transform = 'rotateX(' + vertical + 'deg)';
			cube.style.top = top + "px";
			setTimeout(function() {
				check = 0;
			}, 1000);
		}
	}
}
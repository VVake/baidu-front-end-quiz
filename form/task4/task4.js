window.onload = function() {
	var map = document.getElementById("map");
	var horizontal = 0;
	var vertical = 0;
	var check = 0;
	var state = 0;
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
			var left = cube.offsetLeft;
			left += 50;
			var initial = (cube.style.transform).match(/-?\d{1,3}/g);
			var initialX = initial[0];
			var initialY = initial[1];
			var initialZ = initial[2];
			if (state==1) {
				var finalZ = parseInt(initialZ)-90;
				cube.style.transform = 'rotateX(' + initialX + 'deg) rotateY(' + initialY + 'deg) rotateZ('+finalZ+'deg)';
			}else if(state==2){
				var finalY = parseInt(initialY)-90;
				cube.style.transform = 'rotateX(' + initialX + 'deg) rotateY(' + finalY + 'deg) rotateZ('+initialZ+'deg)';
			}else if(state==3){
				var finalZ = parseInt(initialZ)+90;
				cube.style.transform = 'rotateX(' + initialX + 'deg) rotateY(' + initialY + 'deg) rotateZ('+finalZ+'deg)';
			}else{
			var finalY = parseInt(initialY)+90;
			cube.style.transform = 'rotateX(' + initialX + 'deg) rotateY(' + finalY + 'deg) rotateZ('+initialZ+'deg)';
			}
			cube.style.left = left + "px";
						console.log(cube.style.transform);
			setTimeout(function() {
				check = 0;
			}, 200);
		} else if (e.keyCode == 37 && check == 0) {
			check=1;
			var left = cube.offsetLeft;
			left -= 50;
			var initial = (cube.style.transform).match(/-?\d{1,3}/g);
			var initialX = initial[0];
			var initialY = initial[1];
			var initialZ = initial[2];
			var finalY = parseInt(initialY)-90;
			cube.style.transform = 'rotateX(' + initialX + 'deg) rotateY(' + finalY + 'deg) rotateZ('+initialZ+'deg)';
			cube.style.left = left + "px";
			setTimeout(function() {
				check = 0;
			}, 200);
		} else if (e.keyCode == 38&&check==0) {
			check=1;
			state+=1;
			if(state==4){
				state=0;
			}
			var top = cube.offsetTop;
			top -= 50;
			var initial = (cube.style.transform).match(/-?\d{1,3}/g);
			var initialX = initial[0];
			var initialY = initial[1];
			var initialZ = initial[2];
			var finalX = parseInt(initialX)+90;
			cube.style.transform = 'rotateX(' + finalX + 'deg) rotateY('+initialY+'deg) rotateZ('+initialZ+'deg)';
			cube.style.top = top + "px";
			console.log(cube.style.transform);
			setTimeout(function() {
				check = 0;
			}, 200);
		}else if(e.keyCode==40&&check==0){
			check=1;
			state-=1;
			if(state==-4){
				state=0;
			}
			console.log(cube.style.transform);
			var top = cube.offsetTop;
			top += 50;
			var initial = (cube.style.transform).match(/-?\d{1,3}/g);
			var initialX = initial[0];
			var initialY = initial[1];
			var initialZ = initial[2];
			var finalX = parseInt(initialX)-90;
			cube.style.transform = 'rotateX(' + finalX + 'deg) rotateY('+initialY+'deg) rotateZ('+initialZ+'deg)';
			cube.style.top = top + "px";
			setTimeout(function() {
				check = 0;
			}, 200);
		}
	};
	// function chooseTransform(state){
	// 	switch (state) {
	// 		case 1:
				
	// 			break;
	// 		case 2:

	// 			break;
	// 		case 3:

	// 			break;
	// 		case 4:

	// 			break;
	// 		case -1:

	// 			break;
	// 		case -2:

	// 			break;
	// 		case -3:

	// 			break;
	// 		case -4:

	// 			break;
	// 	}
	// };
}
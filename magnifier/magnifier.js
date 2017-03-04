window.onload = function(){
	var demo = document.getElementById("demo");
	var smallBox = document.getElementById("smallBox");
	var magnifier = document.getElementById("magnifier");
	var bigBox = document.getElementById("bigBox");
	var bigImg = bigBox.getElementsByTagName("img")[0];
	var demoLeft = demo.offsetLeft;
	var demoTop = demo.offsetTop;
	var sBoxHeight = smallBox.offsetHeight;
	var sBoxWidth = smallBox.offsetWidth;

smallBox.onmouseover =function(){
	magnifier.style.display = "block";
	bigBox.style.display = "block";
}
smallBox.onmouseout = function () {
	magnifier.style.display = "none";
	bigBox.style.display = "none";
}
smallBox.onmousemove = function(e){
	var magWidth = magnifier.offsetWidth;
	var magHeight = magnifier.offsetHeight;
	var evenet = e;
	var left = event.clientX - demoLeft-magWidth/2;
	var top = event.clientY - demoTop-magHeight/2;
	if(left<0){
		left=0;
	}else if(left>sBoxWidth-magWidth){
		left=sBoxWidth-magWidth;
	}
	if (top>sBoxHeight-magHeight) {
		top = sBoxHeight-magHeight;
	}else if (top<0){
		top=0;
	}
	magnifier.style.left = left+"px";
	magnifier.style.top = top+"px";
	bigImg.style.left=-3*left+'px';
	bigImg.style.top = -2*top+'px';
}
}
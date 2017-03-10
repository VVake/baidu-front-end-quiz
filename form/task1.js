window.onload = function(){
	var button = document.getElementsByTagName("button");
	for(var i = 0, length1 = button.length; i < length1; i++){
		(function(num){
			button[num].addEventListener('click',function(){
				var input = document.getElementsByTagName("input")[num];
				var p = document.getElementsByTagName("p")[num];
				var value = input.value;
				if (value.length==0) {
					p.innerHTML="姓名不能为空";
					p.style.color ="red";
					input.style.border = "1px solid red";
				}
				else if(value.length<4||value.length>16){
					p.innerHTML="长度错误，必须为4-16个字符";
					p.style.color ="red";
					input.style.border = "1px solid red";
				}else{
					p.innerHTML="格式正确";
					p.style.color ="green";
					input.style.border = "1px solid green";
				}
			})
		})(i);
	}
}
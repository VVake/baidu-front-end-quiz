window.onload = function(){
	var input = document.getElementsByTagName("input");
	for(var i = 0, length1 = input.length; i < length1; i++){
		(function(num){	
			var suggest = document.getElementsByTagName("p")[num];
			var re =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
			input[num].addEventListener('focus',function(){
				suggest.style.display = "block";
			});
			input[num].addEventListener('blur',function(){
					switch (num) {
						case 0:
							if (this.value.length==0) {
								suggest.innerHTML = "名称不可为空";
								suggest.style.color = "red";
								this.style.border ="1px solid red";
							}
							else if (this.value.length<4||this.value.length>16) {
								suggest.innerHTML = "名称不可用";
								suggest.style.color = "red";
								this.style.border ="1px solid red";
							}else{
								suggest.innerHTML ="名称可用";
								suggest.style.color = "#0C3";
								this.style.border ="1px solid #0C3";
							}
							break;
						case 1:
							if (this.value==0) {
								suggest.innerHTML = "密码不可为空";
								suggest.style.color = "red";
								this.style.border ="1px solid red";
							}
							else if (this.value.length<4||this.value.length>16) {
								suggest.innerHTML = "密码不可用";
								suggest.style.color = "red";
								this.style.border ="1px solid red";
							}else{
								suggest.innerHTML ="密码可用";
								suggest.style.color = "#0C3";
								this.style.border ="1px solid #0C3";
							}
							break;
						case 2:
							var password = document.getElementsByTagName("input")[num-1];
							if (this.value==0) {
								suggest.innerHTML = "密码确认不可为空";
								suggest.style.color = "red";
								this.style.border ="1px solid red";
							}
							else if(this.value!=password.value){
								suggest.innerHTML = "密码输入不一致";
								suggest.style.color = "red";
								this.style.border ="1px solid red";
							}else{
								suggest.innerHTML ="输入正确";
								suggest.style.color = "#0C3";
								this.style.border ="1px solid #0C3";
							}
							break;
						case 3:
							if (this.value.length==0) {
								suggest.innerHTML = "邮箱不可为空";
								suggest.style.color = "red";
								this.style.border ="1px solid red";
							}else if (!re.test(this.value) ) {
								suggest.innerHTML = "邮箱格式错误";
								suggest.style.color = "red";
								this.style.border ="1px solid red";
							}else{
								suggest.innerHTML = "邮箱可以使用";
								suggest.style.color = "#0C3";
								this.style.border ="1px solid #0C3";
							}
							break;
							if (this.value.length==0) {
								suggest.innerHTML = "手机号码不可为空";
								suggest.style.color = "red";
								this.style.border ="1px solid red";
							}else if ( ) {
								suggest.innerHTML = "手机号码格式错误";
								suggest.style.color = "red";
								this.style.border ="1px solid red";
							}else{
								suggest.innerHTML = "手机号码可以使用";
								suggest.style.color = "#0C3";
								this.style.border ="1px solid #0C3";
							}
							break;
					}
			})
		})(i)
	}
}
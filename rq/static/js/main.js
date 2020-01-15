//1. 登录注册的显示与隐藏
let l_flag=true;
let r_flag=true;
let login=document.getElementsByClassName("login-content");
let reg=document.getElementsByClassName("reg-content");
//定义登录内容显示隐藏函数
 let login_show=function(){
	if(l_flag==true){
		login[0].style.display="block";
		l_flag=false;
	}else{
		login[0].style.display="none";
		l_flag=true;
	}
}
//定义注册内容显示隐藏函数
let reg_show=function(){
	login[0].style.display="none";
	l_flag=true;	
	if(r_flag==true){
		reg[0].style.display="block";
		r_flag=false;
	}else{
		reg[0].style.display="none";
		r_flag=true;
	}
}


// 2. 登录用户名密码格式验证
let user=document.getElementById("user");
let upwd=document.getElementById("upwd");
// 验证用户名
user.addEventListener("focus",function(){
	let div=this.parentNode.children[1]
	div.className="vali";
})
user.addEventListener("blur",function(){
	let reg=/^\w{8,12}$/;
	vali.call(this,reg);
})
// 验证密码
upwd.addEventListener("focus",function(){
	let div=this.parentNode.children[1]
	div.className="vali";
})
upwd.addEventListener("blur",function(){
	let reg=/^\w{8,12}$/;
	vali.call(this,reg);
})
// 验证函数封装
function vali(reg){
	let div=this.parentNode.children[1];
	let bool=reg.test(this.value);
	if(bool==true){
		div.className="vali_success";
		return true;
	}else{
		div.className="vali_fail";
		return false;
	}
}
// 账号密码验证符合要求才可触发点击登录
lg_btn.addEventListener("click",function(e){
	if(vali.call(upwd,/^\w{8,12}$/)==true
	&&vali.call(user,/^\w{8,12}$/)==true){
		alert("登录成功")
		// 刷新当前页面
		location.reload(true);
	}else{
		e.preventDefault();
	}
})

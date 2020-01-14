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
//2. 菜单的显示与隐藏
let menu_item=document.getElementsByClassName("menu-item");
let menu_details=document.getElementsByClassName("menu-details");
for(let i=0; i<menu_item.length;i++){
	menu_item[i].addEventListener("mouseover",function(){
		menu_details[i].style.display="block";
	});
	menu_item[i].addEventListener("mouseout",function(){
		menu_details[i].style.display="none";
	});
	menu_details[i].addEventListener("mouseover",function(){
		menu_details[i].style.display="block";
	})
	menu_details[i].addEventListener("mouseout",function(){
		menu_details[i].style.display="none";
	})
}

// 3. 用户名密码格式验证
let user=document.getElementById("user");
let upwd=document.getElementById("upwd");
// 验证用户名
user.addEventListener("focus",function(){
	let div=this.parentNode.children[1]
	div.innerHTML="用户名为8-12为数字或字母";
	div.className="vali";
})
user.addEventListener("blur",function(){
	let reg=/^\w{8,12}$/;
	let successMsg="用户名格式正确";
	let failMsg="用户名格式错误"
	vali.call(this,reg,successMsg,failMsg);
})
// 验证密码
upwd.addEventListener("blur",function(){
	let reg=/^\w{6,8}$/;
	let successMsg="密码格式正确";
	let failMsg="密码格式错误"
	vali.call(this,reg,successMsg,failMsg);
})
upwd.addEventListener("focus",function(){
	let div=this.parentNode.children[1]
	div.innerHTML="密码为6-12为数字或字母";
	div.className="vali";
})
// 验证函数封装
function vali(reg,successMsg,failMsg){
	let div=this.parentNode.children[1];
	let bool=reg.test(this.value);
	if(bool==true){
		div.className="vali_success";
		div.innerHTML=successMsg;
		return true;
	}else{
		div.className="vali_fail";
		div.innerHTML=failMsg;
	}
}
lg_btn.addEventListener("click",function(){
	if(vali.call(upwd,/^\w{6,8}$/)==true
	&&vali.call(user,/^\w{8,12}$/)==true){
		alert("登录成功")
	}else{
		alert("输入格式有误")
	}
})

//登录注册的显示与隐藏
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
//菜单的显示与隐藏
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


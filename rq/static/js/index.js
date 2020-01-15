// 1. 菜单的显示与隐藏
let menu_item = document.getElementsByClassName("menu-item");
let menu_details = document.getElementsByClassName("menu-details");
for (let i = 0; i < menu_item.length; i++) {
  menu_item[i].addEventListener("mouseover", function () {
    menu_details[i].style.display = "block";
  });
  menu_item[i].addEventListener("mouseout", function () {
    menu_details[i].style.display = "none";
  });
  menu_details[i].addEventListener("mouseover", function () {
    menu_details[i].style.display = "block";
  })
  menu_details[i].addEventListener("mouseout", function () {
    menu_details[i].style.display = "none";
  })
}
// 2. 轮播实现
// 2.1 自动轮播效果
let i=0; //当前显示的图片
let LIWIDTH=936; // 定义li宽度, 也可动态获取
let LICOUNT=4; //图片数量
let DURATION = 500; //轮播动画持续的时间
let bannerImg=document.getElementById("banner_img")
let bannerIndex=document.getElementById("banner_index");
let lis=bannerIndex.children;
let moveTo=function(to){
  if(to==undefined){
    to=i+1;
  }
  // 如果滚动从0开始, 添加滚动动画
  if(i==0){
    if(to>i){ //下一张
      bannerImg.className="transition";
    }else{ //i=0,上一张
      bannerImg.className="";
      bannerImg.style.marginLeft=-LIWIDTH*LICOUNT+"px";
      setTimeout(() => {
        moveTo(LICOUNT-1);
      }, 100);
      return;
    }
  }
  i=to;
  // 利用margin-left属性, 计算每次移动的距离
  bannerImg.style.marginLeft=-i*LIWIDTH+"px";
  // 清除所有lis的属性名
  for(let li of lis){
    li.className=""
  }
  if(i==LICOUNT){
    i=0;
    // 若显示的是最后一张图, 再次点击无缝跳转克隆的第1张图片
    // bannerImg.className="";
    // bannerImg.style.marginLeft=0;
    setTimeout(() => {
      bannerImg.className="";
      bannerImg.style.marginLeft=0;
    }, DURATION);
    // 设置当前li属性为active
  }
  lis[i].className="active";
}
// 2.2 上一张, 下一张
let prevImg=document.getElementById("prevImg");
let nextImg=document.getElementById("nextImg");
let canClick=true;
nextImg.addEventListener("click",function(){
  move(1);
})
let move=function(n){
  if(canClick){
    moveTo(i+n);
    canClick=false;
    setTimeout(() => {
      canClick=true;
    }, DURATION+100);
  };
}
prevImg.addEventListener("click",function(){
  move(-1);
  console.log(i);
})
// 2.3自动轮播
let t=3000; //设置轮播时间
let timer=setInterval(()=>{
  moveTo(); //设置定时器
},t)
// 鼠标经过时清除定时器
let banner=document.getElementsByClassName("banner-content")[0];
banner.addEventListener("mouseover",function(){
  clearInterval(timer);
})
banner.addEventListener("mouseout",function(){
  timer=setInterval(() => {
    moveTo(); //设置定时器
  },t)
})
// 2.4 导航按钮实现
bannerIndex.onclick=function(e){
  let li=e.target;
  if(canClick){
    if (li.nodeName == "LI") {
      if (li.className !== "active") {
        for (var i = 0; i < lis.length; i++) {
          if (lis[i] == li) {
            break;
          }
        }
        moveTo(i);
        setTimeout(() => {
          canClick = true;
        }, DURATION);
      }
    }
  }
}

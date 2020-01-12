(
  function(){
        // 选项卡切换
    // 1. 获取所有a标签, li标签,和对应显示div标签的元素对象
    let tabs=document.querySelectorAll("[data-click=tab]");
    let lis=document.querySelectorAll("#tab li");
    let divs=document.querySelectorAll("#container div")
    // 2. 添加点击事件， 所有li标签取消激活, 所有div隐藏
    for(let tab of tabs){
      tab.onclick=function(){
        // 遍历所有li
        for(let li of lis){
          li.className=""
        }
        // 遍历所有div
        for(let div of divs){
          div.style.display="none";
        }
        // 3. 设置当前点击a标签为激活状态
        this.parentElement.className="active";
        // 获取当前a标签对应的div, 先获取id, 再通过id找
        let id=this.dataset.target;
        let div=document.getElementById(id);
        // 4. 设置对应div为显示
        div.style.display="block";
      }
    }
  }
)()
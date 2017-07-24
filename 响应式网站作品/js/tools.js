//滚轮时间封装
function addMouseWheel(init){
	init.ele.onmousewheel = fn
	init.ele.addEventListener('DOMMouseScroll',fn)
	function fn(ev){
		//true:上，false:下
		var onOff = null;
		if(ev.wheelDelta){
			//其他
			if(ev.wheelDelta>0){
				onOff = true;
			}else{
				onOff = false;
			}
		}else{
			//火狐
			if(ev.detail<0){
				onOff = true;
			}else{
				onOff = false;
			}
		}
		if(onOff){
			//上
			typeof init.fnUp == 'function' && init.fnUp();
		}else{
			//下
			typeof init.fnDown == 'function' && init.fnDown();
		}
		
	}
}

var page=0;
Tab();
navClick();
function Tab(){
	for(var i=0;i<nav_li.length;i++){
		nav_li[i].className='';
	}
	main.style.top=-window.innerHeight*page+'px';
	nav_li[page].className='active';
}

addMouseWheel({
	ele:main,
	fnUp:function(){
		page--;
		if(page<0){
			page=0;
		}
		Tab();
	},
	fnDown:function(){
		
		page++;
		if(page>section.length-1){
			page=section.length-1;
		}
		Tab();
	}
})

function navClick(){
	for(var i=0;i<nav_li.length;i++){
		nav_li[i].index=i;
		nav_li[i].onclick=function(){
			page=this.index;
			Tab();
		}
	}
}

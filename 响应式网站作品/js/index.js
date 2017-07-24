var main=document.getElementById('main');
var section=main.getElementsByTagName('section');
var w=document.body.clientWidth;
var h=document.documentElement.clientHeight;
var nav=document.querySelector('.nav');
var nav_li=nav.getElementsByTagName('li');
for(var i=0;i<section.length;i++){
	section[i].style.width=w+'px';
	section[i].style.height=h+'px';
	section[i].style.backgroundSize=''+w+'px '+h+'px';
}

var oHtml = document.getElementsByClassName("html")[0];//有兼容性问题
var oProgress = document.getElementsByClassName("progress")[0];
setInterval(function(){
	if(oHtml.offsetWidth >= oProgress.offsetWidth){
		oHtml.style.width = 0;
	}
	oHtml.style.width = oHtml.offsetWidth + 10 + "px";

}, 30);

//回到顶部














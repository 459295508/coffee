/**
 * Created by Administrator on 2016/9/13.
 */
window.onload=function(){
    var oDiv=document.getElementById('scroll');
    var oUl=oDiv.getElementsByTagName('ul')[0];
    var aLi=oUl.getElementsByTagName('li');
    var oLeft=oDiv.getElementsByTagName('span')[0];
    var oRight=oDiv.getElementsByTagName('span')[1];
    oUl.innerHTML+=oUl.innerHTML;
    var timer=null;
    var iSpeed=0;
    function doMove(){
        oUl.style.left=oUl.offsetLeft+iSpeed+'px';
        if(oUl.offsetLeft<-oUl.offsetWidth/2){
            oUl.style.left='0px';
        }else if(oUl.offsetLeft>0){
            oUl.style.left=-oUl.offsetWidth/2+'px';
        }
    }
    oLeft.onmouseover=function(){
        timer=setInterval(doMove,100);
        iSpeed=-5;
    };
    oLeft.onmouseout=function(){
        clearInterval(timer);
    };
    oRight.onmouseover=function(){
        timer=setInterval(doMove,100);
        iSpeed=5;
    };
    oRight.onmouseout=function(){
        clearInterval(timer);
    }
};
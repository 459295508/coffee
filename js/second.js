/**
 * Created by Administrator on 2016/9/1.
 */
window.onload=function(){
    var lis=null;
    var oUl=document.getElementById('header').getElementsByTagName('ul')[0];
    lis=Array.prototype.slice.call(oUl.getElementsByClassName('menu'),0);
    var aA=oUl.getElementsByClassName('second');
//		alert(lis.length);
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            for(var i=0;i<lis.length;i++){
                aA[i].style.display='block';
            }
            //this.style.display='none';
        };
        lis[i].onmouseout=function(){
            for(var i=0;i<lis.length;i++){
                aA[i].style.display='none';
            }
        };
    }
};


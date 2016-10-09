/**
 * Created by Administrator on 2016/9/12.
 */
window.onload=function(){
    var oDiv=document.getElementById('news');
    var oUl=oDiv.getElementsByTagName('ul')[0];
    var aLi=oUl.getElementsByTagName('li');
    var tab_content=document.getElementById('tab_content');
    var aP=tab_content.getElementsByTagName('p');
    tab_content.style.height=aP[0].offsetHeight+'px';
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onmouseover=function(){
            if(this.className=='cur')return;
            for(var i=0;i<aLi.length;i++){
                aLi[i].className='';
//						aP[i].style.opacity='0';
                aP[i].className=' disappear'
            }
            this.className+=' cur';
//				aP[this.index].style.opacity=' 1';
            aP[this.index].className=' show';
            document.getElementById('tab_content').style.height=aP[this.index].offsetHeight+'px';
        }
    }
};

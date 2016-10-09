/**
 * Created by Administrator on 2016/9/12.
 */
window.onload=function(){
    var oLeft=document.getElementById("left");
    var oRight=document.getElementById("right");
    var oImg=document.getElementById("pic");
    var oBanner=document.getElementById("banner");
    var aDiv=oBanner.getElementsByTagName("div");
    var num=0;
    var timer=null;
    var aSrc=[
        'images/pic1.png',
        'images/b8.png',
        'images/banner-1.png',
        'images/pic4.png'];
    oLeft.onclick=function(){<!--����ϼ�ͷ-->
        clearInterval(timer);
        num--;
        if(num==-1){num=aSrc.length-1;}
        modify();
        timer=setInterval(autoPlay,1000);
    };
    oRight.onclick=function(){<!--����¼�ͷ-->
        clearInterval(timer);
        num++;
        if(num==aSrc.length){num=0;}
        modify();
        timer=setInterval(autoPlay,1000);
    };
    for(var i=0;i<aDiv.length;i++){<!--����ĸ�СԲ��-->
        aDiv[i].index=i;
        aDiv[i].onclick=function(){
            clearInterval(timer);
            num=this.index;
            modify();
            timer=setInterval(autoPlay,1000);
        }
    }
    function modify(){
        oImg.src=aSrc[num];//�ı�ͼƬ·��
        for(var j=0;j<aDiv.length;j++){<!--���С���-->
            aDiv[j].className="circle"+j
        }
        aDiv[num].className+=" active";
    }
    function autoPlay(){//�Զ�����
        num++;
        if(num==aSrc.length){num=0}
        modify();
    }
    timer=setInterval(autoPlay,2000);//��ʱ����ÿ��1000ms��1s������һ��autoPlay()����
};

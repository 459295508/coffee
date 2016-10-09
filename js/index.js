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
    oLeft.onclick=function(){<!--点击上箭头-->
        clearInterval(timer);
        num--;
        if(num==-1){num=aSrc.length-1;}
        modify();
        timer=setInterval(autoPlay,1000);
    };
    oRight.onclick=function(){<!--点击下箭头-->
        clearInterval(timer);
        num++;
        if(num==aSrc.length){num=0;}
        modify();
        timer=setInterval(autoPlay,1000);
    };
    for(var i=0;i<aDiv.length;i++){<!--点击四个小圆点-->
        aDiv[i].index=i;
        aDiv[i].onclick=function(){
            clearInterval(timer);
            num=this.index;
            modify();
            timer=setInterval(autoPlay,1000);
        }
    }
    function modify(){
        oImg.src=aSrc[num];//改变图片路径
        for(var j=0;j<aDiv.length;j++){<!--变成小红点-->
            aDiv[j].className="circle"+j
        }
        aDiv[num].className+=" active";
    }
    function autoPlay(){//自动播放
        num++;
        if(num==aSrc.length){num=0}
        modify();
    }
    timer=setInterval(autoPlay,2000);//定时器：每隔1000ms（1s）调用一次autoPlay()函数
};

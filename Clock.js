console.log(Date());
var hh=0;
var mm=0;
var am_pm;
function liveDate(){
    var date = new Date();
    hh=date.getHours();
    mm=date.getMinutes();
    var ss=date.getSeconds();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var dy=date.getDay();
    console.log(hh,mm,ss,dd,mo,yy,dy);

    am_pm='Am'
    if(hh>=12){
        am_pm='Pm'
        if(hh>12){
            hh-=12;
        }
    }
    if(hh==0){
    hh=12;
    }
    if(hh==0){
        hh=12;
    }
    var allMon=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    mo=allMon[mo];
    console.log(mo);
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var img=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
    var img=["./Assets/Images/0.jpg","./Assets/Images/1.jpg","./Assets/Images/2.jpg","./Assets/Images/3.jpg","./Assets/Images/4.jpg","./Assets/Images/5.jpg","./Assets/Images/6.jpg"]
    document.body.style.backgroundImage=`url(${img[dy]})`

    dy=days[dy]
    document.getElementById("time").innerHTML=`${hh}:${mm}${am_pm}`
    document.getElementById("date").innerHTML=`${dd}/${mo}/${yy}`
    document.getElementById("day").innerHTML=dy;
    document.getElementById("sec").innerHTML=ss;

    setTimeout(liveDate,1000);
}
liveDate()
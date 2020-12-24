const days = document.getElementById("days"),
    minutes = document.getElementById("minutes"),
    hours = document.getElementById("hours"),
    second = document.getElementById("seconds");

    setInterval(()=>{
        findDate();
    },1000);
    function findDate(){
        let currentTime=new Date(),
        christmasYear=currentTime.getFullYear();

        if(currentTime.getMonth()==11 && currentTime.getDate()>26)
        {
            christmasYear+=1;
        }
        let christmasTime=new Date(christmasYear,11,26);
        let dateDiff=Math.floor(christmasTime-currentTime);
        let Days=0,HOURS=0,MINUTES=0,SECONDS=0;
        if(currentTime.getMonth()!=11 || (currentTime.getMonth()==11 && currentTime.getDate()!=26)){
            Days=Math.floor(dateDiff/(1000*60*60*24));
            HOURS=Math.floor((dateDiff)%(1000*60*60*24)/(1000*60*60));
            MINUTES=Math.floor((dateDiff%(1000*60*60))/(1000*60));
            SECONDS=Math.floor((dateDiff)%(1000*60)/1000);
        }
       days.innerHTML=Days;
       minutes.innerHTML=MINUTES-25;
       hours.innerHTML=HOURS-17;
       second.innerHTML=SECONDS;
       if(Days==0 && MINUTES==0 && HOURS==0 && SECONDS==0)
       {
           document.getElementById("wish").classList()
       }
    }

window.onload = () => {
    document.querySelector("#calculate").onclick = calculate;

}

function calculate(){
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    const endTime = new Date(date + " "+ time);

    setInterval(()=> 
        calculatetime(endTime), 1000);
}

function calculatetime(endTime){
    const currentTime = new Date();

    const days = document.querySelector("#countdown-days");
    const hours = document.querySelector("#countdown-hours");
    const minutes = document.querySelector("#countdown-minutes");
    const seconds = document.querySelector("#countdown-seconds");


     
   if(endTime > currentTime){
    const timeleft = (endTime-currentTime)/1000;
    days.innerText = Math.floor(timeleft /(24*60*60)); 
    hours.innerText = Math.floor(timeleft /(60*60)%24); 
    minutes.innerText = Math.floor(timeleft /(60)%60); 
    seconds.innerText = Math.floor(timeleft %60); 

   } else {
    days.innerText = 0;
    hours.innerText = 0;
    minutes.innerText = 0;
    seconds.innerText = 0;
   }
}
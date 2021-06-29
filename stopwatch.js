ms = 0;
sec = 0;
min = 0;

const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");


start.addEventListener("click", () => {

playButton = setInterval(() => {
  start.disabled = true;
    ms += 1;
    if (ms== 100){
        ms= 0;
        sec += 1;
        if(sec == 60){
            sec = 0;
            min += 1;
            if(min == 60){
                min = 0;
            }
        }
    }
    document.querySelector(".ms").innerHTML = ms < 10 ? "0" + ms :  ms;
    document.querySelector(".sec").innerHTML = sec < 10 ? "0" + sec :  sec;
    document.querySelector(".min").innerHTML = min < 10 ? "0" + min :  min;

}, 10);
})

stop.addEventListener("click", () => {
    start.disabled = false;
    
    ms = 0;
    sec= 0;
    min= 0;

      clearInterval(playButton);

      document.querySelector(".ms").innerHTML = "00";
      document.querySelector(".sec").innerHTML = "00";
      document.querySelector(".min").innerHTML = "00";
})


pause.addEventListener("click", () =>{

    start.disabled = false;

    clearInterval(playButton);

})


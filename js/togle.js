const toggle =document.querySelector(".bar_toggle");
const Close =document.querySelector(".close_btn");
const bar = document.querySelector(".bar");
const tog1 = document.querySelector(".tog1");
const tog2 = document.querySelector(".tog2");
const sgin_up = document.querySelector(".sgin-up");
const log_in = document.querySelector(".log-in");
const search = document.querySelector(".serc");

toggle.addEventListener("click" , function(){
      bar.classList.toggle("show-bar");
});

Close.addEventListener("click" , function(){
      bar.classList.remove("show-bar");
});

/*      */

tog1.addEventListener("click" , function(){
      log_in.classList.toggle("open1");
      tog2.classList.toggle("active2");
      toggle.classList.toggle("active0");
      search.classList.toggle("active3");
 });

tog2.addEventListener("click" , function(){
     sgin_up.classList.toggle("open2");
     tog1.classList.toggle("active1");
     toggle.classList.toggle("active0");
     search.classList.toggle("active3");
});


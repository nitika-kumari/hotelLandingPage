var swiper = new Swiper('.myswiper', {
    direction: 'vertical',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay:{
        delay:1600,
    }
  });


  document.addEventListener("DOMContentLoaded" , ()=>{
    function counter(id,start,end, duration){
      let obj = document.getElementById(id),
      current = start,
      range = end-start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration/range)),
      timer = setInterval( ()=>{
        current +=increment;
        obj.textContent = current;
        if(current == end){
          clearInterval(timer);
        }
      }, step);
    }
    counter("count1",0,1236,3000);
    counter("count2",822,2154,100);
    counter("count3",453,2093,3000);
    counter("count4",0,1296,3000);
  })
  
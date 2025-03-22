const icon = document.getElementById('youtube-icon');
    const player = document.getElementById('youtube-player');

    icon.addEventListener('click', () => {
      player.innerHTML = `
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/4sspVwvJy38?loop=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `;
      player.style.display = 'block';
    });

  
//counter
// const counters=document.querySelectorAll(".counters span");
// const container=document.querySelectorAll(".counters");

// let activated=false;
// //scroll event
// window.addEventListener("scroll",()=>{
//   if(pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated===false)
//   {
//     counters.forEach(counter=>{
//       counter.innerText=0;
//       let count=0;
//       function updateCount(){
//         const target=parseInt(counter.dataset.count)
//         if(count<target){
//           count++;
//           counter.innerText=count;
//           setTimeout(updateCount,10);
//         }else{
//           counter.innerText=target;
//         }
//       }
//       updateCount();
//       activated=true;
//     });

//   }else if(
//     pageXOffset<container.offsetTop-container.offsetHeight-500
//     || pageXOffset===0
//     && activated===true
//   ){
//     counters.forEach(counter=>{
//       counter.innerText=0;
//     });
//     activated=false;
//   }
// });
//counter
// let valueDisplays = document.querySelectorAll(".num");
// let interval = 4000;

// valueDisplays.forEach((valueDisplay) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function () {
//     startValue += 1;
//     valueDisplay.textContent = startValue;
//     if (startValue == endValue) {
//       clearInterval(counter);
//     }
//   }, duration);
// });



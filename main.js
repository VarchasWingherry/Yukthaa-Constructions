// const counts = document.querySelectorAll('.count')
// const speed = 97

// counts.forEach((counter) => {
//     function upDate(){
//         const target = Number(counter.getAttribute('data-target'))
//         const count = Number(counter.innerText)
//         const inc = target / speed        
//         if(count < target){
//             counter.innerText = Math.floor(inc + count) 
//             setTimeout(upDate, 15)
//         }else{
//             counter.innerText = target
//         }
//     }
//     upDate()
// })
// const counters = document.querySelectorAll('.count');
// const speed = 97;

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       updateCounter(entry.target);
//     }
//   });
// });

// counters.forEach((counter) => {
//   observer.observe(counter);
// });

// function updateCounter(counter) {
//   const target = Number(counter.getAttribute('data-target'));
//   let count = 0;
//   const inc = target / speed;

//   const update = () => {
//     if (count < target) {
//       counter.innerText = Math.floor(inc + count);
//       count += inc;
//       setTimeout(update, 15);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   update();
// }
const counters = document.querySelectorAll('.count');
const speed = 97;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      updateCounter(entry.target);
    }
  });
});

counters.forEach((counter) => {
  observer.observe(counter);
});

function updateCounter(counter) {
  const target = Number(counter.getAttribute('data-target'));
  let count = 0;
  const inc = target / speed;

  const update = () => {
    if (count < target) {
      counter.innerText = Math.floor(inc + count);
      count += inc;
      setTimeout(update, 15);
    } else {
      counter.innerText = target;
    }
  };

  update();
}
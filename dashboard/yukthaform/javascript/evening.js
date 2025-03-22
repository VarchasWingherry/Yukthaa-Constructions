let checkbox=document.getElementById("morningcheckbox");
checkbox.addEventListener("click",()=>{
    window.location.href="morning.html"
})
const droparea = document.getElementById("droparea");
const input=document.getElementById("input-file");
const img=document.querySelector(".img-view");
let p= document.querySelector("p")
let i = document.querySelector(".i");
let span= document.querySelector(".span");
input.addEventListener("change",upload);
function upload(){
    let imglink= URL.createObjectURL(input.files[0]);
     img.style.backgroundImage=`url(${imglink})`;
     p.innerText=""
     i.style.display="none";
     span.innerText="";
    // span.innerText=""
     //img.textContent="";
     img.style.border=0;
}
droparea.addEventListener("dragover",function(e){
    e.preventDefault()
})
droparea.addEventListener("drop",function(e){
    e.preventDefault();
    input.files=e.dataTransfer.files;
    upload();
});


const droparea1 = document.getElementById("droparea1");
const input1=document.getElementById("input-file1");
const img1=document.querySelector(".img-view1");
let p1= document.querySelector(".p1")
let i1 = document.querySelector(".i1");
let span1= document.querySelector(".span1");
input1.addEventListener("change",upload1);
function upload1(){
    let imglink1= URL.createObjectURL(input1.files[0]);
     img1.style.backgroundImage=`url(${imglink1})`;
     p1.innerText=""
     i1.style.display="none";
     span1.innerText="";
    // span.innerText=""
     //img.textContent="";
     img1.style.border=0;
}
droparea1.addEventListener("dragover",function(e){
    e.preventDefault()
})
droparea1.addEventListener("drop",function(e){
    e.preventDefault();
    input1.files=e.dataTransfer.files;
    upload1();
});


const droparea2 = document.getElementById("droparea2");
const input2=document.getElementById("input-file2");
const img2=document.querySelector(".img-view2");
let p2= document.querySelector(".p2")
let i2 = document.querySelector(".i2");
let span2= document.querySelector(".span2");
input2.addEventListener("change",upload2);
function upload2(){
    let imglink2= URL.createObjectURL(input2.files[0]);
     img2.style.backgroundImage=`url(${imglink2})`;
     p2.innerText=""
     i2.style.display="none";
     span2.innerText="";
    // span.innerText=""
     //img.textContent="";
     img2.style.border=0;
}
droparea2.addEventListener("dragover",function(e){
    e.preventDefault()
})
droparea2.addEventListener("drop",function(e){
    e.preventDefault();
    input2.files=e.dataTransfer.files;
    upload2();
});



const droparea3 = document.getElementById("droparea3");
const input3=document.getElementById("input-file3");
const img3=document.querySelector(".img-view3");
let p3= document.querySelector(".p3")
let i3 = document.querySelector(".i3");
let span3= document.querySelector(".span3");
input3.addEventListener("change",upload3);
function upload3(){
    let imglink3= URL.createObjectURL(input3.files[0]);
     img3.style.backgroundImage=`url(${imglink3})`;
     p3.innerText=""
     i3.style.display="none";
     span3.innerText="";
    // span.innerText=""
     //img.textContent="";
     img3.style.border=0;
}
droparea3.addEventListener("dragover",function(e){
    e.preventDefault()
})
droparea3.addEventListener("drop",function(e){
    e.preventDefault();
    input3.files=e.dataTransfer.files;
    upload3();
});


const droparea4 = document.getElementById("droparea4");
const input4=document.getElementById("input-file4");
const img4=document.querySelector(".img-view4");
let p4= document.querySelector(".p4")
let i4 = document.querySelector(".i4");
let span4= document.querySelector(".span4");
input4.addEventListener("change",upload4);
function upload4(){
    let imglink4= URL.createObjectURL(input4.files[0]);
     img4.style.backgroundImage=`url(${imglink4})`;
     p4.innerText=""
     i4.style.display="none";
     span4.innerText="";
    // span.innerText=""
     //img.textContent="";
     img4.style.border=0;
}
droparea4.addEventListener("dragover",function(e){
    e.preventDefault()
})
droparea4.addEventListener("drop",function(e){
    e.preventDefault();
    input4.files=e.dataTransfer.files;
    upload4();
});


const droparea5= document.getElementById("droparea5");
const input5=document.getElementById("input-file5");
const img5=document.querySelector(".img-view5");
let p5= document.querySelector(".p5")
let i5 = document.querySelector(".i5");
let span5= document.querySelector(".span5");
input5.addEventListener("change",upload5);
function upload5(){
    let imglink5= URL.createObjectURL(input5.files[0]);
     img5.style.backgroundImage=`url(${imglink5})`;
     p5.innerText=""
     i5.style.display="none";
     span5.innerText="";
    // span.innerText=""
     //img.textContent="";
     img5.style.border=0;
}
droparea5.addEventListener("dragover",function(e){
    e.preventDefault()
    //console.log("a")
})
droparea5.addEventListener("drop",function(e){
    e.preventDefault();
    input5.files=e.dataTransfer.files;
    upload5();
});





// video upload  javascript

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var fileInput = document.getElementById('videoFile');
    var videoPlayer = document.getElementById('videoPlayer');
  
    if (fileInput.files.length > 0) {
      var file = fileInput.files[0];
      var fileURL = URL.createObjectURL(file);
      // console.log(fileURL)
      // Display video
      videoPlayer.innerHTML = '<video controls><source src="' + fileURL + '" type="video/mp4">Your browser does not support the video tag.</video>';
    } else {
      alert('Please select a video file.');
    }
  });
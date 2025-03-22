let add = document.querySelector(".add");
let remove = document.querySelector(".remove");
let tablecontainer=document.querySelector(".table-container");
let price1=document.getElementById("Price1");
let gst=document.querySelector(".gst");
let plus=document.querySelector(".plus");
let train=document.getElementById("train");
let p1=document.querySelector(".p1")
let p2=document.querySelector(".p2")
let p3=document.querySelector(".p3")
let continues = document.querySelector(".continue")
let quotationtotal=document.querySelector(".quotationtotal")
let id=0;
let arr1=[];
add.addEventListener("click",()=>{
    let arr=id++;
   // console.log("hello")
   var newTable = document.createElement('table');
 newTable.className="table";
// console.log(newTable)
  newTable.innerHTML=`
  <tbody>
     <tr>
        <td><input type="text"></td>
        <td><input  type="text"></td>
        <td><input type="text"></td>
        <td><input id="${arr}" type="text"></td>
   </tr>
 </tbody>
 `
 
plus.addEventListener("click",()=>{
    let id2= document.getElementById(arr);
    //console.log(id2.value);
    arr1.push(Number(id2.value));
    const sum = arr1.reduce((accumulator, currentValue) => {
      return accumulator + currentValue; }, 0);
      let zoom8=sum+Number(train.value)
     // price1.value=zoom8;
      p1.innerText=zoom8;
      quotationtotal.value=zoom8;
     // gst.style.display="block";
      add.disabled=true;
      plus.disabled=true;})
      remove.addEventListener("click",()=>{
        tablecontainer.removeChild(newTable);
        arr1=[];
        train.value="";
       // gst.style.display="none";
       // continues.style.display="none";
        add.disabled=false;
        plus.disabled=false;
        p1.innerText="0";
       // p2.innerText="0";
       // p3.innerText="0";

    })
 document.querySelector('.table-container').appendChild(newTable);
})
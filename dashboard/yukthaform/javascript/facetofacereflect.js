let data=window.location.search;
//console.log(data);
let name= document.querySelector(".name");
let note= document.querySelector(".note");
//console.log(name)
let phone= document.querySelector(".phone");
let address= document.querySelector(".address");
let sub= document.querySelector(".sub");
//let subject= document.querySelector(".subject");
let h2 =document.querySelector("h2")
//console.log(h2)
let getdata= new URLSearchParams(data)
name.value=getdata.get("name");
phone.value=getdata.get("phone no")
address.value=getdata.get("add")
sub.value=getdata.get("sub")
note.value=getdata.get("note")
h2.innerText=`${getdata.get("name")} meeting is schedule at ${getdata.get("date")}`;
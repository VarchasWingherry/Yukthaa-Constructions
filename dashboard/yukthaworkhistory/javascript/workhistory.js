let data =[
    {name:"R Tanusree", date:"11.03.2004",project:"Apartment",RegNo:"2132",EmployeeName:"john",Address:"Hyderabad",morning:"morninghistory.html",evening:"eveninghistory.html"},
    {name:"saina", date:"14.05.2005",project:"villa",RegNo:"3423",EmployeeName:"vijay",Address:"Andhara Pradesh",morning:"morninghistory.html",evening:"eveninghistory.html"},
    
]
 let name = document.querySelector(".name")
 let date = document.querySelector(".date")
 let employee=document.querySelector(".employee");
 let project=document.querySelector(".project");
 let regno=document.querySelector(".Regno");
 let add=document.querySelector(".Add");
 let boxes2=document.querySelector(".box2");
 let names = document.querySelector(".names")
 let morning = document.querySelector(".morning")
 let evening = document.querySelector(".evening")
 let projects = document.querySelector(".projects")


 let box1=document.querySelector(".main-box1");
 //let add=document.querySelector(".Add");
 

 
let submit = document.querySelector(".submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    if(data[0].name==name.value&&data[0].EmployeeName==employee.value&&data[0].RegNo==regno.value&&data[0].project==project.value&&data[0].date==date.value&&data[0].Address==add.value){
        box1.style.display="block"
        projects.value=data[0].project;
        names.value=data[0].name;
        morning.href=data[0].morning;
        evening.href=data[0].evening;
        morning.innerText="Morning1.Pdf";
        evening.innerText="Evening1.Pdf";
        
    }
   else if(data[1].name==name.value&&data[1].EmployeeName==employee.value&&data[1].RegNo==regno.value&&data[1].project==project.value&&data[1].date==date.value&&data[1].Address==add.value){
        box1.style.display="block" 
        projects.value=data[1].project;
        names.value=data[1].name;
        morning.href=data[1].morning;
        evening.href=data[1].evening;
        morning.innerText="Morning.Pdf";
        evening.innerText="Evening.Pdf";
     }
    else{
        alert("You Filled Wrong Data Please Check Once Again!")
    }

})
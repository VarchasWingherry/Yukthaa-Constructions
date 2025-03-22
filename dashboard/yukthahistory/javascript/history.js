let data =[
    {name:"", date:"",project:"",RegNo:"",EmployeeName:"",Address:"",quotation:"",invoice:"",receipt:"",purchasing:"",agreement:"",followup:"  "},
    {name:"saina", date:"14.05.2005",project:"villa",RegNo:"3423",EmployeeName:"vijay",Address:"Andhara Pradesh",quotation:"quotationhistory.html",invoice:"invoicehistory.html",receipt:"receipthistory.html",purchasing:"purchasinghistory.html",agreement:"agreementhistory.html",followup:"Face To Face"},
    
]
 let name = document.querySelector(".name")
 let date = document.querySelector(".date")
 let employee=document.querySelector(".employee");
 let project=document.querySelector(".project");
 let regno=document.querySelector(".Regno");
 let add=document.querySelector(".Add");
 let boxes2=document.querySelector(".box2");

 let quotation = document.querySelector(".quotation")
let invoice = document.querySelector(".invoice")
 let receipt=document.querySelector(".receipt");
 let agreement=document.querySelector(".agreement");
 let purchasing=document.querySelector(".purchasing");
 let box1=document.querySelector(".main-box1");
 //let add=document.querySelector(".Add");
 

 
let submit = document.querySelector(".submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    if(data[0].name==name.value&&data[0].EmployeeName==employee.value&&data[0].RegNo==regno.value&&data[0].project==project.value&&data[0].date==date.value&&data[0].Address==add.value){
        box1.style.display="block"
       quotation.href=data[0].quotation
      invoice.href=data[0].invoice
       receipt.href=data[0].receipt
       agreement.href=data[0].agreement
       purchasing.href=data[0].purchasing
       quotation.innerText="quotation.pdf"
       invoice.innerText="invoice.pdf"
        receipt.innerText="receipt.pdf"
        agreement.innerText="agreement.pdf"
        purchasing.innerText="purchasing.pdf"
    }
   else if(data[1].name==name.value&&data[1].EmployeeName==employee.value&&data[1].RegNo==regno.value&&data[1].project==project.value&&data[1].date==date.value&&data[1].Address==add.value){
        box1.style.display="block" 
       quotation.href=data[1].quotation
       invoice.href=data[1].invoice
        receipt.href=data[1].receipt
        agreement.href=data[1].agreement
        purchasing.href=data[1].purchasing
        quotation.innerText="quotation1.pdf"
        invoice.innerText="invoice1.pdf"
         receipt.innerText="receipt1.pdf"
         agreement.innerText="agreement1.pdf"
         purchasing.innerText="purchasing1.pdf"
     }
    else{
        alert("You Filled Wrong Data Please Check Once Again!")
    }

})
//data[0].name==name.value||data[0].date==date.value||data[0].add==add.value||data[0].RegNo==regno.value||data[0].EmployeeName==employee.value||data[0].project==project.value
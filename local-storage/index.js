document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value;
    localStorage.setItem("name",name)
    localStorage.setItem("age",age)
   form.reset()

})
document.getElementById("btn").addEventListener("click",function(){
    let tr=document.createElement("tr")
    let td=document.createElement("td");
    let td1=document.createElement("td")
    td.innerText=localStorage.getItem("name")
    td1.innerText=localStorage.getItem("age")

    tr.append(td,td1)
    document.querySelector("tbody").appendChild(tr)
})

document.getElementById("fetchUsersBtn").addEventListener("click",fetchdata)
function fetchdata(){
    fetch("https://reqres.in/api/users")
    .then (response=>response.json())
    .then(data=>{
        let output="";
      data.data.forEach(user=>{
        output+=` <div id="user-card">
        <img src="${user.avatar}" alt="">
        <div class="user-details"
>
            <span class="name">${user.first_name}</span>
               <span class="email">${user.email} </span> 
                
                
         </div>
        
        </div>`
      })
      document.getElementById("usersList").innerHTML=output;
    })

}
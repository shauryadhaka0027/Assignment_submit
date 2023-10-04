async function fetchUserData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        display(data)
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchUserData('https://jsonplaceholder.typicode.com/todos');
let tbody=document.querySelector("tbody")
function display(data){
    data.forEach(element => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");  
        let td3=document.createElement("td")
        td1.textContent=element.id
        td2.textContent=element.title
        td3.textContent=element.completed
        tr.append(td1,td2,td3)
        tbody.appendChild(tr)
    });
   
}
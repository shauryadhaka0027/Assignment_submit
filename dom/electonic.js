import navbar from "./utili.js"
document.getElementById("header").innerHTML=navbar()

   async function dom(url){
    try{
        let res=await fetch(url)
        let data=await res.json()
        console.log(data)
        display(data)
    }catch{
        alert("Something wrongs")
    }
}
dom("https://fakestoreapi.com/products/category/jewelery")
 let root=document.getElementById("root")

 function display(data){
    data.forEach(element => {
      let div=document.createElement("div")
      let img=document.createElement("img")
      let p=document.createElement("p")
      let p1=document.createElement("p")
      img.src=element.image
      p.textContent=`Price ${element.price}`
      p1.textContent=element.title
      div.append(img,p,p1)
      root.appendChild(div)
    });
  
  }
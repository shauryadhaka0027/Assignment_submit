let root=document.getElementById("root")
let SearchBox=document.getElementById("box")
async function fetchApi(url){
    try{
   let res=await fetch(url)
   let data=await res.json()
    let movie=data.Search
    display(movie)

    }
    catch (error){
        console.log("this is error",error)
    }

}

  


let timer= null;
  SearchBox.addEventListener("input", function(){
   clearTimeout(timer)
   timer=setTimeout(()=>{

    fetchApi(`http://www.omdbapi.com/?apikey=1f793426&s=${SearchBox.value}`)
   },500)
  }) 

  function display(data) {
    root.innerHTML = '';

    data.forEach(function (ele) {
        let div1 = document.createElement("div");
        div1.className = "product-card";
        let img = document.createElement("img");
        img.src = ele.Poster;
        let title1 = document.createElement("p");
        title1.textContent = `Movie Title : ${ele.Title}`;
        let year = document.createElement("p");
        year.textContent = `Movie Year : ${ele.Year}`;
        let imb = document.createElement("p");
        imb.textContent = `movie.imdbID : ${ele.imdbID}`
        div1.append(img, title1, year, imb);

        root.appendChild(div1);
    });
}







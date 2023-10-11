let root=document.getElementById("root")
let SearchBox=document.getElementById("box")
async function fetchApi(url){
    try{
   let res=await fetch(url)
   let data=await res.json()
    let movie=data.Search
    return movie

    }
    catch (error){
        console.log("this is error",error)
    }

}

  


function debounce(func, delay) {
    let timer;
    return function deb(query) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(query);
        }, delay);
    };
}

let debounceSearch= debounce(display,500)

  SearchBox.addEventListener("input", async function(e){
    let inputValue=e.target.value
    try{
       let data= await fetchApi(`http://www.omdbapi.com/?apikey=1f793426&s=${inputValue}`)
       debounceSearch(data)

    }
    catch (error){
        console.log("error",error)
    }
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







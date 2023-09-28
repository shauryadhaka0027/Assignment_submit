document.getElementById("btn").addEventListener("click", function () {

    let search1 = document.getElementById("search").value;
    let rootsss = document.getElementById("mid");

    fetch(`https://www.omdbapi.com/?apikey=1f793426&s=${search1}`)
        .then(response => response.json())
        .then(function (movieList) {
            let movies = movieList.Search;
            
            display(movies);

        }).catch(function (error) {
            console.log(error);
        });

    function display(data) {
        rootsss.innerHTML = "";
        data.forEach(function (movie) {
          console.log(movie)
            let div1 = document.createElement("div");
            div1.className="product-card"
            let img = document.createElement("img");
            img.src = movie.Poster;
            let title1 = document.createElement("p");
            title1.textContent = `Movie Title : ${movie.Title}`;
            let year=document.createElement("p")
            year.textContent=`Movie Year : ${movie.Year}`;
            let imb=document.createElement("p")
        imb.textContent=`movie.imdbID : ${movie.imdbID}`
            div1.append(img,title1,year,imb);
           
            rootsss.appendChild(div1);
        });
    }
    document.getElementById("search").value = "";
});



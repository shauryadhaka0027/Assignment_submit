let root = document.getElementById("root");
let SearchBox = document.getElementById("box");

async function fetchApi(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        let movie = data.Search;
        return movie;
    } catch (error) {
        console.log("this is error", error);
    }
}

function throttle(func, delay) {
    let throttling = false;
    function inner(query) {
        if (throttling == false) {
            throttling = true;
            func(query);
            setTimeout(() => {
                throttling = false;
            }, delay);
        }
    }
    return inner;
}

let throttleSearch = throttle(display, 250);

SearchBox.addEventListener("input", async function (e) {
    let inputValue = e.target.value;
    try {
        let data = await fetchApi(`http://www.omdbapi.com/?apikey=1f793426&s=${inputValue}`);
        throttleSearch(data);
    } catch (error) {
        console.log("error", error);
    }
});

function display(data) {
    console.log(data); // Log data for debugging
    root.innerHTML = '';

    if (data && Array.isArray(data)) {
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
            imb.textContent = `movie.imdbID : ${ele.imdbID}`;
            div1.append(img, title1, year, imb);

            root.appendChild(div1);
        });
    }
}








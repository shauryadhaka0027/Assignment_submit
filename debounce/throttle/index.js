let root = document.getElementById("root");
let SearchBox = document.getElementById("box");

async function fetchApi(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        let movie = data.meals;
        display(movie);
        console.log(movie)
    } catch (error) {
        console.log("this is error", error);
    }
}
SearchBox.addEventListener("input", function () {
    let throttling = false;
    if (throttling == false) {
        throttling = true;

        setTimeout(() => {
            const inputValue = SearchBox.value;
            if (inputValue === "") {
                root.innerHTML = ""; 
            } else {
                fetchApi(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
                    .then(() => {
                        throttling = false;
                    })
                    .catch(error => {
                        console.log("Error fetching data:", error);
                        throttling = false;
                    });
            }
        }, 2000);
    }
});


function display(data) {
    console.log(data); 
    root.innerHTML = "";


        data.forEach(function (ele) {
            let div1 = document.createElement("div");
            div1.className = "product-card";
            let img = document.createElement("img");
            img.src = ele.strMealThumb;
            let title1 = document.createElement("p");
            title1.textContent = `Meal Id : ${ele.idMeal}`;
            let year = document.createElement("p");
            year.textContent = `Meal Tags : ${ele.strTags }`;
           
            div1.append(img, title1, year);

            root.appendChild(div1);
        });
    
}








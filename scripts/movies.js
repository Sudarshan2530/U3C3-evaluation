// Implement debouncing for network request

let movies = document.getElementById('movies')

let id;

async function searchMovies(){

    try{
        const search = document.getElementById('search').value;
        const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e4fcf912&s=${search}`) 

        const data = await res.json();

        const movies = data.Search; 
        return movies
    }

    catch (err){
        console.log("err:", err);
    }
}

function appendMovies(data){
    
    movies.innerHTML = null;

    data.forEach(function(elem){
        var div = document.createElement("div");
    
  var img = document.createElement("img");
  img.src = elem.Poster;
    let p = document.createElement('p')
    p.innerText = elem.Title;

    var btn = document.createElement("button");
    btn.textContent = "Book Now";
    btn.addEventListener("click", function () {
     
      
    });

    movies.append(div);
    div.append(img, p, btn)
});

}

async function main(){

    let data = await searchMovies();
    {
        if(data === undefined){
            return false;
        }
    }
   appendMovies(data);

}

function debounce(func, delay){
if(id){
    clearTimeout(id);
}
    id = setTimeout(function(){
        func();
    }, delay);
}
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

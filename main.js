console.log("helleo");
const movieContainer = document.getElementById("movie-container");
//  fetch API link 
fetch("https://api.themoviedb.org/3/movie/popular?api_key=599cb8373b5433fae4643ac47abd2a78&language=en-US&page=1")
  .then(response => {
    if (!response.ok) {
      throw new Error("Something went wrong...");
    }
    return response.json();
  })
  .then(data => {
    console.log(data.results); // This will show an array of movies in your browser console
 data.results.forEach(movie => displayMovie(movie) );
  
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });

  
//display movies in html 
function displayMovie (movie) {
 
  const movieCard = document.createElement("div")
 movieCard.classList.add(
  "bgwhite",
  "rounded-lg",
  "shadow-md",
  "p-4",
  "flex-col",
  "item-center",
  "text-center"
 );

 const image = document.createElement("img");
image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
image.alt = movie.title;
image.className= "w-full h-60 object-cover";

 const title = document.createElement("h3");
title.textContent= movie.title;
title.className= "mt-2 text-lg font-semibold";


 const info = document.createElement("p");
info.textContent =movie.vote_average /10 ;
info.className= "text-gray-600";

 const favBtn = document.createElement("button");
favBtn.textContent = " Favorit";
favBtn.className =  "mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600";



  movieCard.appendChild(image);
  movieCard.appendChild(title);
  movieCard.appendChild(info);
  movieCard.appendChild(favBtn);

  movieContainer.appendChild(movieCard);
}



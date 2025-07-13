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
    console.log(data.results);
    data.results.forEach(movie => displayMovie(movie));
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });

// display movies in html 
function displayMovie(movie) {
   console.log("displayMovie called for:", movie.title); 
  const movieCard = document.createElement("div");
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
  image.className = "w-full h-60 object-cover";

  const title = document.createElement("h3");
  title.textContent = movie.title;
  title.className = "mt-2 text-lg font-semibold";

  const info = document.createElement("p");
  info.textContent = movie.vote_average / 10;
  info.className = "text-gray-600";

  const favBtn = document.createElement("button");
  favBtn.textContent = "Favorit";
  favBtn.className = "mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600";
 console.log(movie.id)
; 
  favBtn.addEventListener("click", () => {
    favoriteListe(movie);
  });

  movieCard.appendChild(image);
  movieCard.appendChild(title);
  movieCard.appendChild(info);
  movieCard.appendChild(favBtn);

  movieContainer.appendChild(movieCard);
}


function favoriteListe(movie) {
  let favorit = JSON.parse(localStorage.getItem("favorit")) || [];

  // check if movie already exists using ID (more reliable)
  let existMovie = favorit.some((m) => m.title === movie.title);
  if (!existMovie) {
    favorit.push(movie);
    localStorage.setItem("favorit", JSON.stringify(favorit));
    alert("You added this Movie to Favorites");
  } else {
    alert(movie.title + " is already in Favorites");
  }
}

 // change the title H1 :
 const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

 const titlePage = document.querySelector("h1");
  titlePage.style.fontFamily = "'Roboto', sans-serif";


//creat footer


const footer = document.createElement("footer");
footer.className = "bg-sky-900 p-6 mt-8 text-white text-center font-bold text-lg flex flex-col items-center";

// Text copyright
const copyright = document.createElement("p");
copyright.textContent = "© 2025 Ahmed Oueslati";
footer.appendChild(copyright);

// Container for icons
const accountLinks = document.createElement("div");
accountLinks.className = "mt-3 flex gap-6";

// GitHub icon link
const githubLink = document.createElement("a");
githubLink.href = "https://github.com/AhmedOues93";
githubLink.target = "_blank";
githubLink.innerHTML = '<i class="fab fa-github fa-2x hover:text-gray-400"></i>';

// LinkedIn icon link
const linkedinLink = document.createElement("a");
linkedinLink.href = "https://www.linkedin.com/in/ahmed-oueslati-b36078373";
linkedinLink.target = "_blank";
linkedinLink.innerHTML = '<i class="fab fa-linkedin fa-2x hover:text-blue-400"></i>';

// Append links
accountLinks.appendChild(githubLink);
accountLinks.appendChild(linkedinLink);
footer.appendChild(accountLinks);

// Add footer to page
document.body.appendChild(footer);




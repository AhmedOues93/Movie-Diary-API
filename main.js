console.log("helleo");

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

  })
  .catch(error => {
    console.error("Fetch error:", error);
  });

  
//display movies in html 
 const display = document.createElement("div")

 

async function Mrequest(){
    try {
       let res = await fetch("http://localhost:8080/Movies/");
       let data = await res.json();
       // console.log(data); // log the data to the console for debugging
       MoviesAllData(data);
       if (!Array.isArray(data.data)) {
           throw new Error('Response data is not an array of movies');
       }
       let movies = data.data;
   } catch (error) {
       console.error(error);
   }
}
Mrequest();
async function Mrequest1(){
    try {
       let res = await fetch("http://localhost:8080/Movies/sort/rating");
       let data = await res.json();
       // console.log(data); 
       MoviesAllData(data);
       if (!Array.isArray(data.data)) {
           throw new Error('Response data is not an array of movies');
       }
       let movies = data.data;
   } catch (error) {
       console.error(error);
   }
}
async function Mrequest2(){
    try {
       let res = await fetch("http://localhost:8080/Movies/sort1/rating");
       let data = await res.json();
       // console.log(data); 
       MoviesAllData(data);
       if (!Array.isArray(data.data)) {
           throw new Error('Response data is not an array of movies');
       }
       let movies = data.data;
   } catch (error) {
       console.error(error);
   }
}

  let pagenum=1;
  function incrementCounter() {
   pagenum++;
   if(pagenum<=12){
     Mrequest5();
   }
   else{
       alert("next page end")
   }
  
}

function decrementCounter() {
   if (pagenum > 1) {
       pagenum--;
       Mrequest5();
   }
}

async function Mrequest5() {
   try {
       let res = await fetch(`http://localhost:8080/Movies/page/${pagenum}`);
       let data = await res.json();
       console.log(data); 
       MoviesAllData(data);
       if (!Array.isArray(data.data)) {
           throw new Error('Response data is not an array of movies');
       }
       let movies = data.data;
   } catch (error) {
       console.error(error);
   }
}
async function Mrequest6(event) {
    event.preventDefault();
    const query = document.getElementById("query").value;
    try{
        let res = await fetch(`http://localhost:8080/Movies/title/${query}`);
        let data = await res.json();
        console.log(data); 
        MoviesAllData(data);
        if (!Array.isArray(data.albums)) {
            throw new Error('Response data is not an array of albums');
        }
        let albums = data.albums;
    } catch (error) {
        console.error(error);
    }
 }
 
function MoviesAllData(data){
 let movies = data;
 const moviewala = document.getElementById("data");
 moviewala.innerHTML = "";
 movies.map(movie => {
   const movieDiv = document.createElement("div"); 
   let image = document.createElement("img");
   image.src = movie.image;
   let title = document.createElement("h1");
   title.innerText = movie.title;
   let year = document.createElement("p");
   year.innerText = `Year: ${movie.year}`;
   let decsc = document.createElement("p");
   decsc.innerText = movie.description;
   let rating = document.createElement("p");
   rating.innerText = `Rating: ${movie.rating}`;
   movieDiv.append(image,title, year, rating,decsc);
   moviewala.append(movieDiv);
 });
}
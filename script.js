const stars = document.querySelectorAll(".star");
let selectedRating = 0;

stars.forEach((star) => {
    star.addEventListener("click", function() {
        selectedRating = Number(this.dataset.value);

        stars.forEach((s) => s.classList.remove("active"))

        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add("active");
        }


    } )
})


function addMovie() {
const title = document.getElementById("title").value
const year = document.getElementById("year").value
const genre = document.getElementById("genre").value
const rating = selectedRating

const movie = {
    title: title,
    year: year,
    genre: genre,
    rating: rating
    };

    let movies = JSON.parse(localStorage.getItem("movies")) || [];

    movies.push(movie);

    localStorage.setItem("movies", JSON.stringify(movies));

    displayMovies();
}

function displayMovies() {

const movieList = document.getElementById("movieList");
movieList.innerHTML = "";

let movies = JSON.parse(localStorage.getItem("movies")) || [];

movies.forEach(movie => {

let stars = "&#9733".repeat(movie.rating);

let movieItem = document.createElement("div");
movieItem.classList.add("movie-item");

movieItem.textContent = `${movie.title} (${movie.year}) - ${movie.genre}, Rating: ${stars}`;

movieList.appendChild(movieItem);

});

}
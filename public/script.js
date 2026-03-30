const stars = document.querySelectorAll(".star");
let selectedRating = 0;
let editingIndex = null; 

// for custom confirmation dialog
let pendingDeleteIndex = null;

function showModal() {
    const modal = document.getElementById('confirmModal');
    if (modal) modal.classList.remove('hidden');
}

function hideModal() {
    const modal = document.getElementById('confirmModal');
    if (modal) modal.classList.add('hidden');
}
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
    const submitBtn = document.querySelector('button[type="submit"]');

    let movies = JSON.parse(localStorage.getItem("movies")) || [];

    if (editingIndex !== null) {
        // editing an existing movie; average the new rating with the old
        const movie = movies[editingIndex];
        movie.title = title;
        movie.year = year;
        movie.genre = genre;
        movie.rating = (movie.rating + rating) / 2;
        editingIndex = null;
    } else {
        
        let existingMovie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase() );

        if (existingMovie) {
            existingMovie.rating = (existingMovie.rating + rating) / 2;
            existingMovie.year = year;
            existingMovie.genre = genre;
        } else {
            const movie = {
                title: title,
                year: year,
                genre: genre,
                rating: rating
            };
            movies.push(movie);
        }
    }

    localStorage.setItem("movies", JSON.stringify(movies));

    
    document.getElementById("title").value = "";
    document.getElementById("year").value = "";
    document.getElementById("genre").selectedIndex = 0;
    selectedRating = 0;
    stars.forEach(s => s.classList.remove("active"));

    
    editingIndex = null;
    if (submitBtn) submitBtn.textContent = 'Add Movie';

    displayMovies();
}

function displayMovies() {

const movieList = document.getElementById("movieList");
movieList.innerHTML = "";

let movies = JSON.parse(localStorage.getItem("movies")) || [];

    movies.forEach((movie, index) => {

        let starDisplay = "⭐".repeat(Math.round(movie.rating));
        

        let movieItem = document.createElement("div");
        movieItem.classList.add("movie-item");

        movieItem.innerHTML = `${movie.title} (${movie.year}) - ${movie.genre}, Rating: ${starDisplay} (${movie.rating})
        <button onclick="editMovie(${index})">Edit</button>
        <button onclick="deleteMovie(${index})">Delete</button>`;

movieList.appendChild(movieItem); 

    });
    }



const form = document.getElementById("signupForm");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // avoid navigation/post request
        addMovie();
    });
}

// wire up modal buttons
const modalYes = document.getElementById('modalYes');
const modalNo = document.getElementById('modalNo');
if (modalYes) {
    modalYes.addEventListener('click', function() {
        if (pendingDeleteIndex !== null) {
            // perform deletion
            let movies = JSON.parse(localStorage.getItem("movies")) || [];
            movies.splice(pendingDeleteIndex, 1);
            localStorage.setItem("movies", JSON.stringify(movies));
            displayMovies();
            pendingDeleteIndex = null;
        }
        hideModal();
    });
}
if (modalNo) {
    modalNo.addEventListener('click', function() {
        pendingDeleteIndex = null;
        hideModal();
    });
}

displayMovies();

function deleteMovie(index) {
    // show custom confirmation modal instead of browser confirm
    pendingDeleteIndex = index;
    showModal();
}

function editMovie(index) {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    const movie = movies[index];
    if (!movie) return;

    // populate the form
    document.getElementById("title").value = movie.title;
    document.getElementById("year").value = movie.year;
    document.getElementById("genre").value = movie.genre;
    selectedRating = movie.rating;

    // highlight stars accordingly
    stars.forEach(s => s.classList.remove("active"));
    for (let i = 0; i < selectedRating; i++) {
        stars[i].classList.add("active");
    }

    editingIndex = index;
    const submitBtn = document.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.textContent = 'Update Movie';
}



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
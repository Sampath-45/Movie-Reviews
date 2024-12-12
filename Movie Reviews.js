let reviewsContainerEl = document.getElementById("reviewsContainer");
let titleInputEl = document.getElementById("titleInput");
let reviewAreaEl = document.getElementById("reviewTextarea");


function onAddReview() {
    let movieTitle = titleInputEl.value;
    let Review = reviewAreaEl.value;


    if (movieTitle === "") {
        alert("Please enter movie title");
        return;
    }

    let movieTitleEl = document.createElement("h1");
    movieTitleEl.textContent = "Movie Title: " + movieTitle;
    movieTitleEl.classList.add("movie-title");
    reviewsContainerEl.appendChild(movieTitleEl);

    let movieReviewEl = document.createElement("p");
    movieReviewEl.textContent = "Review: " + Review;
    reviewsContainerEl.appendChild(movieReviewEl);

    let lineEl = document.createElement("hr");
    reviewsContainerEl.appendChild(lineEl);

    titleInputEl.value = "";
    reviewAreaEl.value = "";

}
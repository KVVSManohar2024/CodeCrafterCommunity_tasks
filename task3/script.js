// Sample movie data (you can replace this with real data)
const movies = [
    {
        title: "Stranger things",
        poster: "Stranger_Things_logo.png",
        videoSource: "abstract1.mp4",
    },
    {
        title: "MoneyHeist",
        poster: "moneyheist.jpg",
        videoSource: "moneyheist.mp4",
    },
    {
        title: "naruto",
        poster: "naruto.jpeg",
        videoSource: "naruto.jpg",
    },
    {
        title: "adhipurush",
        poster: "adhip.jpeg",
        videoSource: "adihpurush.mp4",
    },
    {
        title: "mothjer",
        poster: "mother.jpg",
        videoSource: "mother.mp4",
    },
    {
        title: "kufiya",
        poster: "kufiya.jpg",
        videoSource: "",
    },
    {
        title: "wednesday",
        poster: "wednes.jpeg",
        videoSource: "0",
    },
    {
        title: "Mt",
        poster: "junge.jpeg",
        videoSource: "0",
    },
    {
        title: "Searchmore",
        poster: "heroim.jpg",
        videoSource: "",
    },
    

];

const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-btn');
const movieGrid = document.getElementById('movie-grid');
const modal = document.getElementById('modal');
const movieTitle = document.getElementById('movie-title');
const movieVideo = document.getElementById('movie-video');
const videoSource = document.getElementById('video-source');
const backBtn = document.getElementById('back-btn');

// Function to display movies in the grid
function displayMovies(movieList) {
    movieGrid.innerHTML = '';
    movieList.forEach((movie, index) => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `<img src="${movie.poster}" alt="${movie.title}">`;
        
        movieDiv.addEventListener('click', () => {
            displayMovieDetails(movie);
        });

        movieGrid.appendChild(movieDiv);
    });
}

// Function to display movie details in a modal
function displayMovieDetails(movie) {
    movieTitle.textContent = movie.title;
    videoSource.src = movie.videoSource;
    modal.style.display = 'flex';
}

backBtn.addEventListener('click', () => {
    movieVideo.pause();
    modal.style.display = 'none';
});

// Function to filter movies based on the search input
function searchMovies(query) {
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase())
    );
    displayMovies(filteredMovies);
}

searchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value;
    searchMovies(searchQuery);
});

// Initial display of movies
displayMovies(movies);

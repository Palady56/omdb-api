// require('dotenv').config();

// const apiKey = process.env.OMDB_API_KEY;
// const baseUrl = process.env.BASE_URL
const apiKey = "de537de8"
const baseUrl = "http://www.omdbapi.com/"

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');
const filmCountElement = document.getElementById('filmCount'); 

async function searchMovies(query) {
  const response = await fetch(`${baseUrl}?apikey=${apiKey}&s=${query}`);
  const data = await response.json();
  return data.Search; 
}

function displayResults(movies) {
  resultsContainer.innerHTML = ''; 
  if (movies) {
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
                <img src="${movie.Poster !== "N/A" ? movie.Poster : 'placeholder.jpg'}" alt="Poster">
                <h3>${movie.Title} (${movie.Year})</h3>
            `;
      resultsContainer.appendChild(movieElement);
    });
  } else {
    resultsContainer.innerHTML = '<p>No results found</p>';
  }
}

function displayResults(movies) {
  resultsContainer.innerHTML = '';
  if (movies) {
      movies.forEach(movie => {
          const movieElement = document.createElement('div');
          movieElement.classList.add('movie');

          // Заглушка
          const poster = movie.Poster !== "N/A" ? movie.Poster : './placeholder.png';
          movieElement.innerHTML = `
              <img src="${poster}" alt="Poster">
              <h3>${movie.Title} (${movie.Year})</h3>
          `;
          resultsContainer.appendChild(movieElement);
          filmCounter(movies.length);
      });
  } else { 
      resultsContainer.innerHTML = '<p>No results found</p>';
      filmCounter(0);
  }
}

// func to prevent frequent requests
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function filmCounter(count) {
  filmCountElement.textContent = count;
}

searchInput.addEventListener('input', debounce(async function () {
  const query = searchInput.value.trim();
  if (query.length > 2) {
    const movies = await searchMovies(query);
    displayResults(movies);
  } else {
    resultsContainer.innerHTML = ''; 
    filmCounter(0)
  }
}, 300));

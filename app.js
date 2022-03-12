const BASE_URL = 'https://ghibliapi.herokuapp.com/films/';
// const IMAGE_BATH = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getmovies(BASE_URL);

function getmovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showMovies(data);

      //   console.log(data);
    });
}
//

function showMovies(data) {
  main.innerHTML = '';
  data.forEach((movie) => {
    const { title, description, image, rt_score } = movie;
    console.log(`${title} ${description} ${image}`);
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `<img
    src="${image}"
    alt="${title} Image"
  />
  <div class="movie-info">
    <h3>${title}</h3>
    <span class="${getColor(rt_score)}">${rt_score}%</span>
  </div>
  <div class="overview">
    <h3>Overview</h3>
    ${description}
  </div>`;
    main.appendChild(movieEl);
  });
}

function getColor(score) {
  if (score >= 85) {
    return 'green';
  } else if (score >= 50) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getmovies();
  }
});

// function imagePath(arr) {
//   arr.forEach((movie) => {
//     console.log(movie.rt_score);
//   });
// }

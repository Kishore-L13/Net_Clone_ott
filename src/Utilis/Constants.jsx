export const logo ="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-27/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const profile_pic = "https://avatars.githubusercontent.com/u/193820820?v=4&size=64" 

export const API_options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDEzNmQ5N2Y0MDU0ZTU3MTE5Y2JiY2ZkOGNiNjU3MyIsIm5iZiI6MTc3OTAzODg2Ny4wMjEsInN1YiI6IjZhMDlmYTkzZDkwNzY2MmM2MWY5ZWJmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LSvyx3WDPTMGLjGhBNomYamaLb36yOiaPMhIXH-1pBI'
  }
};

// fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
export const API_MOVIE = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
export const API_MOVIE_Popular = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
// Add this line to the bottom of your Constants.jsx file
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
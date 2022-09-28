export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "c9cdfae7da46490e0a0eba5fffea401f";
const tmdpEndPoint = "https://api.themoviedb.org/3/movie";
const tmdpEndPointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdpEndPoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetails: (movieId) => `${tmdpEndPoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    `${tmdpEndPoint}/${movieId}/${type}?api_key=${apiKey}`,
  getMovieSearch: (query, page) =>
    `${tmdpEndPointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};

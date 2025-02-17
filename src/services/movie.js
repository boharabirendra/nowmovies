import {
  fetchMovieGenreList,
  fetchTrendingMovies,
  fetchTrendingTVShows,
} from "../models/movie";

async function fetchWithGenres(fetchDataFn) {
  const response = await fetchDataFn();
  const genre = await fetchMovieGenreList();

  const movies = response.data.results;
  const genres = genre.data.genres;

  const genreMap = genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});

  return movies.map((item) => {
    const updatedGenres = item.genre_ids.map((genreId) => genreMap[genreId]);
    return {
      ...item,
      genres: updatedGenres,
    };
  });
}

export async function moviesWithGenre() {
  return fetchWithGenres(fetchTrendingMovies);
}

export async function tvShowsWithGenre() {
  return fetchWithGenres(fetchTrendingTVShows);
}

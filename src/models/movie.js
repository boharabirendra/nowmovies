import axiosInstance from "../db/axios";

import {
  TRENDING_MOVIES,
  GENRE_MOVIE_LIST,
  TRENDING_TV_SHOWS,
} from "../routes";

export function fetchTrendingTVShows() {
  return axiosInstance.get(TRENDING_TV_SHOWS);
}

export function fetchTrendingMovies() {
  return axiosInstance.get(TRENDING_MOVIES);
}

export function fetchMovieGenreList() {
  return axiosInstance.get(GENRE_MOVIE_LIST);
}

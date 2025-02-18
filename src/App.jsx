import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import ErrorMessage from "./components/Error";
import MovieCard from "./components/MovieCard";
import { moviesWithGenre, tvShowsWithGenre } from "./services/movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await moviesWithGenre();
        setMovies(movieData);

        const tvShowData = await tvShowsWithGenre();
        setTvShows(tvShowData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <ErrorMessage />;

  return (
    <Grid
      container
      spacing={8}
      sx={{
        padding: 3,
      }}
    >
      <Grid item xs={12} lg={6}>
        <Typography
          variant="h4"
          textAlign={"center"}
          sx={{ fontSize: "2.125rem", marginBottom: "32px", color: "white" }}
        >
          Trending Movies
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          {movies.map((data) => (
            <MovieCard key={data.id} data={data} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography
          variant="h4"
          textAlign={"center"}
          sx={{ fontSize: "2.125rem", marginBottom: "32px", color: "white" }}
        >
          Trending TV Shows
        </Typography>

        <Box display={"flex"} flexDirection={"column"} gap={2}>
          {tvShows.map((data) => (
            <MovieCard key={data.id} data={data} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;

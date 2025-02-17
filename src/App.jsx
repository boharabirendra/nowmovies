import { Box, Grid, Typography } from "@mui/material";
import MovieCard from "./components/MovieCard";

function App() {
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
          sx={{ fontSize: "2.125rem", marginBottom: "32px" }}
        >
          Trending Movies
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <MovieCard />
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography
          variant="h4"
          textAlign={"center"}
          sx={{ fontSize: "2.125rem", marginBottom: "32px" }}
        >
          Trending TV Shows
        </Typography>

        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <MovieCard />
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;

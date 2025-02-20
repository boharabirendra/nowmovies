import {
  Box,
  Card,
  List,
  Stack,
  Tooltip,
  ListItem,
  Typography,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const MovieCard = ({ data }) => {
  const title = data.media_type === "movie" ? data.title : data.name;
  const releaseDate =
    data.media_type === "movie" ? data.release_date : data.first_air_date;

  const cardStyles = {
    color: "white",
    borderRadius: "10px",
    position: "relative",
    width: "100%",
    height: "400px",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.03)",
    },
    "@media (max-width: 968px)": {
      height: "auto",
    },
  };

  const contentBoxStyles = {
    zIndex: "2",
    position: "relative",
    padding: "16px",
    height: "100%",
    background: "linear-gradient(to right, #0d0d0c 50%, transparent 100%)",
    "@media (max-width: 968px)": {
      background: "linear-gradient(to top, #0d0d0c 50%, transparent 100%)",
    },
  };

  const titleContainerStyles = {
    width: "100%",
    "@media (max-width: 968px)": {
      width: "100%",
    },
  };

  const overviewBoxStyles = {
    marginTop: 8,
    width: "50%",
    "@media (max-width: 968px)": {
      width: "100%",
      marginTop: "40px",
    },
  };

  const watchTrailerStyles = {
    display: "flex",
    fontSize: "0.875rem",
    textDecoration: "none",
    alignItems: "center",
    color: "#fff",
    gap: "8px",
    transition: "all 0.3s",
    backgroundColor: "#FF0000",
    justifyContent: "center",
    fontWeight: "500",
    padding: "5px 15px",
    borderRadius: "4px",
  };

  const searchTorrentStyles = {
    textDecoration: "none",
    display: "flex",
    fontSize: "0.875rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s",
    color: "#6ac045",
    fontWeight: "500",
    padding: "5px 15px",
    borderRadius: "4px",
    border: "1px solid #6ac045",
    marginLeft: 0,
    "&:hover": {
      border: "1px solid #3f57b5",
      backgroundColor: "rgba(63, 81, 181, 0.04)",
    },
  };

  const backgroundImageStyles = {
    backgroundImage: `url('https://image.tmdb.org/t/p/w780${data.backdrop_path}')`,
    top: "0",
    right: "0",
    width: "80%",
    height: "100%",
    zIndex: "1",
    position: "absolute",
    borderRadius: "11px",
    backgroundSize: "cover !important",
    "@media (max-width: 968px)": {
      width: "100%",
    },
  };

  return (
    <Card sx={cardStyles}>
      <Box sx={contentBoxStyles}>
        <Box sx={titleContainerStyles}>
          <Typography
            variant="h4"
            sx={{ textTransform: "capitalize", "&:hover": { color: "red" } }}
          >
            {title}
          </Typography>
          <Typography>
            <Typography
              component="span"
              sx={{ fontSize: "24px", color: "#f5f5f5" }}
            >
              {data.vote_average}
            </Typography>
            <Typography
              component="span"
              sx={{ fontSize: "12px", color: "#6c6e70" }}
            >
              /10
            </Typography>
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          gap={0.5}
          sx={{ marginTop: "16px" }}
        >
          <Typography
            component="span"
            sx={{
              padding: "8px",
              border: "1px solid rgba(255, 255, 255, 0.13)",
              display: "inline-block",
            }}
          >
            {releaseDate}
          </Typography>
          <List
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "16px",
              "@media (max-width: 968px)": {
                marginLeft: "0px",
              },
            }}
          >
            {data.genres.filter(Boolean).map((genre, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: 0,
                  width: "auto",
                  "&::after": {
                    fontSize: "12px",
                    content: '"\\2022"',
                    marginRight: "4px",
                    marginLeft: "4px",
                    color: "#67686a",
                  },
                  "&:last-child::after": {
                    content: '""',
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#67686a",
                      }}
                    >
                      {genre}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={overviewBoxStyles}>
          <Typography
            component="p"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 4,
              textOverflow: "ellipsis",
            }}
          >
            {data.overview}
          </Typography>
        </Box>

        <Box
          marginTop={4}
          sx={{
            "@media (min-width: 968px)": {
              position: "absolute",
              bottom: "16px",
            },
          }}
        >
          <Stack
            direction="row"
            gap={2}
            sx={{
              "@media (max-width: 968px)": {
                flexDirection: "column",
                gap: "16px",
              },
            }}
          >
            <Box
              component="a"
              target="_blank"
              href={`https://www.youtube.com/results?search_query=${title}+1080p+trailer`}
              variant="contained"
              sx={watchTrailerStyles}
            >
              <PlayArrowIcon />
              <Typography component="span">WATCH TRAILER</Typography>
            </Box>

            <Tooltip
              title={
                <Typography
                  component="p"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Heuristic. Might show empty results.
                </Typography>
              }
              arrow
              placement="bottom"
            >
              <Box
                component="a"
                target="_blank"
                href={`https://yts.mx/browse-movies/${title}/all/all/0/latest/0/all`}
                variant="contained"
                sx={searchTorrentStyles}
              >
                <SearchIcon />
                <Typography component="span">SEARCH TORRENT</Typography>
              </Box>
            </Tooltip>
          </Stack>
        </Box>
      </Box>
      <Box sx={backgroundImageStyles} />
    </Card>
  );
};

export default MovieCard;

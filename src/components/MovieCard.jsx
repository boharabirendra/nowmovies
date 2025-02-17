import {
  Box,
  Card,
  List,
  Tooltip,
  ListItem,
  Typography,
  ListItemText,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function MovieCard() {
  return (
    <Card
      sx={{
        color: "white",
        borderRadius: "10px",
        position: "relative",
        width: "100%",
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <Box
        sx={{
          zIndex: "2",
          position: "relative",
          padding: "16px",
          background:
            "linear-gradient(to right, #0d0d0c 50%, transparent 100%)",
          "@media (max-width: 968px)": {
            background:
              "linear-gradient(to top, #0d0d0c 50%, transparent 100%)",
          },
        }}
      >
        <Box
          width={"60%"}
          sx={{
            "@media (max-width: 968px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{ textTransform: "capitalize", "&:hover": { color: "red" } }}
          >
            The Gorge
          </Typography>
          <Typography>
            <Typography
              component={"span"}
              sx={{ fontSize: "24px", color: "#f5f5f5" }}
            >
              7.85
            </Typography>
            <Typography
              component={"span"}
              sx={{ fontSize: "12px", color: "#6c6e70" }}
            >
              /10
            </Typography>
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={0.5}
          sx={{ marginTop: "16px" }}
        >
          <Typography
            component={"span"}
            sx={{
              padding: "8px",
              border: "1px solid rgba(255, 255, 255, 0.13)",
              display: "inline-block",
            }}
          >
            2024-02-10
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
            {[
              { genre: "Action" },
              { genre: "Romance" },
              { genre: "Science Fiction " },
              { genre: "Horror" },
              { genre: "Thriller" },
            ].map((genre, index) => (
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
                      {genre.genre}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          marginTop={8}
          width={"50%"}
          sx={{
            "@media (max-width: 968px)": {
              width: "100%",
            },
          }}
        >
          <Typography component={"p"}>
            Two highly trained operatives grow close from a distance after being
            sent to guard opposite sides of a mysterious gorge. When an evil
            below emerges, they must work together to survive what lies within.
          </Typography>
        </Box>
        <Box marginTop={4}>
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
              component={"a"}
              variant="contained"
              sx={{
                display: "flex",
                fontSize: "0.875rem",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s",
                backgroundColor: "#FF0000",
                justifyContent: "center",
                fontWeight: "500",
                padding: "5px 15px",
                borderRadius: "4px",
              }}
            >
              <PlayArrowIcon />
              <Typography component={"span"}>WATCH TRAILER</Typography>
            </Box>

            <Tooltip
              title={
                <Typography
                  component={"p"}
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
                component={"a"}
                variant="contained"
                sx={{
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
                }}
              >
                <SearchIcon />
                <Typography component={"span"}>SEARCH TORRENT</Typography>
              </Box>
            </Tooltip>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage:
            "url(https://image.tmdb.org/t/p/w780/9nhjGaFLKtddDPtPaX5EmKqsWdH.jpg&quot)",
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
        }}
      ></Box>
    </Card>
  );
}

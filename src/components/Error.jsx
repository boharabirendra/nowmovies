import { Alert, AlertTitle, Box } from "@mui/material";

export default function ErrorMessage({
  message = "Error while fetching data",
}) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Alert severity="error" sx={{ maxWidth: 400, width: "100%" }}>
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
    </Box>
  );
}

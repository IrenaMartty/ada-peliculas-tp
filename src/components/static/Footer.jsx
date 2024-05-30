import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Typography variant="h6" component="h2">
        Hecho con <FavoriteBorderIcon /> por IrenaMartty
      </Typography>
    </Box>
  );
}

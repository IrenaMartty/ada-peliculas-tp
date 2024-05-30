import { Grid, Container, Box, Typography } from "@mui/material";
import { useContext } from "react";
import CardAllMovies from "../components/CardAllMovies";
import { FavoriteContext } from "../context/FavoriteContext";

export default function FavoriteMovies() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <Box sx={{ backgroundColor: "black", minHeight: "90vh", padding: 2 }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "20px",
          marginTop: "100px",
        }}
      >
        <Typography variant="h3" sx={{ color: "white", mb: 2 }}>
          Mis Peliculas Favoritas
        </Typography>
        <Grid container spacing={2}>
          {favorites.map((favorite) => (
            <Grid item key={favorite.id} xs={12} sm={6} md={4} lg={2.4}>
              <CardAllMovies movie={favorite} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

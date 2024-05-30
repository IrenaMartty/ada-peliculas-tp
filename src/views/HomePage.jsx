import { useEffect } from "react";
import useMovies from "../hooks/useMovies";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CardAllMovies from "../components/CardAllMovies";
import Carusel from "../components/Carusel";

export default function HomePage() {
  const { popularMovies, getPopularMovies, latestMovies, getLatestMovies } = useMovies();

  useEffect(() => {
    getPopularMovies();
    getLatestMovies();
  }, []);

  //muestra solo 10 peliculas
  const getTopMovies = (movies) => movies.slice(0, 10);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          minHeight: "90vh",
          borderBottom: "solid 1px white",
        }}
      >
        <Carusel />
        <Typography variant="h4" sx={{ color: "white", mb: 2, padding: 5 }}>
          Peliculas Populares
        </Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingBottom: 5,
          }}
        >
          <Grid container spacing={2}>
            {getTopMovies(popularMovies).map((movie) => (
              <Grid item key={movie.id} xs={12} sm={6} md={4} lg={2.4}>
                <CardAllMovies movie={movie} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            margin: 3,
          }}
        >
          <Link to={"/popular"} style={{ textDecoration: "none" }}>
            <Button
              style={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              VER MAS...
            </Button>
          </Link>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "black", minHeight: "90vh" }}>
        <Typography variant="h4" sx={{ color: "white", mb: 2, padding: 5 }}>
          Peliculas Mejor Puntadas
        </Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingBottom: 5,
          }}
        >
          <Grid container spacing={2}>
            {getTopMovies(latestMovies).map((movie) => (
              <Grid item key={movie.id} xs={12} sm={6} md={4} lg={2.4}>
                <CardAllMovies movie={movie} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

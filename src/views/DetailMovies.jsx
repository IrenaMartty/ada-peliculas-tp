import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import { Container, Typography, Box, IconButton } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Hourglass } from "react-loader-spinner";

export default function DetailMovies() {
  const { idMovie } = useParams();
  const { movieDetails, getMovieDetails, getTrailer } = useMovies();
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    getMovieDetails(idMovie);
    getTrailer(idMovie).then((trailerData) => {
      if (
        trailerData &&
        trailerData.results &&
        trailerData.results.length > 0 &&
        trailerData.results[0].key
      ) {
        setTrailer(trailerData.results[0].key);
      } else {
        setTrailer(null);
      }
    });
  }, [idMovie]);

  //Por si tarda recargar
  if (!movieDetails) {
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
        <Typography>Cargando...</Typography>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "left",
        textAlign: "left",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "50px",
          paddingTop: "120px",
        }}
      >
        <Box
          sx={{
            flex: "0 0 auto",
            marginRight: { xs: 0, md: "5px" },
            marginBottom: { xs: "20px", md: 0 },
            align: { xs: "left", md: "center" },
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            style={{ maxWidth: "90%", height: "auto", borderRadius: "10px" }}
          />
        </Box>
        <Box sx={{ flex: "1 1 auto" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {movieDetails.title}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {movieDetails.overview}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            gutterBottom
            sx={{ paddingTop: 5 }}
          >
            Genres: {movieDetails.genres.map((genre) => genre.name).join(", ")}
          </Typography>
          {trailer && (
            <IconButton
              color="inherit"
              aria-label="trailer"
              onClick={() =>
                (window.location.href = `https://www.youtube.com/watch?v=${trailer}`)
              }
              sx={{ paddingTop: 5 }}
            >
              <PlayCircleOutlineIcon fontSize="large" />
              Tráiler
            </IconButton>
          )}
        </Box>
      </Container>
    </Box>
  );
}

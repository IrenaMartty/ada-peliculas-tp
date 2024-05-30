import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import useMovies from "../hooks/useMovies";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Carusel(movie) {
  const [index, setIndex] = useState(0);
  const { popularMovies, getPopularMovies } = useMovies();

  useEffect(() => {
    getPopularMovies();
  }, []);


  //de Bootstrap
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      /
      {popularMovies.map((movie) => (
        <Carousel.Item key={movie.id} style={{ height: "80vh" }}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  //https://image.tmdb.org/t/p/original${movieDetails.backdrop_path
            alt={movie.title}
            style={{
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
          <Carousel.Caption
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <Link to={`/detail/${movie.id}`}>
              <Button
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                VER MAS...
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

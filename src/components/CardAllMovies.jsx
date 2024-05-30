import {Card,CardContent,CardMedia,Typography, IconButton} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";  
import { Link } from "react-router-dom";

export default function CardAllMovies({ movie }) {
  const { addToFavorites, isFavorite, removeFromFavorites } = useContext(FavoriteContext);
  const [favourite, setFavourite] = useState(isFavorite(movie));
  

  const handleFavouriteClick = (e) => {
    if (favourite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
    setFavourite(!favourite);
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link
        to={`/detail/${movie.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia
          component="img"
          height="100%"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            align="center"
            component="div"
            sx={{ paddingTop: "2px", marginBottom: "0px" }}
          >
            {movie.title}
          </Typography>
        </CardContent>
      </Link>
      <IconButton onClick={handleFavouriteClick}>
        {favourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Card>
  );
}

import { Box, Button, Badge, colors } from "@mui/material/";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import "@fontsource/nunito";

const buttonStyle = {
  color: "white",
  borderColor: "white",
  margin: "4px",
};

export default function Header() {
  const navigate = useNavigate();

  const { allFavorites } = useContext(FavoriteContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "8px",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        transition: "background-color 0.3s ease-in-out",
        borderBottom: "0.5px solid white",
        "@media (max-width: 600px)": {
          position: "relative",
          zIndex: "hidden",
          top: 0,
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "black",
          zIndex: 0,
          position: "relative",
          width: "flex",
        },
      }}
    >
      <div>
        <img src="" alt="" />
        <h1 style={{ fontFamily: "Nunito", color: "white" }}>peliADA</h1>
      </div>
      <div>
        <Button 
        variant="outlined" 
        onClick={() => navigate("/")}
        sx={buttonStyle}>
          HOME
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/latest")}
          sx={buttonStyle}
        >
          ULTIMOS LANZAMIENTOS
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/popular")}
          sx={buttonStyle}
        >
          POPULARES
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/search")}
          sx={buttonStyle}
        >
          BUSCAR
        </Button>
      </div>
      <Button
        variant="text"
        onClick={() => navigate("/favorite")}
        size="large"
        endIcon={
          <Badge badgeContent={allFavorites()} sx={{ color: "red" }}>
            <FavoriteIcon sx={{ color: "white" }} />
          </Badge>
        }
      ></Button>
    </Box>
  );
}

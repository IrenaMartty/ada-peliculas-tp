import { Box, Typography } from "@mui/material";

export default function Error() {
  return (
    <Box
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
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6449e8ee-0ecd-4f37-a8cf-342bfba526e5/dgznwv7-5660f07d-a40b-4963-8c33-8e56c963f62d.png/v1/fill/w_428,h_425/nemo__sad__by_ramirocalderoniv_dgznwv7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDI1IiwicGF0aCI6IlwvZlwvNjQ0OWU4ZWUtMGVjZC00ZjM3LWE4Y2YtMzQyYmZiYTUyNmU1XC9kZ3pud3Y3LTU2NjBmMDdkLWE0MGItNDk2My04YzMzLThlNTZjOTYzZjYyZC5wbmciLCJ3aWR0aCI6Ijw9NDI4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.edEvly_hH_yce-k7NRI5Mt0VtPXyJmjwdNOVXviISJE"
        alt="error"
        style={{ maxWidth: "100%", marginBottom: 2 }}
      />

      <Typography variant="h2" align="center">
        404
      </Typography>
      <Typography variant="body1" align="center">
        Pagina no encontrada
      </Typography>
    </Box>
  );
}

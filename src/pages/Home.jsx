import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../App.css"

import { Link } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          position: "absolute",
          height: "92.4%",
          width: "100%",
          backgroundImage: "url(/images/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <div
          className="p-4"
          style={{
            // backgroundColor: "rgba(222, 222, 226, 0.6)",
            borderRadius: "10px",
            marginBottom: "230px",
            // backdropFilter: "blur(1px)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#e5dddb",
              fontWeight: "bold",
              filter: "drop-shadow(#2b294e 0rem 0rem 15px)",
            }}
          >
            Welcome to OpenMinds!
          </Typography>
          <Typography className="" variant="h4" sx={{ color: "#2a284d" }}>
            Every Child Deserves a Chance to Learn
          </Typography>
          <Link to="./Events/Volunteering">
          <Button
            size="larger"
            variant="contained"
            className="mt-2"
            sx={{
              borderRadius: "8px",
              bgcolor: "#2a284d",
              filter: "drop-shadow(white 0rem 0rem 100px)",
              width: "100px",
              fontWeight: "bold",
            }}
           
          >
            Join Us
          </Button>
          </Link>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
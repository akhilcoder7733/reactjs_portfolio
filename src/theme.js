import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Kanit', sans-serif",
  },
  palette: {
    background: {
      default: "linear-gradient(94deg, rgba(30,0,61,1) 12%, rgba(4,19,79,1) 46%, rgba(3,0,55,1) 77%)",
    },
  },
});

export default theme;

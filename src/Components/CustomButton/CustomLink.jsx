import { Button } from '@mui/material';
import {styled} from '@mui/system';

const CustomLink = styled(Button)({
    color: "#fff",
    cursor:"pointer",
    border: "2px solid #000",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius:"10px",
    textTransform: "none",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      border: "2px solid #fff",
      transform: "scale(1.05)",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
  });

export default CustomLink

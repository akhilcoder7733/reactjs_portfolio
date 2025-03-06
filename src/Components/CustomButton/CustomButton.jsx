import { Button } from '@mui/material';
import {styled} from '@mui/system';

const CustomButton = styled(Button)({
    backgroundColor: "#000",
    color: "#fff",
    border: "2px solid #000",
    padding: "10px 20px",
    fontSize: "16px",
    cursor:"pointer",
    fontWeight: "bold",
    borderRadius:"10px",
    textTransform: "none",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
      border: "2px solid #000",
      transform: "scale(1.05)",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
  });

export default CustomButton

import React from "react";
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CustomLink from '../Components/CustomButton/CustomLink'
import CustomButton from "../Components/CustomButton/CustomButton";
// Sample Resume PDF (Replace with actual file)
const resumePDF = "/Akhil John.pdf";

// Styled Components
const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage:
    "linear-gradient(94deg, rgba(30,0,61,1) 12%, rgba(4,19,79,1) 46%, rgba(3,0,55,1) 77%)",
  padding: theme.spacing(4),
}));

const GlassCard = styled(Card)(({ theme }) => ({
  maxWidth: 500,
//   backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "20px",
  padding: theme.spacing(3),
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
}));


const HireMe = () => {
  return (
    <PageContainer>
      <GlassCard>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Hire Me 💼
          </Typography>
          <Typography variant="body1" textAlign="center" mt={2}>
            Let's work together! Fill out the form below and I'll get back to
            you.
          </Typography>

          {/* Contact Form */}
          <Box component="form" mt={3} mb={2}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />

            <CustomLink
            //   variant="contained"
            fullWidth
              endIcon={<SendIcon />}
              onClick={() => alert("Message Sent!")}
            >
              Send Message
            </CustomLink>
          </Box>

          {/* Resume Download */}
          <CustomButton
            variant="contained"
            startIcon={<CloudDownloadIcon />}
            href={resumePDF}
            download
            fullWidth
          >
            Download Resume (PDF)
          </CustomButton>
        </CardContent>
      </GlassCard>
    </PageContainer>
  );
};

export default HireMe;

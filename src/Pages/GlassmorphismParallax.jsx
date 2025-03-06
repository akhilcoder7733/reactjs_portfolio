import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

// Styled Components
const Background = styled(Box)({
    height: "100vh",
    backgroundImage: `url("./assets/style (1).jpg")`, // Direct path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  

const GlassCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "20px",
  padding: theme.spacing(3),
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px) scale(1.05)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
  },
}));

const GlassmorphismParallax = () => {
  return (
    <Background>
      <GlassCard>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Glassmorphism UI 🌟
          </Typography>
          <Typography variant="body1" textAlign="center" mt={2}>
            A modern frosted glass UI with a smooth parallax background.
          </Typography>
        </CardContent>
      </GlassCard>
    </Background>
  );
};

export default GlassmorphismParallax;

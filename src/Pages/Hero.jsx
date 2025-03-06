import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Background Animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Main Container
const HeroContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  textAlign: "center",
  padding: theme.spacing(4),
  background: "linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #e94560)",
  backgroundSize: "400% 400%",
  animation: `${gradientAnimation} 10s ease infinite`,
  color: "#fff",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5, 4),
  fontSize: "18px",
  fontWeight: "bold",
  background: "linear-gradient(94deg, rgba(40,134,246,1) 12%, rgba(221,145,240,1) 77%)",
  color: "#fff",
  borderRadius: "30px",
  textTransform: "none",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 15px rgba(40,134,246,0.5)",
  },
}));

const HeroTitle = styled(Typography)({
  fontSize: "48px",
  fontWeight: "bold",
  background: "linear-gradient(94deg, rgba(40,134,246,1) 12%, rgba(221,145,240,1) 77%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const HeroSubtitle = styled(Typography)({
  fontSize: "22px",
  opacity: 0.8,
  maxWidth: "600px",
});

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Hello, I'm Akhil John</HeroTitle>
      <HeroSubtitle>
        A passionate Full-Stack Developer who loves building interactive web experiences.
      </HeroSubtitle>
      <StyledButton variant="contained">Get in Touch</StyledButton>
    </HeroContainer>
  );
};

export default Hero;

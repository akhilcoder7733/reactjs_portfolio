import React from "react";
import { Box, Typography, Card, Grid, Avatar, Divider } from "@mui/material";
import { styled } from "@mui/system";
import Akhil from "../assets/Akhil.jpg"

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: theme.spacing(4),
//   background: "linear-gradient(94deg, #1e003d 12%, #04134f 46%, #030037 77%)",
  color: "#fff",
}));

const Section = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "900px",
  textAlign: "center",
  marginBottom: theme.spacing(4),
}));

const SkillCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(8px)",
  color: "#fff",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const About = () => {
  return (
    <Container>
      {/* Hero Section */}
      <Section data-aos="fade-in" data-aos-delay="100">
        <Avatar
          src={Akhil}
          sx={{ width: 120, height: 120, margin: "auto", mb: 2 }}
        />
        <Typography variant="h4" fontWeight="bold">
          Akhil JOhn
        </Typography>
        <Typography variant="h6" color="rgba(255,255,255,0.7)">
          Full-Stack Developer | UI/UX Enthusiast
        </Typography>
      </Section>

      <Divider sx={{ width: "60%", bgcolor: "rgba(255,255,255,0.2)", mb: 3 }} />

      {/* Bio & Experience */}
      <Section data-aos="fade-in" data-aos-delay="200">
        <Typography variant="h5" fontWeight="bold">
          My Journey
        </Typography>
        <Typography variant="body1" color="rgba(255,255,255,0.8)">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          malesuada felis non ante dictum, nec faucibus ligula fermentum.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </Typography>
      </Section>

      {/* Skills Section */}
      <Section data-aos="fade-in" data-aos-delay="300">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Skills & Technologies
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {["React.js", "Node.js", "MySQL", "UI/UX", "Django"].map(
            (skill, index) => (
              <Grid item key={index}>
                <SkillCard>{skill}</SkillCard>
              </Grid>
            )
          )}
        </Grid>
      </Section>

      {/* Fun Facts & Hobbies */}
      <Section data-aos="fade-up" data-aos-delay="100">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Fun Facts & Hobbies
        </Typography>
        <Typography variant="body1" color="rgba(255,255,255,0.8)">
          🚀 I love building cool web apps and exploring new technologies.  
          🎨 Passionate about UI/UX and modern design trends.  
          🎮 Gamer & tech enthusiast in my free time.  
        </Typography>
      </Section>
    </Container>
  );
};

export default About;

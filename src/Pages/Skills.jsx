import React from "react";
import { Box, Typography, Card, LinearProgress } from "@mui/material";
import { styled } from "@mui/system";
import { Code, Brush, Storage, Build } from "@mui/icons-material"; // Icons

const skillsData = [
  { name: "React.js", level: 90, icon: <Code fontSize="large" /> },
  { name: "HTML", level: 90, icon: <Code fontSize="large" /> },
  { name: "CSS", level: 90, icon: <Code fontSize="large" /> },
  { name: "UI/UX Design", level: 80, icon: <Brush fontSize="large" /> },
  { name: "Backend (Django)", level: 75, icon: <Storage fontSize="large" /> },
  { name: "Backend (flask)", level: 70, icon: <Storage fontSize="large" /> },
  { name: "Python", level: 65, icon: <Build fontSize="large" /> },
];

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: theme.spacing(4),
  minHeight: "90vh",
//   background: "linear-gradient(94deg, #1e003d 12%, #04134f 46%, #030037 77%)",
}));

const SkillCard = styled(Card)(({ theme }) => ({
  width: "280px",
  padding: theme.spacing(3),
  textAlign: "center",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(8px)",
  borderRadius: "12px",
  color: "#fff",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 8px 16px rgba(255, 255, 255, 0.2)",
  },
}));

function Skills() {
  return (
    <MainBox>
      {skillsData.map((skill, index) => (
        <SkillCard key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
          <Box display="flex" flexDirection="column" alignItems="center">
            {skill.icon}
            <Typography variant="h6" mt={1}>
              {skill.name}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              sx={{
                width: "100%",
                height: 8,
                borderRadius: 5,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                "& .MuiLinearProgress-bar": {
                  background: "linear-gradient(94deg, #2886f6 12%, #dd91f0 77%)",
                },
              }}
            />
            <Typography variant="body2" mt={1}>
              {skill.level}%
            </Typography>
          </Box>
        </SkillCard>
      ))}
    </MainBox>
  );
}

export default Skills;

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CustomButton from "../Components/CustomButton/CustomButton";

// Sample Resume PDF (Replace with your actual file path)
const resumePDF = "/Akhil John.pdf";

// Styled Components
const ResumeContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(6),
  //   backgroundColor: "#f5f5f5",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
  marginBottom: theme.spacing(2),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  borderRadius: "12px",
  backgroundColor: "#fff",
}));

const Resume = () => {
  return (
    <ResumeContainer>
      {/* Header */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" color="white">
          My Resume
        </Typography>
        <Typography variant="body1" color="white">
          A brief overview of my experience and skills
        </Typography>
        <CustomButton
          startIcon={<CloudDownloadIcon />}
          sx={{ mt: 2 }}
          href={resumePDF}
          download
        >
          Download Resume (PDF)
        </CustomButton>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {/* Experience Section */}
        <Grid item xs={12} md={6}>
          <StyledCard data-aos="fade-in" data-aos-delay="100">
            <SectionTitle>Experience</SectionTitle>
            <Divider />
            <CardContent>
              <Typography variant="h6">Frontend Developer</Typography>
              <Typography variant="body2" color="textSecondary">
                XYZ Company (2021 - Present)
              </Typography>
              <Typography variant="body1" mt={1}>
                - Developed modern React applications with Material UI. <br />-
                Worked on optimizing performance and UI enhancements.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Education Section */}
        <Grid item xs={12} md={6}>
          <StyledCard data-aos="fade-in" data-aos-delay="200">
            <SectionTitle>Education</SectionTitle>
            <Divider />
            <CardContent>
              <Typography variant="h6">
                Bachelor’s in Computer Science
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ABC University (2017 - 2021)
              </Typography>
              <Typography variant="body1" mt={1}>
                - Specialized in Full-Stack Development. <br />- Led various
                projects in React and Node.js.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Skills Section */}
        <Grid item xs={12} md={6}>
          <StyledCard data-aos="fade-in" data-aos-delay="300">
            <SectionTitle>Skills</SectionTitle>
            <Divider />
            <CardContent>
              <Typography variant="body1">
                ✅ React.js, Next.js, Material UI <br />
                ✅ JavaScript (ES6+), TypeScript <br />
                ✅ REST APIs, GraphQL <br />✅ Git, CI/CD, Agile Development
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Projects Section */}
        <Grid item xs={12} md={6}>
          <StyledCard data-aos="fade-in" data-aos-delay="400">
            <SectionTitle>Projects</SectionTitle>
            <Divider />
            <CardContent>
              <Typography variant="h6">Portfolio Website</Typography>
              <Typography variant="body1">
                - Built a modern portfolio using React & Material UI.
              </Typography>
              <Typography variant="h6" mt={2}>
                E-Commerce App
              </Typography>
              <Typography variant="body1">
                - Developed a MERN-based e-commerce platform.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </ResumeContainer>
  );
};

export default Resume;

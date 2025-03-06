import { Box, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';
import CustomLink from '../Components/CustomButton/CustomLink';
import CustomButton from '../Components/CustomButton/CustomButton';
import Akhil from '../assets/Akhil.jpg';

const MainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(1),
  padding: theme.spacing(2),
  minHeight: '90vh',
  gap: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    minHeight: '60vh',
    flexDirection: 'column', // Stack content on smaller screens
  },
}));

const SmallBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  flexDirection: 'column',
  marginTop: theme.spacing(1),
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center', // Center content on smaller screens
    textAlign: 'center',
  },
}));

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  background: 'linear-gradient(94deg, rgba(40,134,246,1) 12%, rgba(221,145,240,1) 77%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const StyledImage = styled('img')(({ theme }) => ({
  maxWidth: '100%', // Ensure the image scales well
  maxHeight: '400px', // Limit the image height
  borderRadius: '50%', // Make it circular (if that's desired)
  objectFit: 'cover', // Ensure the image is contained nicely
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Add a subtle shadow to the image
  filter: 'grayscale(100%)', // Make the image black and white by default
  transition: 'filter 0.5s ease, transform 0.3s ease', // Smooth transition for both filter and transform
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    maxHeight: '300px', // Adjust image size on smaller screens
  },

  // Hover effect to revert the image to normal color and move up
  '&:hover': {
    filter: 'grayscale(5%)', // Remove the grayscale when hovered
    transform: 'translateY(-10px)', // Move the image up by 10px
  },
}));


function WelcomePage() {
  return (
    <MainBox>
      <SmallBox>
        <StyledTypo variant="h1" data-aos="fade-in" data-aos-delay="100">Akhil John</StyledTypo>
        <StyledTypo variant="h4" data-aos="fade-in" data-aos-delay="200">Python Full Stack Developer</StyledTypo>
        <Box sx={{ display: 'flex', gap: 2 }} data-aos="fade-in" data-aos-delay="300">
          <CustomLink>Get Started!</CustomLink>
          <CustomButton>Docs</CustomButton>
        </Box>
      </SmallBox>
      <SmallBox >
        <StyledImage src={Akhil} alt="Akhil" data-aos="fade-in" data-aos-delay="400" />
      </SmallBox>
    </MainBox>
  );
}

export default WelcomePage;

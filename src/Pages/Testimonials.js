import React from "react";
import { Box, Typography, Avatar, Grid, Card } from "@mui/material";
import { styled } from "@mui/system";

// Styled Container
const TestimonialContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  textAlign: "center",
//   background: "linear-gradient(180deg, #1a1a2e 10%, #0f3460 90%)",
  color: "#fff",
}));

// Styled Card for Testimonials
const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "12px",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(8px)",
  color: "#fff",
  cursor:"pointer",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 6px 15px rgba(255, 255, 255, 0.2)",
  },
}));

// Dummy Data for Testimonials
const testimonials = [
  {
    name: "Jane Smith",
    position: "Software Engineer, Google",
    avatar: "https://via.placeholder.com/100",
    quote: "An absolute pleasure to work with! Highly skilled and delivers top-quality work every time.",
  },
  {
    name: "David Johnson",
    position: "Product Manager, Microsoft",
    avatar: "https://via.placeholder.com/100",
    quote: "Super talented and always goes the extra mile. Highly recommended for any project!",
  },
  {
    name: "Sarah Lee",
    position: "Founder, Startup X",
    avatar: "https://via.placeholder.com/100",
    quote: "A creative problem-solver who always brings fresh ideas to the table. Truly impressive work!",
  },
];

const Testimonials = () => {
  return (
    <TestimonialContainer>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        What People Say
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-in" data-aos-delay={`${index * 100}`}
>
            <TestimonialCard>
              <Avatar src={testimonial.avatar} sx={{ width: 60, height: 60, margin: "auto", mb: 2 }} />
              <Typography variant="body1" fontStyle="italic">
                "{testimonial.quote}"
              </Typography>
              <Typography variant="h6" fontWeight="bold" mt={2}>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.7)">
                {testimonial.position}
              </Typography>
            </TestimonialCard>
          </Grid>
        ))}
      </Grid>
    </TestimonialContainer>
  );
};

export default Testimonials;

import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { styled } from "@mui/system";
import Style1 from "../assets/style (1).jpg"
import Style2 from "../assets/style (2).jpg"
import Style3 from "../assets/style (3).jpg"
import CustomButton from "../Components/CustomButton/CustomButton";

// Styled Container
const BlogContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
//   background: "#f5f5f5",
  minHeight: "100vh",
}));

// Styled Blog Card
const BlogCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  borderRadius: "12px",
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
  },
}));

// Dummy Blog Data
const blogPosts = [
  {
    title: "Getting Started with React",
    image: Style1,
    description: "A beginner's guide to understanding React.js and building interactive UIs.",
    link: "/blog/react-guide",
  },
  {
    title: "Mastering JavaScript Async/Await",
    image: Style3,
    description: "Understand how to handle asynchronous operations in JavaScript effectively.",
    link: "/blog/async-await",
  },
  {
    title: "CSS Tricks for Modern Web Design",
    image: Style2,
    description: "Learn advanced CSS techniques to make your websites visually appealing.",
    link: "/blog/css-tricks",
  },
];

const Blog = () => {
  return (
    <BlogContainer>
      <Typography variant="h4" fontWeight="bold" textAlign="center" color="primary" mb={4}>
        Latest Articles
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogCard>
              <CardMedia component="img" height="250" image={post.image} alt={post.title} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={1}>
                  {post.description}
                </Typography>
                <CustomButton
                  sx={{ mt: 2 }}
                  variant="contained"
                  color="primary"
                  href={post.link}
                >
                  Read More
                </CustomButton>
              </CardContent>
            </BlogCard>
          </Grid>
        ))}
      </Grid>
    </BlogContainer>
  );
};

export default Blog;

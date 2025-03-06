import React, { useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import CustomButton from "../Components/CustomButton/CustomButton";

// Styled Container
const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 4),
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
//   background: "#f5f5f5",
}));

// Form Styles
const FormBox = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  background: "linear-gradient(94deg, rgba(40,134,246,1) 12%, rgba(221,145,240,1) 77%)",
  padding: theme.spacing(3),
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
}));

// Google Map Configuration
const mapContainerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "8px",
};

const center = { lat: 37.7749, lng: -122.4194 }; // Example: San Francisco

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <ContactContainer>
      <Typography variant="h4" fontWeight="bold" textAlign="center" color="white">
        Contact Me
      </Typography>

      {/* Contact Form */}
      <FormBox component="form" onSubmit={handleSubmit}>
        <TextField label="Your Name" name="name" fullWidth required value={formData.name} onChange={handleChange} />
        <TextField label="Your Email" name="email" type="email" fullWidth required value={formData.email} onChange={handleChange} />
        <TextField label="Your Message" name="message" multiline rows={4} fullWidth required value={formData.message} onChange={handleChange} />
        <CustomButton type="submit" fullWidth>
          Send Message
        </CustomButton>
      </FormBox>

      {/* Social Media Links */}
      <Box display="flex" gap={2}>
        <IconButton color="primary" href="https://linkedin.com" target="_blank">
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton color="primary" href="https://github.com" target="_blank">
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton color="primary" href="https://twitter.com" target="_blank">
          <Twitter fontSize="large" />
        </IconButton>
      </Box>

      {/* Google Map */}
      <LoadScript googleMapsApiKey="AIzaSyAjnO0RJfV9CZ_pMGmz78mo1MDpff15RAI">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </ContactContainer>
  );
};

export default Contact;

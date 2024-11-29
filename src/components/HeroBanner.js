import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = ({handleScroll}) => {
  return (
    <Box sx={{ pt: "50px", pl: "40px" }}>
      <Typography color="red" fontWeight="bold" fontSize="2rem">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} fontSize="30px" sx={{ pt: "20px" }}>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontWeight={300} sx={{ pt: "20px" }} mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" onClick={handleScroll}>
        Explore Exercises
      </Button>
      <Typography fontWeight={600} fontSize="180px" color="red" sx={{opacity:0.1, display:{lg:'block', sm:'none'}}}>
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="img-banner" />
    </Box>
  );
};

export default HeroBanner;

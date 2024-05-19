import React, { useState } from 'react';
import { Box, Rating, Typography } from '@mui/material';


const Reviews = () => {
  const [value, setValue] = useState(0); // State for the rating value

  return (
    <Box>
      <Box sx={{ height: '100%', backgroundColor: 'rgb(234,235,230)', width: '100%', marginTop: '5%' }}></Box>
      <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgb(234,235,230)' }}>
        <Typography sx={{ fontSize: '30px', color: 'black', marginTop: '4%' }}>TESTIMONIAL</Typography>
        <Typography sx={{ fontWeight: 'bold', fontSize: '40px', color: 'black' }}>REVIEW THE PRODUCTS</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      
    </Box>
  );
}

export default Reviews;

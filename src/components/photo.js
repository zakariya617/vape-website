import React from 'react';
import Box from '@mui/material/Box';

const Photo = ({ Image }) => {
  return (
    <Box sx={{ height: '100%', width: '50%' }}>
      <img src={Image} alt="Logo" style={{ height: '90%', width: '90%' }} />
    </Box>
  );
};

export default Photo;

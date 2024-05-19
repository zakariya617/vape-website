import { Box } from '@mui/material';
import React from 'react';


const Delivery= () => {
  return (
    <Box sx={{ height: '70%', width: '100%' }}>
      <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',marginTop:'7%' }}>
        <img 
          src='https://vapemall.pk/cdn/shop/files/free-delivery_1512x_79fd7334-048f-41e1-8ab2-428ad8022973.webp?v=1684174038&width=1500' 
          alt="Logo" 
          style={{ height: '100%', width: '100%' }}   
        />
      </Box>
    </Box>
  );
};

export default Delivery;

import React from 'react';
import { Box, Typography } from '@mui/material';

const Image = () => {
  return (
    <Box sx={{ height: '90%', width: '100%', marginTop: '6%', display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(201,181,226)' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/vape_kit_mockup_04-451x1024.png' 
          alt="Logo" 
          style={{ height: '90%', width: '40%', marginRight: '20px' }}   
        />
        <img 
          src='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/vape_kit_mockup_05-450x1024.png' 
          alt="Logo" 
          style={{ height: '70%', width: '40%', marginRight: '20px' }}   
        />
      <Typography variant="h3" sx={{ fontWeight: 'bold', marginLeft: '20px', fontSize: '70px'}}>The Right Brand for the Right Vape Products!</Typography>
     
      </Box>
    </Box>
  );
};

export default Image;

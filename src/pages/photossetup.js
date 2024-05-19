import React from 'react';
import { Box, Typography } from '@mui/material';


import Photo from '../components/photo';

const Photossetup = () => {
  return (
    <Box sx={{ height: '100%', backgroundColor: 'white', width: '100%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center',gap:'20%',marginTop:'5%' }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '50px', color: 'BLACK',marginBottom:'5%' }}>OUR BELOVED PARTNER</Typography>
      <Box sx={{ height: '90%', width: '90%', marginLeft: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center',gap:'5%' }}>
        <Photo Image='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_7-800x480.png'  />
        <Photo Image='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_2-800x480.png'  />
        <Photo Image='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_4-800x480.png' />
        <Photo Image='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_3-800x480.png' />
        <Photo Image='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_5-800x480.png' />
        
        
      </Box>
      <Box sx={{ height: '90%', width: '90%', marginLeft: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'6%',gap:'5%' }}>
      <Photo Image='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_1-800x480.png'  />
      <Photo Image='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_6-800x480.png'  />
      <Photo Image='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_8-800x480.png' />
      <Photo Image='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_10-800x480.png' />
      <Photo Image='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_9-800x480.png' />
      
      
    </Box>
    </Box>
  );
}

export default Photossetup;
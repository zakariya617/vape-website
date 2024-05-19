import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
     
      <Box
        sx={{
          height: '60%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          marginTop: '7%',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', fontSize: '60px', color: 'black' }}>
          ABOUT US
        </Typography>
      </Box>

    
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '60%',
        }}
      >
    
        <Box
          sx={{
            height: '100%',
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(234,228,241)',
            borderRadius: '5%',
            marginTop: '5%',
            marginLeft:'5%',
           
          }}
        >
          <img
            src='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/vape_kit_mockup_02-368x1024.png'
            alt="Logo"
            style={{ height: '40%', width: '45%', borderRadius: '4%' }}
          />
        </Box>


        <Box
          sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '40px', 
              fontWeight: 'bold',
              fontFamily: 'Arial',
              textAlign: 'center',
            }}
          >
            A Higher Form of Vapor Cigarette
          </Typography>
          <Typography sx={{fontSize:'19px',marginTop:'3%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</Typography>
          <Typography sx={{fontSize:'60px',fontFamily:'bold',marginTop:'7%',marginRight:'70%',color:'rgb(232,95,87)'}}>85+</Typography>
          <Typography sx={{marginRight:'70%',color:'rgb(232,95,87)'}}>Vaping Products</Typography>
          <Typography sx={{fontSize:'60px', fontFamily:'bold',color:'rgb(232,95,87)',marginRight:'70%',marginTop:'10%'}}>16+</Typography>
          <Typography sx={{marginRight:'70%',color:'rgb(232,95,87)'}}>Expert Staffs</Typography>
          
        </Box>
      </Box>
    </Box>
  );
};

export default About;

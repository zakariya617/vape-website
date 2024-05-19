import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Email, Place, Call } from '@mui/icons-material'; 

const Bottom = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', marginTop: '5%' }}>
      <Box sx={{ height: '70%', width: '100%', display: 'flex', backgroundColor: 'rgb(31,31,31)', flexDirection: 'row', alignItems: 'center' }}>
        <Box sx={{ height: '100%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '80px' }}>
          <Typography sx={{ fontSize: '40px', fontWeight: 'bold', color: 'rgb(255,255,255)' }}>CALIBURN</Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: 'rgb(145,147,149)', marginTop: '20px' }}>
            CALIBURN Has The Best Vape Hardware, E-liquids, Accessories, And High-End Mech Mods.
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: '0px', paddingRight: '0px' }}> {/* Added flexGrow and adjusted padding */}
          <Typography sx={{ fontSize: '25px', fontWeight: "bold", color: "white" }}>Products Categories</Typography>
          <ul style={{ listStyleType: 'initial', color: 'white' }}>
            <li><Typography variant="body1">Vape E-liquids</Typography></li>
            <li><Typography variant="body1">Vaporizers</Typography></li>
            <li><Typography variant="body1">Vape Tanks</Typography></li>
            <li><Typography variant="body1">Vape Accessories</Typography></li>
          </ul>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: '0px', paddingRight: '0px' }}> {/* Added flexGrow and adjusted padding */}
          <Typography sx={{ fontSize: '25px', fontWeight: "bold", color: "white" }}>Contact Us</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}> 
            <IconButton color="primary">
              <Email /> 
            </IconButton>
            <Typography sx={{ fontSize: '14px', color: 'white', marginLeft: '5px' }}>contact@caliburn.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}> 
            <IconButton color="primary">
              <Place /> 
            </IconButton>
            <Typography sx={{ fontSize: '14px', color: 'white', marginLeft: '5px' }}>123 Main Street, Anytown, CA 12345</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}> 
            <IconButton color="primary">
              <Call /> 
            </IconButton>
            <Typography sx={{ fontSize: '14px', color: 'white', marginLeft: '5px' }}>(555) 555-5555</Typography>
          </Box>
        </Box>
      </Box>

    
      <Box sx={{ backgroundColor: 'black', width: '100%', padding: '20px', textAlign: 'center', color: 'blueviolet' }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold', }}>Coded by: DELTA CODERS</Typography>
        <Typography variant="body2" sx={{ marginTop: '5px', color: 'blueviolet' }}>© {currentYear} DELTA CODERS. All rights reserved.</Typography>
      </Box>

     
      <Box sx={{ backgroundColor: 'black', width: '100%', padding: '5px', textAlign: 'center', color: 'blueviolet' }}>
        <Typography variant="body2" sx={{ marginTop: '5px' }}>Terms of Use | Privacy Policy</Typography>
      </Box>
    </Box>
  );
}

export default Bottom;

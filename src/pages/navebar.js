import React from 'react';
import { Box, Fab, Typography } from '@mui/material';

const NaveBar = () => {
  return (
    <Box sx={{ height: '14%', width: '100%', backgroundColor: 'yellow', display: 'flex', flexDirection: 'row', position: 'fixed',top:"0",right:'0',left:'0',zIndex:'9999' }}>
      <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', gap: "50px", alignItems: 'center' }}>
      <Box sx={{ height: '120%', width: '25%',marginRight:'10%',backgroundColor:'pink' }}>
      <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpDfTbs2KsrIHniQ9kp2mBVYR3pGdHw41JFt4byQGCtxd6n-ktDMFJktYJ_8phtblcdg&usqp=CAU' 
        alt="Logo" 
        style={{ height: '120%', width: '100%' }}   
      />
    </Box>
      <Typography sx={{ fontSize: '120%', fontWeight: 'bold', color: 'black', cursor: 'pointer' }} >HOME</Typography>
        <Typography sx={{ fontSize: '120%', fontWeight: 'bold', color: 'black', cursor: 'pointer' }}>ABOUT US</Typography>
        <Typography sx={{ fontSize: '120%', fontWeight: 'bold', color: 'black', cursor: 'pointer' }} >BEST SELLING</Typography>
        <Typography sx={{ fontSize: '120%', fontWeight: 'bold', color: 'black', cursor: 'pointer' }} >CONTACT US</Typography>
      </Box>
      <Fab variant="extended" sx={{color:'white',backgroundColor:'blue',marginTop:'2%',width:'10%',marginRight:'2%'}}>
      
      SHOP NOW
    </Fab>
    </Box>
  );
}

export default NaveBar;

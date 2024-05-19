import React from 'react';
import { Box, Typography } from '@mui/material'; 


const Services = ({Image,Title,Discription,Price}) => {
  return (
    
      
      <Box sx={{ height: '100%', width: '100%', display: 'flex', backgroundColor: "rgb(234,235,230)", gap: '30px' }}>
      
        <Box sx={{ height: '90%', width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '5%', marginTop:'3%' ,marginLeft:'7%'}}>
          
        <Typography sx={{ fontWeight: 'bold', fontSize: '45px', color: 'black', marginTop:'15%' }}>{Price}</Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'black' }}>{Title}</Typography>
          <Typography sx={{ height: '20%', width: '85%', marginTop: '3%', color: 'black',fontSize:'17px' }}>{Discription}</Typography>
          
        </Box>
        
        
  
      </Box>
    
  );
};

export default Services;
import React from 'react';
import { Box, Typography } from '@mui/material'; 


const Articles= ({Image,Title,Discription,Price}) => {
  return (
    
      
      <Box sx={{ height: '100%', width: '100%', display: 'flex', backgroundColor: "", gap: '30px' }}>
      
        <Box sx={{ height: '90%', width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '5%', marginTop:'3%' ,marginLeft:'7%'}}>
        <img src={Image} alt="Product" style={{ height: '30%', width: '100%', borderRadius: '4%' }} />  
        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', color: 'rgb(232,95,138)', marginTop:'15%',marginRight:'45%' }}>{Price}</Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: 'black',marginRight:'12%' }}>{Title}</Typography>
          <Typography sx={{ height: '20%', width: '85%', marginTop: '3%', color: 'black',fontSize:'20px',marginRight:'5%' }}>{Discription}</Typography>
          
        </Box>
        
        
  
      </Box>
    
  );
};

export default Articles;

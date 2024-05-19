import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Services from '../components/services';

const Servicessetup = () => {
  return (
    <Box>
      <Box sx={{ height: '100%', backgroundColor: 'rgb(234,235,230)', width: '100%', marginTop: '5%' }}></Box>
      <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgb(234,235,230)' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '40px', color: 'gray', marginTop: '4%' }}>OUR SERVICES</Typography>
        <Typography sx={{ fontWeight: 'bold', fontSize: '50px', color: 'black' }}>Product That Satisfies You</Typography>
        <Box sx={{ height: '80%', width: '100%', backgroundColor: 'rgb(234,235,230)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '4%' }}>
          <Services Title='Vape Service' Discription='Foscu rt sapien eget ipsum interdum finibus.Sed sed turpis quis nisl.' Price='01' />
          <Services Title='Vape Service' Discription='Foscu rt sapien eget ipsum interdum finibus.Sed sed turpis quis nisl.' Price='02' />
          <Services Title='Vape Service' Discription='Foscu rt sapien eget ipsum interdum finibus.Sed sed turpis quis nisl.' Price='03' />
          <Services Title='Vape Service' Discription='Foscu rt sapien eget ipsum interdum finibus.Sed sed turpis quis nisl.' Price='04' />
        </Box>
        <Typography sx={{ fontWeight: 'bold', fontSize: '19px', color: 'gray', marginTop: '9%' }}>Have a question about our service?</Typography>
        <Button variant="contained" disableElevation sx={{ marginTop: '3%', color: 'white' ,backgroundColor:'rgb(39,42,14)'}}>
          CONTACT US
        </Button>
      </Box>
    </Box>
  );
}

export default Servicessetup;

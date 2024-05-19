import React from 'react';
import { Box, Typography } from '@mui/material';
import Articles from '../components/articles';

const Articlessetup = () => {
  return (
    <Box sx={{ height: '100%', backgroundColor: 'white', width: '100%', marginTop: '4%' }}>
      <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '60px', color: 'black', marginTop: '4%' }}>Articles About Vaping</Typography>
      </Box>
      <Box sx={{ height: '80%', width: '100%', backgroundColor: 'WHITE', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '4%' }}>
      <Articles Image='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/elsa-olofsson-8I988w3ylrQ-unsplash-1024x683.jpg' Title='Try these new fruits liquids' Discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec…' Price='December 17, 2022' />
      <Articles  Image='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/brock-wegner-qsuA1kYKdbk-unsplash-1024x683.jpg' Title=' Weed vapes with vitamins E' Discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec….' Price='December 17, 2022' />
      <Articles  Image='https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/jonathan-cooper-4eDM2-pWzk4-unsplash-1024x683.jpg' Title=' FDA to fruit and mint flavor' Discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec….' Price='December 17, 2022' />
     
    </Box>
    </Box>
  );
}

export default Articlessetup;

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

const Newarrivals = ({ Image, Title, Discription, Price }) => {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', backgroundColor: "WHITE", gap: '30px' }}>
      <Box sx={{ height: '90%', width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '5%', marginTop: '3%', marginLeft: '7%' }}>
        <img src={Image} alt="Product" style={{ height: '30%', width: '85%', borderRadius: '4%' }} />
        <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'black' }}>{Title}</Typography>
        <Typography sx={{ height: '20%', width: '85%', marginTop: '3%', color: 'black', fontSize: '17px' }}>{Discription}</Typography>
        <Typography sx={{ fontWeight: 'bold', fontSize: '25px', color: 'black', marginTop: '10%' }}>{Price}</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </Box>
  );
};

export default Newarrivals;

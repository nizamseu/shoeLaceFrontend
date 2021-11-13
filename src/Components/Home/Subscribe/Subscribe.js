import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
const Subscribe = () => {
    return (
        <div className='my-3 d-flex justify-content-center align-items-center' style={{backgroundColor:'lightblue'}}>
           <div style={{margin:'30px 30px',padding:'10px'}}>
           <Box
            sx={{
                width: 400,
                maxWidth: '100%',
                display:'flex',
                flexDirection:'column'
            }}
            >
            <h1 className='my-5'>Subscribe </h1>
            <p style={{textAlign:'justify'}}>Everywhere in the world, news is happening. Find it in the Quartz Daily Brief. The most important and interesting news from the global economy. View Topics. Download Our App. Subscribe</p>
            <TextField className='my-3' fullWidth label="Email" id="fullWidth" />
            <Button variant="contained" size="medium">
        Subscribe Now
        </Button>
            </Box>
           </div>
        </div>
    );
};

export default Subscribe;
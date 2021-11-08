import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';
const bannerBg = {
    background: `url(${bg})`
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '400px'
}
const Banner = () => {
    return (
        <Container style={bannerBg}>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5} md={5} >
                        <Typography variant='h3'>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='h6'>
                            lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
                        </Typography>
                        <Button variant="contained">GET APPOINTMENT</Button>
                    </Grid>
                    <Grid item xs={12} sm={7} md={7} style={verticalCenter}>
                        <img style={{ width: '100%', height: 'auto' }} src={chair} alt="" />
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default Banner;
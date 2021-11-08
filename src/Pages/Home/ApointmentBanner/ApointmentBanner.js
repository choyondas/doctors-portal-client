import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import Banner from '../../../images/appointment-bg.png';
import { Button, Container, Typography } from '@mui/material';



const appointmentBanner = {
  background: `url(${Banner})`,
  backgroundColor: 'rgba(0, 0, 17, 0.6)',
  backgroundBlendMode: 'darken, luminosity',
  marginTop: 200,
}
const ApointmentBanner = () => {
  return (
    <Container style={{ marginBottom: '100px' }}>
      <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={6} md={4}>
            <img style={{ marginTop: -110, width: "100%", height: "auto", marginBottom: '-3px' }} src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} sm={6} md={8} sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            textAlign: 'left',
            alignItems: 'center',
          }}>
            <Box style={{ margiLeft: '20px', paddingLeft: '20px' }}>
              <Typography sx={{ fontWeight: 'bold', color: '#55d4d9', mb: 3 }} variant="h6" component="div">
                APPOINTMENT
              </Typography>
              <Typography sx={{ fontWeight: 'bold', mb: 2 }} variant="h4" style={{ color: "white" }} component="div">
                Make an appointment Today
              </Typography>
              <Typography sx={{ mb: 2 }} style={{ color: 'white' }}>
                It is a long established fact that a reader will be distractedby the readable content of a page when looking at it.
              </Typography>
              <Button variant="contained">Learn More</Button>
            </Box>

          </Grid>

        </Grid>
      </Box>
    </Container>
  );
};

export default ApointmentBanner;
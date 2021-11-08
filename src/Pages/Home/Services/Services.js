import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';






//fake data
const services = [

    {
        name: 'Fluoride Treatment',
        description: 'The Medical Council of Hong Kong (the Council) is established under the This link will open in a new windowMedical Registration Ordinance, Cap. 161, Laws of Hong Kong to handle registration and disciplinary regulation of medical practitioners in Hong Kong',
        img: 'https://i.ibb.co/rdfC1BG/cavity.png'
    },
    {
        name: 'Cavity Filling',
        description: 'The Medical Council of Hong Kong (the Council) is established under the This link will open in a new windowMedical Registration Ordinance, Cap. 161, Laws of Hong Kong to handle registration and disciplinary regulation of medical practitioners in Hong Kong',
        img: 'https://i.ibb.co/jDrSq93/fluoride.png'
    },
    {
        name: 'Teeth Whitening',
        description: 'The Medical Council of Hong Kong (the Council) is established under the This link will open in a new windowMedical Registration Ordinance, Cap. 161, Laws of Hong Kong to handle registration and disciplinary regulation of medical practitioners in Hong Kong',
        img: 'https://i.ibb.co/qxH4xSZ/whitening.png'
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Container>

                <Typography sx={{ fontWeight: 'bold', m: 2, color: 'success.main' }} variant="h5" component="div">
                    OUR SERVICS
                </Typography>

                <Typography sx={{ fontWeight: 'bold', m: 2 }} variant="h4" component="div">
                    Services We Provide
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service}
                            service={service}
                        >

                        </Service>)
                    }
                </Grid></Container>
        </Box>
    );
};

export default Services;
import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';
const Booking = ({ booking, date, setBookingSuccess }) => {
    const { id, name, time, space } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (

        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>


                    <Typography sx={{ color: 'info.main', fontWeight: 700 }} variant="h5" >
                        {name}
                    </Typography>
                    <Typography variant="h6" >
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>

            </Grid >
            <BookingModal
                booking={booking}
                handleClose={handleClose}
                open={open}
                date={date}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>

    );
};

export default Booking;
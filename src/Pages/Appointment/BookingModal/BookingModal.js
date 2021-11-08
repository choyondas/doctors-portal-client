import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BookingModal = ({ open, handleClose, booking, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;

        setBookingInfo(newInfo);
    }

    const handleBookSubmit = e => {


        //collect date from the from 

        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            data: date.toLocaleDateString()

        }
        console.log(appointment);
        //send to the servernpm

        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(appointment)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleClose();
                }
            })


        e.preventDefault();
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <form>

                    <TextField
                        disabled
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        defaultValue={time}
                        size="small"
                    />
                    <TextField

                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        defaultValue={user.displayName}
                        name="patientName"
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField

                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        defaultValue='your phone'
                        name="phone"
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField

                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        defaultValue={user.email}
                        name="email"
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size="small"
                    />
                    <Button onClick={handleBookSubmit} variant="contained">Submit</Button>

                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;
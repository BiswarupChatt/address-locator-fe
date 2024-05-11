import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';

import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';

import { useLocation } from '../context/LocationContext';





function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Form() {
    const [location, setLocation] = useState('')
    const { setResponse } = useLocation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `http://localhost:3001/find?address=${encodeURIComponent(location)}`
            const response = await axios.get(url)
            setResponse([response.data.location])
            console.log(response.data.location)
        } catch (err) {
            console.log(err)
        }
    };


    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" width='100%' maxWidth="1200px">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <PlaceIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Find Location
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="location"
                                        label="Enter Location"
                                        name="location"
                                        value={location}
                                        onChange={(e) => {
                                            setLocation(e.target.value)
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Search
                            </Button>
                        </Box>
                    </Box>
                    {/* <Copyright sx={{ mt: 5 }} /> */}
                </Container>
            </ThemeProvider>
        </>
    );
}
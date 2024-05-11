import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet';
import { Container, CssBaseline, Box, createTheme, ThemeProvider } from '@mui/material'
import { useLocation } from '../context/LocationContext';

const defaultTheme = createTheme();

export default function Map() {

    const { response } = useLocation()
    const position = response

    console.log( typeof position[0].lat) //getting the output here as number
    console.log(position[0].lat) //22.4954988 output value
    console.log(position[0].lng) //88.3709008 output value


    const markerIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
        iconSize: [38, 38]
    })

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" width='100%' maxWidth="1200px">
                <CssBaseline />
                <Box sx={{
                    height: '50vh',
                    width: "80%",
                    display: "flex",
                    margin: 'auto'
                }}>
                    <MapContainer center={[position[0].lat, position[0].lng]} zoom={18} style={{ height: "100%", flex: 1 }}>
                          {/* here it says undefined */}
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]} icon={markerIcon}>
                        {/* here in "position" i am facing issue whenever i am trying to send value of lat lng it is showing error */}
                            <Popup>
                                You're here!
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Box>

            </Container>
        </ThemeProvider>
    )
}
import React from 'react';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Container, CssBaseline, Box, createTheme, ThemeProvider } from '@mui/material'
import { useLocation } from '../context/LocationContext';
import { Icon } from 'leaflet';

const defaultTheme = createTheme();

export default function Map() {

    const { response } = useLocation()
    const position = response

    if (!position || !Array.isArray(position) || !position[0] || typeof position[0].lat !== 'number' || typeof position[0].lng !== 'number') {
        return null;
    }

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
                    <MapContainer center={[position[0].lat, position[0].lng]} zoom={17} style={{ height: "100%", flex: 1 }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[position[0].lat, position[0].lng]} icon={markerIcon}>
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
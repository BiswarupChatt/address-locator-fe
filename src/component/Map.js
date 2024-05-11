import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet';
import { Container, CssBaseline, Box, createTheme, ThemeProvider } from '@mui/material'
import { useLocation } from '../context/LocationContext';

const defaultTheme = createTheme();

export default function Map() {

    const { response } = useLocation()
    const position = Array.isArray(response)
    console.log(typeof position)


    const markerIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
        iconSize: [38, 38]
    })

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" width='100%' maxWidth="1200px">
                <CssBaseline />
                <Box sx={{ height: '50vh', width: "80%", display: "flex", margin: 'auto' }}>
                    <MapContainer center={[48, 3]} zoom={18} style={{ height: "100%", flex: 1 }}>

                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={[48, 3]} icon={markerIcon}>
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
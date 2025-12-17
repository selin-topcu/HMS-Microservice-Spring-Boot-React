import './App.css';
import {Button, createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import AppRoutes from "./Routes/AppRoutes";

const theme = createTheme({
    focusRing: "never",
    fontFamily: "Poppins, sans-serif",
    headings: {fontFamily: "Merriweather, serif"},
    colors: {
        primary: ['#f0fdfa', '#ccfbf1', '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59', '#134e4a', '#042f2e'],
        neutral: ['#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#000000',]
    },
    primaryColor: "primary",
    primaryShade:4,
    defaultGradient: {
        from:"primary.4",
        to:"primary.7",
        deg:132
    }
});

function App() {
    return (
        <MantineProvider theme={theme}>
            <AppRoutes/>
        </MantineProvider>
    );
}

export default App;

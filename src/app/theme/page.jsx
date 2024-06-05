"use client";
import { createTheme } from '@mui/material/styles';

// Define a custom MUI theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#26a69a',
        },
        secondary: {
            main: '#ff9f43',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

export default theme;
import * as React from 'react';
import { Box, ThemeProvider, createTheme, createBox } from '@mui/system';

const theme = createTheme({
    palette: {
        background: { paper: '#fff' },
        text: { primary: '#0080ff', secondary: '#ff0202' },
    },
});

const Box2 = createBox({ theme });

export default () => (
        <ThemeProvider theme={theme}>
        <Box sx={{ color: 'text.primary' }}>text.primary</Box>
        <Box2 sx={{ color: 'text.secondary' }}>text.secondary</Box2>
        </ThemeProvider>
);
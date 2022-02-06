import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/system';

const customTheme = createTheme({
    palette: {
        main: '#1976d2',
    },
});

const MyThemeComponent = styled('div')(({ theme }) => ({
    //из кастомной темы
    backgroundColor: theme.palette.main,
    //из theme mui
    padding: theme.spacing(1),
}));

export default () => (
    <ThemeProvider theme={customTheme}>
        <MyThemeComponent>Styled div with theme</MyThemeComponent>
    </ThemeProvider>
);

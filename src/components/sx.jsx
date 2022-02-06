import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, createBox } from '@mui/system';

//sx принимает css-аттрибуты, а также аттрибуты из специального обьекта theme
//который распределяет аргумент по css-аттрибутам.

const foo = true;
const bar = false;

export default () => (
    <>

        {/* equivalent to {...theme.typography.body1} */}
        <Box sx={{ typography: 'body1' }} > ПРОВЕРКА1 </Box>

        {/* equivalent to fontWeight: theme.typography.fontWeightLight */}
        <Box sx={{ fontWeight: 'light' }} > ПРОВЕРКА2 </Box>

        {/* array to override some styles in the former index*/}
        <Box
            sx={[
                {
                    '&:hover': {
                        color: 'red',
                        backgroundColor: 'white',
                    },
                },
                foo && {
                    '&:hover': { backgroundColor: 'green' },
                },
                bar && {
                    '&:hover': { backgroundColor: 'yellow' },
                },
            ]}
        >
            ПРОВЕРКА3
        </Box>

    </>
);

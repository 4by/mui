import * as React from 'react';
import Box from '@mui/material/Box';


export default () => (
    <>

        <Box>
            <Box sx={{ display: 'inline', p: 1, m: 1, border: '1px solid' }}>inline</Box>
            <Box sx={{ display: 'inline', p: 1, m: 1, border: '1px solid' }}>inline</Box>
        </Box>

        <Box>
            <Box sx={{ display: 'block', p: 1, m: 1, border: '1px solid' }}>block</Box>
            <Box sx={{ display: 'block', p: 1, m: 1, border: '1px solid' }}>block</Box>
        </Box>

        {/* flex позволяет управлять расположением сразу множества входящих обьектов  */}
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ p: 1, m: 1, border: '1px solid' }}>flex-row</Box>
            <Box sx={{ p: 1, m: 1, border: '1px solid' }}>flex-row</Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
            <Box sx={{ p: 1, m: 1, border: '1px solid' }}>flex-column</Box>
            <Box sx={{ p: 1, m: 1, border: '1px solid' }}>flex-column</Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
                <Box sx={{ p: 1, m: 1, border: '1px solid' }}>1</Box>
                <Box sx={{ p: 1, m: 1, border: '1px solid' }}>2</Box>
                <Box sx={{ p: 1, m: 1, border: '1px solid' }}>3</Box>
                <Box sx={{ p: 1, m: 1, border: '1px solid' }}>4</Box>
            </Box>

    </>
)

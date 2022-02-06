import * as React from 'react';
import Box from '@mui/material/Box';

export default function ZIndex() {
    return (
        <>
            <Box
                sx={{
                    p: 2, m: 1,
                    position: 'absolute',
                    top: 40,
                    left: '40%',
                    bgcolor: 'green',
                    zIndex: 'tooltip',
                }}
            >
                z-index tooltip
            </Box>
            <Box
                sx={{
                    p: 2, m: 1,
                    position: 'absolute',
                    top: 0,
                    left: '43%',
                    bgcolor: 'red',
                    zIndex: 'modal',
                }}
            >
                z-index modal
            </Box>
        </>
    );
}

import * as React from 'react';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';

export default () => (
    <>
        {/* sx не обязательно передаются в box но и любой mui компонент  */}
        <Button component="div" sx={{ p: 2, border: '1px dashed grey' }}>
            Button
        </Button>

        {/* не mui компонент создается следующим образом */}
        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
            span
        </Box>

    </>
);
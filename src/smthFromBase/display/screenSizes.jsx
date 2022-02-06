import * as React from 'react';
import Box from '@mui/material/Box';

export default () => (
<Box
  sx={{ width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 }}}
//   sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }} //Hidden only on sm
//   sx={{ display: { xs: 'block', sm: 'none' } }}	//Visible only on xs	
>
  This box has a responsive width.
</Box>
);

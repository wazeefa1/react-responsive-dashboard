import React from 'react';
import { Box, Container, Stack, Typography, Grid, } from '@mui/material';



function BoxComponent({childComponent, height}) {
    return (
        <Box
      sx={{
        // height: height,
        backgroundColor: 'tertiary.main',
        marginTop: '13px',
      }}
    >
      
        <Stack  justifyContent="center" alignItems="center">
          {childComponent}
        </Stack>
      
    </Box>



    );
}

export default BoxComponent;

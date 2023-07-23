import React from 'react';
import { Box, Container, Stack, Typography, Grid,  } from '@mui/material';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

function DashboardBox() {
    return (


        <Stack direction="row" spacing={2} justifyContent={'space-around'}>
            <Grid item xs={12} sm={12} md={3}>
                <Box
                    sx={{

                        height: 200,
                        backgroundColor: 'secondary.main',
                    }}
                >
                    <Stack direction={'column'} justifyContent={"center"} alignItems={"center"} height={"100%"}>
                        <PersonOutlinedIcon sx={{ color: '#F6F1F1', fontSize: '80px' }} />
                        <Typography variant='h5' sx={{ color: '#F6F1F1' }}>100K</Typography>
                    </Stack>

                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Box
                    sx={{
                        height: 200,
                        backgroundColor: 'secondary.main',
                    }}
                >
                    <Stack direction={'column'} justifyContent={"center"} alignItems={"center"} height={"100%"}>
                        <LocalMallOutlinedIcon sx={{ color: '#F6F1F1', fontSize: '80px' }} />
                        <Typography variant='h5' sx={{ color: '#F6F1F1' }}>25K</Typography>
                    </Stack>

                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Box
                    sx={{

                        height: 200,
                        backgroundColor: 'secondary.main',

                    }}
                >
                    <Stack direction={'column'} justifyContent={"center"} alignItems={"center"} height={"100%"}>
                        <StorefrontOutlinedIcon sx={{ color: '#F6F1F1', fontSize: '80px' }} />
                        <Typography variant='h5' sx={{ color: '#F6F1F1' }}>100</Typography>
                    </Stack>

                </Box>
            </Grid>
        </Stack>
    );
}

export default DashboardBox;

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#146C94',
    },
    secondary:{
        main:'#19A7CE'
    }
    // Other color customizations
  },
});

// Mobile theme
const mobileTheme = createTheme({
  palette: {
    primary: {
      main: '#7CA7F9',
    },
    secondary: {
      main: '#F55A4C',
    },
  },
});

export  {theme, mobileTheme};

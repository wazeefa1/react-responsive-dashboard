import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#146C94',
    },
    secondary:{
        main:'#19A7CE'
    },
    tertiary:{
      main:'#F6F1F1'
    }
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
    tertiary:{
      main:'#F6F1F1'
    }
  },
});

export  {theme, mobileTheme};

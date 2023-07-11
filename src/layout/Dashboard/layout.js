import Drawer from './Desktop/Drawer'
import BottomNavigation from './Mobile/BottomNavigation'
import useResponsive from '../../hook/useResponsive'
import { ThemeProvider } from '@mui/material/styles';



//theme 
import {theme, mobileTheme} from '../../theme/colorTheme'

export const Layout =()=>{

    const { isDesktop, isMobile } = useResponsive();
  let selectedTheme = isMobile ? mobileTheme : theme;

    return <>
      <ThemeProvider theme={selectedTheme}>

    {isDesktop && <Drawer/> }
    {isMobile && <BottomNavigation/> }
    </ThemeProvider>


    
    </>
}
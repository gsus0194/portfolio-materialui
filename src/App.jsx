import React, { useState } from 'react'
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
  CssBaseline,
  responsiveFontSizes,
  Container,
  Divider
} from '@material-ui/core'
import { cyan, blue, indigo } from '@material-ui/core/colors';
import Navbar from './components/Navigation/Navbar';
import Welcome from './components/Content/Welcome';
import Contact from './components/Content/Contact';
import Projects from './components/Content/Projects';
import Footer from './components/Content/Footer';

const App = () => {

  const [darkState, setDarkState] = useState(false)

  const paletteType = darkState ? 'dark' : 'light'
  const mainPrimary = darkState ? '#333333' : blue[700]
  const mainSecondary = darkState ? cyan[300] : indigo[900]

  let theme = createMuiTheme({
    palette: {
      type: paletteType,
      primary: {
        main: mainPrimary
      },
      secondary: {
        main: mainSecondary
      }
    }
  })

  theme = responsiveFontSizes(theme)

  const handleThemeChange = () => {
    setDarkState(!darkState)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar 
        isChecked={darkState}
        isChanged={handleThemeChange}
      />

      <Container>
        <Welcome />
        <Divider style={{backgroundColor: theme.palette.secondary.main}} />
        <Projects />
        <Divider style={{backgroundColor: theme.palette.secondary.main}} />
        <Contact />
      </Container>
      
      <Footer />
    </ThemeProvider>
  )
}

export default App

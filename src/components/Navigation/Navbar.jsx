import React, { useState } from 'react'

import MenuIcon from '@material-ui/icons/Menu'
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Checkbox,
  Button,
  Hidden
} from '@material-ui/core'

import MyDrawer from './MyDrawer'

const styles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  title: {
    flexGrow: 1
  },
  button: {
    color: theme.palette.primary.contrastText
  }
}))

const Navbar = ({ isChecked, isChanged }) => {

  const classes = styles()
  const [open, setOpen] = useState(false)

  const actionOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="menu"
            className={classes.menuButton}
            onClick={() => actionOpen()}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Jesus Villegas
        </Typography>

          <Hidden xsDown>
            <Button href='#welcome' className={classes.button}>About</Button>
            <Button href='#projects' className={classes.button}>Projects</Button>
            <Button href='#contact' className={classes.button}>Contact</Button>
          </Hidden>

          <Checkbox
            checked={isChecked}
            onChange={isChanged}
            icon={<Brightness4Icon color="secondary" />}
            checkedIcon={<Brightness7Icon color="secondary" />}
            name="checkedDark"
          />
        </Toolbar>
      </AppBar>

      <Hidden smUp>
        <MyDrawer
          open={open}
          onClose={actionOpen}
        />
      </Hidden>
    </>
  )
}

export default Navbar

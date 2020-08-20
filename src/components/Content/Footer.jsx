import React from 'react'
import { Typography, Link, Box, makeStyles } from '@material-ui/core'

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: '0px -2px 4px 1px rgba(0,0,0,0.2),0px -4px 5px 0px rgba(0,0,0,0.14),0px -1px 10px 0px rgba(0,0,0,0.12)'
  }
}))

const Footer = () => {

  const classes = styles()

  return (
    <div className={classes.root}>
      <Box textAlign='center' pt={2}>
        <Typography variant='caption'>
          Based on <Link href='https://www.freecodecamp.org/' target="_blank" rel="noopener" color='secondary'>freeCodeCamp</Link>'s Personal Portfolio Project.
        </Typography>
      </Box>
      <Box textAlign='center' pb={2}>
        <Typography variant='caption'>
          Coded by <Link href="https://github.com/gsus0194" target="_blank" rel="noopener" color='secondary'>Jesus Villegas</Link>
        </Typography>
      </Box>
    </div>
  )
}

export default Footer
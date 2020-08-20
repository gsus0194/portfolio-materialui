import React from 'react'
import { makeStyles, Typography, Box } from '@material-ui/core'

const styles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const Welcome = () => {

  const classes = styles()

  return (
    <div
      id='welcome'
      className={classes.root}
      style={{ minHeight: `100vh`, width: '100%' }}
    >
      <Typography variant='h1'>
        Hello There.
      </Typography>
      <Typography variant='h5' color='secondary'>
        <Box fontStyle='italic'>
          Welcome to my website!
        </Box>
      </Typography>
    </div>
  )
}

export default Welcome

import React from 'react'
import { makeStyles, Typography, Button, Box, Grid } from '@material-ui/core'

import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: theme.spacing(2)
  }
}))

const Contact = () => {

  const classes = styles()

  return (
    <div id='contact' className={classes.root} style={{ minHeight: '80vh', width: '100%' }}>
      <Typography variant="h2">
        Contact Information
        </Typography>

      <Grid
        container
        justify='center'
        alignItems='center'
      >
        <Grid item>
          <Box textAlign='center'>
            <Button className={classes.button} startIcon={<GitHubIcon color='secondary' />}>
              Github
              </Button>
          </Box>
        </Grid>

        <Grid item>
          <Box textAlign='center'>
            <Button className={classes.button} startIcon={<TwitterIcon color='secondary' />}>
              Twitter
              </Button>
          </Box>
        </Grid>

        <Grid item>
          <Box textAlign='center'>
            <Button className={classes.button} startIcon={<MailIcon color='secondary' />}>
              Mail
              </Button>
          </Box>
        </Grid>

        <Grid item>
          <Box textAlign='center'>
            <Button className={classes.button} startIcon={<PhoneAndroidIcon color='secondary' />}>
              Call Me
              </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact

import React from 'react'
import { Typography, Box, Grid, makeStyles } from '@material-ui/core'
import ProjectCard from './ProjectCard'

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolbar: theme.mixins.toolbar
}))

const Projects = () => {

  const classes = styles()

  return (
    <Box
      id="projects"
      className={classes.root}
    >
      <div className={classes.toolbar} />
      <Typography variant="h2">
        <Box mb={4} textAlign='center'>
          Projects
          </Box>
      </Typography>

      <Grid
        container
        justify='center'
        alignItems='center'
        spacing={5}
      >
        {
          [0, 1, 2, 3, 4, 5].map((value) => (
            <Grid key={value} item xs={12} sm={4}>
              <Box textAlign='center'>
                <ProjectCard />
              </Box>
            </Grid>
          ))
        }
      </Grid>
      <div className={classes.toolbar} />
    </Box>
  )
}

export default Projects
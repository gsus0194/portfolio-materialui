import React from 'react'
import { Card, CardMedia, CardActions, Button, makeStyles } from '@material-ui/core'
import CodeIcon from '@material-ui/icons/Code';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const styles = makeStyles(theme => ({
  button: {
    color: theme.palette.secondary.main
  },
  media: {
    height: 300
  }
}))

const ProjectCard = () => {

  const classes= styles()

  return (
    <Card>
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/800/600"
        title="Random Pic"
      />
      <CardActions style={{justifyContent: 'center'}}>
        <Button 
          className={classes.button}
          size='small' 
          startIcon={<CodeIcon />}
        >
          Code
        </Button>
        <Button 
          className={classes.button}
          size='small' 
          startIcon={<OpenInNewIcon />}
        >
          Live
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard

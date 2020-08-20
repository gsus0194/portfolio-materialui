import React from 'react'
import {
  makeStyles,
  Drawer
} from '@material-ui/core'
import MyList from './MyList'

const styles = makeStyles({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240
  }
})

const MyDrawer = ({open, onClose}) => {

  const classes = styles()

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
      open={open}
      onClose={onClose ? onClose : null}
    >
      <MyList isChanged={onClose} />
    </Drawer>
  )
}

export default MyDrawer

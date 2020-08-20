import React from 'react'
import {
  List, ListItem, ListItemIcon, ListItemText, Divider
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactsIcon from '@material-ui/icons/Contacts';

const MyList = ({isChanged}) => {
  return (
    <div 
      role='presentation'
      onClick={() => isChanged()}
    >
      <List component='nav'>
        <ListItem button component='a' href='#welcome'>
          <ListItemIcon>
            <InfoIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary='ABOUT' />
        </ListItem>

        <Divider />

        <ListItem button component='a' href='#projects'>
          <ListItemIcon>
            <WorkIcon color="secondary"/>
          </ListItemIcon>
          <ListItemText primary='PROJECTS' />
        </ListItem>

        <Divider />

        <ListItem button component='a' href='#contact'>
          <ListItemIcon>
            <ContactsIcon color="secondary"/>
          </ListItemIcon>
          <ListItemText primary='CONTACT' />
        </ListItem>
      </List>
    </div>
  )
}

export default MyList

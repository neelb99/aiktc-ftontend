import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import HelpIcon from '@material-ui/icons/Help';
import ErrorIcon from '@material-ui/icons/Error';
import {useHistory} from 'react-router-dom';
import FindInPageIcon from '@material-ui/icons/FindInPage';

const Listitems = ()=>{
	const history = useHistory()
	return(
		<>
			<ListItem button onClick={()=>history.push('/')} style={{marginTop:"10px"}}>
        <ListItemIcon>
          <VerifiedUserIcon />
        </ListItemIcon>
        <ListItemText primary="Fake News Checker" />
      </ListItem>
      <ListItem button onClick={()=>history.push('/recentfake')}>
        <ListItemIcon>
          <ErrorIcon />
        </ListItemIcon>
        <ListItemText primary="Recent Fake News" />
      </ListItem>
      <ListItem button onClick={()=>history.push('/about')}>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="About Farzi" />
      </ListItem>
      <ListItem button onClick={()=>history.push('/imagechecker')}>
        <ListItemIcon>
          <FindInPageIcon />
        </ListItemIcon>
        <ListItemText primary="Image Checker" />
      </ListItem>
		</>
	);
}

export default Listitems
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { useNavigate } from 'react-router-dom';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';

import { useAuth } from '../hooks/useAuth';


const LeftBar=()=>{
  const { isAuthenticated } = useAuth();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const navigate = useNavigate();

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >     
      <List>
      <ListItem key = {'Dashboard'} disablePadding>
            <ListItemButton onClick={()=>{navigate('/dashboard')}}>
                <ListItemIcon>
                    <DashboardCustomizeTwoToneIcon/>
                </ListItemIcon>
                <ListItemText primary={'Dashboard'} />
            </ListItemButton>
        </ListItem>
        <ListItem key = {'User Table'} disablePadding>
            <ListItemButton onClick={()=>{navigate('/alluser')}}>
                <ListItemIcon>
                    <GroupsOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary={'User Table'} />
            </ListItemButton>
        </ListItem>
        <ListItem key = {'Employee Table'} disablePadding>
            <ListItemButton onClick={()=>{navigate('/employee')}}>
                <ListItemIcon>
                    <GroupsOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary={'Employee Table'} />
            </ListItemButton>
        </ListItem>
       
      </List>
    </Box>
  );

  return (
    <div>
      
      { isAuthenticated() ? (['left'].map((anchor) => (
        <React.Fragment key={anchor}>
            <MenuIcon  onClick={toggleDrawer(anchor, true)}/>

          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))) : (null)}
    </div>
  );
}
export default LeftBar;
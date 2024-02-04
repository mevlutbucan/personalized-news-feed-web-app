import { NavLink } from 'react-router-dom';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import NewspaperIcon from '@mui/icons-material/Newspaper';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

import { Paths } from '../../../../core/enums/Paths';

export const MenuItems = (
  <>
    <ListItemButton component={NavLink} to={Paths.News}>
      <ListItemIcon>
        <NewspaperIcon />
      </ListItemIcon>
      <ListItemText primary="News" />
    </ListItemButton>
    <ListItemButton component={NavLink} to={Paths.Search}>
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <ListItemText primary="Search" />
    </ListItemButton>
    <ListItemButton component={NavLink} to={Paths.Profile} disabled>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton component={NavLink} to={Paths.Preferences}>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  </>
);

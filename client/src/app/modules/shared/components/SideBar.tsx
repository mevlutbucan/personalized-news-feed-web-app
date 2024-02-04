import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { MenuItems } from './MenuItems';

import { useAppBarContext } from '../hooks/AppBarHooks';

import { OPENED_SIDEBAR_WIDTH } from '../constants';

const StyledSideBar = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: OPENED_SIDEBAR_WIDTH,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(6),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(8),
      },
    }),
  },
}));

export default function SideBar() {
  const { isOpen, toggleOpen } = useAppBarContext();

  return (
    <StyledSideBar variant="permanent" open={isOpen}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleOpen}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">{MenuItems}</List>
    </StyledSideBar>
  );
}

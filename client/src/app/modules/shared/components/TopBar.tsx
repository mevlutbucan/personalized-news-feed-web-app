import { styled } from '@mui/material/styles';
import AppBar, { type AppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';

import UserNavButton from './UserNavButton';

import { useAppBarContext } from '../hooks/AppBarHooks';

import { OPENED_SIDEBAR_WIDTH } from '../constants';

const StyledTopBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<Props>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: OPENED_SIDEBAR_WIDTH,
    width: `calc(100% - ${OPENED_SIDEBAR_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface Props extends AppBarProps {
  open?: boolean;
}

export default function TopBar() {
  const { isOpen, toggleOpen } = useAppBarContext();

  return (
    <StyledTopBar position="absolute" open={isOpen}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleOpen}
          sx={{
            marginRight: '36px',
            ...(isOpen && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Personalized News Feed Web App
        </Typography>
        <UserNavButton />
      </Toolbar>
    </StyledTopBar>
  );
}

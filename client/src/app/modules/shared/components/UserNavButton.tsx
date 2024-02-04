import { type FunctionComponent, useState } from 'react';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Person from '@mui/icons-material/Person';

import { useAppDispatch, useAppSelector } from '../../../services/redux/hooks';
import { signOut } from '../../../services/redux/auth/actions';

const UserNavButton: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const firstName = useAppSelector((state) => state.user.firstName);
  const lastName = useAppSelector((state) => state.user.lastName);
  const email = useAppSelector((state) => state.user.email);

  const [isOpen, toggleOpen] = useState(false);
  const handleUserMenuClick: React.FocusEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!isOpen) {
      toggleOpen(!isOpen);
    } else {
      setTimeout(() => toggleOpen(!isOpen), 300);
    }
  };

  const handleLogout: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    dispatch(signOut());
  };

  return (
    <Stack direction="row" position="relative">
      <Button
        variant="text"
        size="large"
        disableElevation
        disableRipple
        color="inherit"
        startIcon={<Person />}
        sx={{ textTransform: 'capitalize' }}
        onFocus={handleUserMenuClick}
        onBlur={handleUserMenuClick}
      >
        {`${firstName} ${lastName}`}
      </Button>

      <Paper sx={{ position: 'absolute', top: 40, right: 0, minWidth: '100%', ...(!isOpen && { display: 'none' }) }}>
        <Stack>
          <Typography component="div" p={2} color="grey.600" fontSize="0.8125rem" lineHeight={1.75}>
            {email}
          </Typography>
          <Divider />
          <Button
            color="primary"
            size="small"
            sx={{ my: 1, mx: 1.5, p: 0.5, justifyContent: 'start', textTransform: 'none' }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default UserNavButton;

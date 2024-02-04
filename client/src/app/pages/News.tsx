import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';

import { useAppDispatch, useAppSelector } from '../services/redux/hooks';
import { signOut } from '../services/redux/auth/actions';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../core/enums/Paths';
import { useEffect } from 'react';
import AppBar from '../modules/shared/components/AppBar';

export default function News() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loggedIn = useAppSelector((state) => state.auth.loggedIn);

  useEffect(() => {
    if (!loggedIn) {
      navigate(Paths.SignIn);
    }
  }, [loggedIn]);

  const handleClick = () => {
    dispatch(signOut());
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar />

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
              <Button variant="contained" onClick={handleClick}>
                Çıkış Yap
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

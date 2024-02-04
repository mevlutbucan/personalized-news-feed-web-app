import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';

import PreferenceForm from '../modules/User/components/PreferenceForm';

export default function Preferences() {
  return (
    <>
      <Helmet title="Preferences" />

      <Box
        component="main"
        display="flex"
        position="relative"
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        bgcolor="primary.main"
      >
        <PreferenceForm title="Choose your preferences" />
      </Box>
    </>
  );
}

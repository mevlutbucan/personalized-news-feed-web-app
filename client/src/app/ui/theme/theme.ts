import { createTheme } from '@mui/material';

export default createTheme({
  palette: {},
  components: {},
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: [
      'Public Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

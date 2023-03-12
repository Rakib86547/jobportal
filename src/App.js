import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/route/router';
import theme from './theme/theme';

function App() {
  return (

    <Box sx={{maxWidth: '1300px', margin: 'auto', padding: '0 10px'}}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
    </Box>
  );
}

export default App;

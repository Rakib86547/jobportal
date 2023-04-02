import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import ScrollButton from './Components/ScrollButton/ScrollButton';
import { getUser, veryfieEmail } from './features/auth/authSlice';
import auth from './firebase/firebase.config';
import router from './routes/route/router';
import theme from './theme/theme';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {        
        dispatch(getUser(user.email))           
      }
    })
  }, [])

  return (
    <Box sx={{ maxWidth: '1300px', margin: 'auto', padding: '0 10px' }}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <ScrollButton />
        <CssBaseline />
      </ThemeProvider>
    </Box>
  );
}

export default App;

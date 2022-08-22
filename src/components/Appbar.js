import React from 'react';
import { AppBar, Toolbar, Typography, createTheme, ThemeProvider } from '@mui/material';

const Appbar = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#607d8b",
            },
            secondary: {
                main: '#ffea00',
            },
        },
    });

  return (
    <div>
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" align="center">
                        Mini Diary and To-do list
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    </div>
  )
}

export default Appbar;

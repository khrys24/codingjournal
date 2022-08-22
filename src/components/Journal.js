import React, {useState, useRef} from 'react';
import {Typography,
    CssBaseline,
    Container,
    Button,
    Grid,
    Paper,
    TextField,
    Checkbox,
    Input,
    createTheme,
    ThemeProvider
} from "@mui/material";


const Journal = () => {
    const [list, setList] = useState([]);
    const dateRef = useRef();
    const textareaRef = useRef();

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
    
    const onFormSave = (e) => {
        e.preventDefault();
    
        const result = {
            date: dateRef.current.value,
            thoughts: textareaRef.current.value
        };
    
        setList([...list, result]);
    }

  return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" align="center">
                        Mini Diary and To-do list
                    </Typography>
                </Toolbar>
            </AppBar> */}
            <Container component="div" maxWidth="xs" >
                <Paper component="form" elevation={6} sx={ {my: 6, p: 3} }>
                    <Grid container rowSpacing={1}>
                        <Grid item md={6}>
                            Thoughts for the day:
                        </Grid>
                        <Grid item md={6} align="right"> 
                            <TextField
                                id="dateInput"
                                size='small'
                                label='Date'
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputRef={dateRef}
                                sx={ {width: 150} }/>
                        </Grid>
                        <Grid item md={12}>
                            <TextField
                                fullWidth
                                id="thoughtsInput"
                                label="What's on your mind?"
                                multiline
                                rows={3}
                                inputRef={textareaRef}
                            />              
                        </Grid>
                        <Grid item md={12}>
                            <Button type="submit" variant="contained" size='small' onClick={onFormSave}>
                                Save
                            </Button>
                        </Grid>
                        <Grid align="center" style={ {backgroundColor: '#607d8b', color: 'white', width: '100%', height: 30, marginTop: 7, padding: 3, borderRadius: 5} }>
                            Thoughts for the day:
                        </Grid>
                        {/* Show list */}
                        {
                            list.map(item => {
                                return(
                                    <Grid container fullWidth sx={{marginTop: 1, backgroundColor: '#95a3a0', borderRadius: '5px'}}>
                                            <Grid container md={12} style={ {paddingLeft: '10px'} } fullWidth>
                                                <Grid item component="p" md={12}>Date: {item.date}</Grid>
                                                <Grid item component="p" md={12}>{item.thoughts}</Grid>
                                            </Grid>
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                </Paper>
            </Container>
        </ThemeProvider>
  )
}

export default Journal;

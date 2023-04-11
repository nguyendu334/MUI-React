import { useState, useEffect } from 'react';
import { Button, Typography, AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import Form from './components/Form';

function App() {
    const [value, setValue] = useState(0);
    return (
        <div>
            {/* <Typography variant="h2" sx={{ color: 'red' }}>
                MUI
            </Typography>
            <p>sdasdaasdasdasd</p>
            <Button>Click me</Button>
            <Button variant="contained" color="success" sx={{ margin: '30px' }}>
                Click me
            </Button>
            <Button variant="outlined" onClick={() => alert('hello')}>
                Click me
            </Button>
            <br />
            <br />
            <br />
            <br />
            <Form /> */}

            <AppBar position="static">
                <Toolbar>
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3209893/material-ui-icon-md.png" alt="logo" height="50px" />
                    <Typography variant="h5" sx={{marginLeft: '15px'}}>MUI</Typography>
                    <Tabs
                        sx={{ marginLeft: 'auto' }}
                        value={value}
                        onChange={(e, newValue) => setValue(newValue)}
                        textColor="inherit"
                        indicatorColor="secondary"
                    >
                        <Tab label="Home" />
                        <Tab label="About" />
                        <Tab label="Contact" />
                    </Tabs>
                    <Button variant="contained" color="success" sx={{ marginLeft: 'auto' }}>
                        Signin
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default App;

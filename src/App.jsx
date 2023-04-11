import { useState, useEffect } from 'react';
import { Button, Typography, AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import Form from './components/Form';
import Cards from './components/Cards';
import Modals from './components/Modals';
import Containers from './components/Containers';
import ListsComponent from './components/ListsComponent';
import Accord from './components/Accord';
import DrawerMenu from './components/DrawerMenu';

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

            <AppBar position="static" sx={{background: '#001E3C'}}>
                <Toolbar>
                    <img
                        src="https://v4.mui.com/static/logo.png"
                        alt="logo"
                        height="50px"
                    />
                    <Typography variant="h5" sx={{ marginLeft: '15px' }}>
                        MUI
                    </Typography>
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
                        Sign in
                    </Button>
                </Toolbar>
            </AppBar>
            <div style={{ marginTop: 70 }}>
                <Cards />
                <Modals />
                <Containers />
                <ListsComponent />
                <Accord />
                <DrawerMenu />
            </div>
        </div>
    );
}

export default App;

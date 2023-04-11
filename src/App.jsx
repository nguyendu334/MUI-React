import { Button, TextField, Typography } from '@mui/material';
import Form from './components/Form';
function App() {
    return (
        <div>
            <Typography variant="h2" sx={{ color: 'red' }}>
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
            <Form />
        </div>
    );
}

export default App;

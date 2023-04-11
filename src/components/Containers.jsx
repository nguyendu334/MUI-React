import { Container, Typography } from '@mui/material';
import React from 'react';

export default function Containers() {
    return (
        <div>
            <Container sx={{ background: '#C2E0FF' }} maxWidth="xs">
                <Typography variant="body2">Container</Typography>
            </Container>
            <br />
            <Container sx={{ background: '#99CCF3' }} maxWidth="sm">
                <Typography variant="body2">Container small</Typography>
            </Container>
            <br />
            <Container sx={{ background: '#66B2FF' }} maxWidth="md">
                <Typography variant="body2">Container medium</Typography>
            </Container>
            <br />
            <Container sx={{ background: '#3399FF' }} maxWidth="lg">
                <Typography variant="body2">Container lang</Typography>
            </Container>
            <br />
            <Container sx={{ background: '#007FFF' }} maxWidth="xl">
                <Typography variant="body2">Container large</Typography>
            </Container>
        </div>
    );
}

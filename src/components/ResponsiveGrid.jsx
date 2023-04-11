import { Grid } from '@mui/material';
import React from 'react';

export default function ResponsiveGrid() {
    return (
        <div>
            <Grid container sx={{ margin: '5' }}>
                <Grid
                    item
                    xs={6}
                    sm={6}
                    md={9}
                    lg={3}
                    xl={2}
                    sx={{ background: 'red' }}
                    spacing={2}
                >
                    Content A
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={9} xl={1} sx={{ background: 'yellow' }}>
                    Content B
                </Grid>
            </Grid>
        </div>
    );
}

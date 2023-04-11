import {
    Accordion,
    Typography,
    AccordionSummary,
    AccordionDetails,
    Autocomplete,
    TextField,
} from '@mui/material';
import React from 'react';

export default function Accord() {
    const courses = ['React', 'Nodejs', 'Vuejs', 'Nextjs', 'UI', 'UX', 'Figma'];
    return (
        <div>
            <Accordion sx={{ margin: 5}}>
                <AccordionSummary>
                    <Typography variant="h6">Accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Autocomplete
                sx={{ width: 200, margin: 5 }}
                options={courses}
                renderInput={(params) => <TextField {...params} label="Select a course" />}
            />
        </div>
    );
}

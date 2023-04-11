import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

export default function ListsComponent() {
    const courses = ['React', 'Nodejs', 'Vuejs'];
    return (
        <div>
            <List sx={{ width: 250, background: '#66B2FF', marginLeft: 5, marginTop: 5 }}>
                {courses.map((course) => (
                    <ListItem>
                        <ListItemButton>{'>'}</ListItemButton>
                        <ListItemText primary={course} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

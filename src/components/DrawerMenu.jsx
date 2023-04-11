import React, { useState } from 'react';
import {
    Button,
    Drawer,
    List,
    ListItemText,
    ListItemButton,
    Snackbar,
    Alert,
    CircularProgress,
    LinearProgress,
    Rating,
    Typography,
    IconButton,
} from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';

export default function DrawerMenu() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();

    const courses = ['React', 'Nodejs', 'Vuejs', 'Nextjs', 'UI/UX', 'Figma'];
    return (
        <div>
            <Button variant="contained" onClick={() => setOpen(true)} sx={{ margin: 5 }}>
                Open Drawer
            </Button>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List>
                    {courses.map((course) => (
                        <ListItemButton onClick={() => setOpen(false)}>
                            <ListItemText primary={course} />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>

            <Snackbar open={open} autoHideDuration={2000}>
                <Alert severity="success" sx={{ marginLeft: 10 }}>
                    This is snackbar alert!
                </Alert>
            </Snackbar>
            <br />
            <CircularProgress color="secondary" value={75} sx={{ margin: 5 }} />
            <LinearProgress sx={{ margin: 5 }} />

            <Rating
                sx={{ margin: 5, display: 'flex' }}
                value={value}
                onChange={(e, val) => setValue(val)}
                size="large"
                precision={0.5}
            />
            <Typography sx={{ margin: 5 }}>
                Rated {value !== undefined ? value : 0} stars
            </Typography>

            <IconButton onClick={() => alert('Icon btn')}>
                <AddReactionIcon sx={{ margin: 5 }} color='secondary'/>
            </IconButton>
        </div>
    );
}

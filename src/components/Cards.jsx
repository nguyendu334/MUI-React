import React, { useState } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@mui/material';

export default function Cards() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Card sx={{ maxWidth: 300, marginLeft: 5 }}>
                <CardMedia
                    component={'img'}
                    height="140"
                    image="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?compress=1&resize=1024x768"
                    alt="test img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Web design
                    </Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="error" onClick={() => setOpen(true)}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you sure to delete this product?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

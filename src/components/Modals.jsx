import { Box, Button, Link, Modal, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

export default function Modals() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setOpen(true)} sx={{ marginLeft: 5, marginTop: 5 }}>
                Open Modal
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box position="absolute" top="50%" left="50%">
                    <Typography>This is Modal</Typography>
                    <Button variant="contained" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                </Box>
            </Modal>

            <Link
                variant="h4"
                color="secondary"
                href="#"
                underline="hover"
                sx={{ marginLeft: 5, marginTop: 5 }}
            >
                NavLink
            </Link>
        </div>
    );
}

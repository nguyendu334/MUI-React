import React from 'react';
import {
    Box,
    TableContainer,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import Layout from '../components/Layout/Layout';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
    return (
        <Layout>
            <Box
                sx={{
                    my: 5,
                    ml: 10,
                    '& h4': {
                        fontWeight: 'bold',
                        mb: 2,
                    },
                }}
            >
                <Typography variant="h4">Contact</Typography>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </p>
            </Box>
            <Box
                sx={{
                    m: 3,
                    width: '600px',
                    ml: 10,
                    '@media (max-width: 600px)': {
                        width: '300px',
                    },
                }}
            >
                <TableContainer>
                    <Table aria-label="contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: 'black', color: 'white' }} align="center">
                                    Contact Details
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> 098 9831 609
                                    (Mon-Fri 9am-5pm)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <EmailIcon sx={{ color: 'skyblue', pt: 1 }} />{' '}
                                    nguyendu334@gmail.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{ color: 'green', pt: 1 }} /> 098 983 1609
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    );
};

export default Contact;

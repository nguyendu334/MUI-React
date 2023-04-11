import React, { useState } from 'react';
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material';

export default function Form() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        term: false,
        course: '',
    });

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: [e.target.value],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="name"
                    onChange={handleChange}
                    type="text"
                    value={inputs.name}
                    variant="outlined"
                    placeholder="Name"
                />{' '}
                <br />
                <TextField
                    name="email"
                    onChange={handleChange}
                    type="email"
                    value={inputs.email}
                    variant="outlined"
                    placeholder="Email"
                />
                <br />
                <TextField
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={inputs.password}
                    variant="outlined"
                    placeholder="Password"
                />
                <br />
                <FormGroup>
                    <FormControlLabel
                        label="I agree to the terms and conditions"
                        control={
                            <Checkbox
                                onChange={() =>
                                    setInputs((prev) => ({ ...prev, term: !inputs.term }))
                                }
                            />
                        }
                    />
                </FormGroup>
                <br />
                <FormControl fullWidth>
                    <InputLabel id="menu">Course</InputLabel>
                    <Select
                        label="courses"
                        name="course"
                        value={inputs.course}
                        onChange={handleChange}
                    >
                        <MenuItem value={'react'}>React</MenuItem>
                        <MenuItem value={'mongo'}>Mongo</MenuItem>
                        <MenuItem value={'express'}>Express</MenuItem>
                        <MenuItem value={'vue'}>Vue</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <Button type="submit" variant="contained" color="success">
                    Submit
                </Button>
            </form>
        </>
    );
}

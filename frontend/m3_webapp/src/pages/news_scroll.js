import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

function DogBreeds() {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then((response) => response.json())
            .then((data) => {
                setBreeds(Object.keys(data.message));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Box
            sx={{
                height: '100vh',
                overflowY: 'scroll',
                padding: '16px',
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: '16px' }}>
                Dog Breeds
            </Typography>

            {breeds.length === 0 ? (
                <Typography>Loading data...</Typography>
            ) : (
                <ul>
                    {breeds.map((breed, index) => (
                        <li key={index}>{breed}</li>
                    ))}
                </ul>
            )}
        </Box>
    );
}

export default DogBreeds;

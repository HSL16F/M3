import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import StockData from './StockData';
import StockNews from "./stock_news";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const ticker_list = ['META', 'AAPL', 'AMZN', 'NFLX', 'GOOG', 'BHP', 'CSL'];

function TickerAutocomplete() {
    const [selectedTicker, setSelectedTicker] = useState('');

    const handleInputChange = (event, value) => {
        setSelectedTicker(value);
    };

    useEffect(() => {
        // This effect will run whenever the selectedTicker changes
        console.log('Selected Ticker:', selectedTicker);
    }, [selectedTicker]);

    return (
        <Box sx={{display: "flex", alignContent: "flex-start"}}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={ticker_list}
                sx={{ width: "10vw", height: '100vh'}}
                renderInput={(params) => <TextField {...params} label="Select a ticker" />}
                onInputChange={handleInputChange}
            />

            {selectedTicker && (
                <StockData key={selectedTicker} ticker={selectedTicker} />

            )}
            {selectedTicker && (
                <StockNews key={selectedTicker} ticker={selectedTicker} />

            )}
        </Box>
    );
}

export default TickerAutocomplete;

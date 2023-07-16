import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import StockData from './StockData';
import StockNews from "./stock_news";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {ThemeProvider, createTheme } from '@mui/material/styles';
import StockGraph from "./graphs/stock_graph";

const ticker_list = ['META', 'AAPL', 'AMZN', 'NFLX', 'GOOG', 'BHP', 'CSL'];

const theme = createTheme({
    palette: {
        background: {
            deep: '#4a4c60',
            highlight: "#468f9c",
            space: "#282837",
            dried_lavender: "#B4A7EF"
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        action: {
            active: '#8080c0',
        },
    },
});

function CompanyInfo() {
    const [selectedTicker, setSelectedTicker] = useState('');

    const handleInputChange = (event, value) => {
        setSelectedTicker(value);
    };

    useEffect(() => {
        // This effect will run whenever the selectedTicker changes
        console.log('Selected Ticker:', selectedTicker);
    }, [selectedTicker]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{display: "flex", flexDirection: "column"}}>
            <Box sx={{display: "flex", backgroundColor: "background.deep", height: "50vh"}}>
                <Box sx={{height: "50vh", width: "80vw",
                    display: "flex", alignContent: "flex-start", backgroundColor: "#1a1a28", gap: 2}}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: "10vh", width: "12vw",
                        backgroundColor: "#468f9c",
                        m: 2,
                    }}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={ticker_list}
                            sx={{ width: "10vw", height: "20vh", display: "flex", flexDirection: 'column',
                                alignItems: 'center', mt: 2}}
                            renderInput={(params) => <TextField {...params} label="Select a ticker" />}
                            onInputChange={handleInputChange}
                        />
                    </Box>


                    {selectedTicker && (
                        <StockData key={selectedTicker} ticker={selectedTicker}/>

                    )}
                    {/*{selectedTicker && (*/}
                    {/*    <StockNews key={selectedTicker} ticker={selectedTicker} />*/}

                    {/*)}*/}
                    <Box sx={{
                        height: "40vh", width: "50vw",
                        m: 2, backgroundColor: "background.dried_lavender",
                        borderRadius: 4}}>
                        <StockGraph></StockGraph>
                    </Box>
                </Box>

                <Box sx={{display: 'flex',
                    justifyContent: 'flex-end'}}>
                    <Box sx={{
                        backgroundColor: "action.active",
                        height: "100vh",
                        width: "20vw",
                        overflow: "scroll",
                    }}>
                        {selectedTicker && (
                            <StockNews key={selectedTicker} ticker={selectedTicker}/>
                        )}
                    </Box>
                </Box>



            </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "flex-start",
                    backgroundColor: "background.space",
                    height: "50vh",
                    width: "80vw",
                    gap: "2%"}}>
                    <Box sx={{
                        height: "42vh", width: "20vw",
                        backgroundColor: "background.dried_lavender",
                        mt: 2,
                        ml: 2,
                        borderRadius: 4,
                        padding: 2,
                        overflow: "scroll"}}>
                        Competitor list
                    </Box>
                    <Box sx={{
                        height: "42vh", width: "60vw",
                        mt: 2,
                        mr: 2,
                        backgroundColor: "background.dried_lavender",
                        borderRadius: 4, padding: 2,
                        overflow: "scroll"}}>
                        Competitor stats
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default CompanyInfo;

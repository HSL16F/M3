import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import {Box, Container, Grid, Unstable_Grid2} from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled} from '@mui/material/styles';
import StockData from "./pages/StockData"
import Demo_page from "./pages/demo_page";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import TickerAutocomplete from "./pages/Autocomplete_Box";

function App() {
  return (
      <Box
          sx={{
            display: 'flex',
            '& > :not(style)': {
              m: 1,
              p: 2
            },
          }}
      >
        <Paper sx={{
          backgroundColor: "#B4A7EF"
        }}>
          <StockData ticker="META"/>
          </Paper>
        <Paper sx={{
          backgroundColor: "#5E825E"
        }}>
          <StockData ticker="GOOG"/>
        </Paper>

          <Paper sx={{backgroundColor: "#B4A7EF"}}>
              <TickerAutocomplete/>
          </Paper>


      </Box>

  );
}


export default App;

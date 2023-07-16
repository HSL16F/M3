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
import StockNews from "./pages/stock_news";
import company_info from "./pages/company_info";
import CompanyInfo from "./pages/company_info";

function App() {
  return (
      <Box sx={{display: "flex", }}>
          {/*<Box sx={{height: "100vh", width: "80vw", backgroundColor: "#5E825E",*/}
          {/*display: "flex", alignContent: "flex-start"}}>*/}
              {/*<Paper sx={{*/}
              {/*  backgroundColor: "#B4A7EF",*/}
              {/*    height: '100vh',*/}
              {/*    width: '30vw'*/}

              {/*}}>*/}
              {/*  <StockData ticker="META"/>*/}
              {/*  </Paper>*/}
              {/*<Paper sx={{*/}
              {/*    backgroundColor: "#5E825E",*/}
              {/*    height: '100vh',*/}
              {/*}}>*/}
              {/*  <StockData ticker="GOOG"/>*/}
              {/*</Paper>*/}

          {/*    <Paper sx={{backgroundColor: "#B4A7EF",height: '80vh', width: "50vw"}}>*/}
          {/*        <TickerAutocomplete/>*/}
          {/*    </Paper>*/}
          {/*</Box>*/}
          {/*<Box sx={{display: 'flex',*/}
          {/*    justifyContent: 'flex-end'}}>*/}
          {/*    <StockNews ticker="META"/>*/}
          {/*</Box>*/}
          <CompanyInfo></CompanyInfo>
      </Box>

  );
}


export default App;

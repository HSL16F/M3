import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import {Box, Grid, Unstable_Grid2} from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled} from '@mui/material/styles';



function App() {
  return (
      <div className="App">
          <Grid container spacing={2}>
              <Grid item xs={2}>
                  <Box sx={{
                      width: '15vw',
                      height: '100vh',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      border: "1px dashed grey",
                  }}
                       className="boxContainer">
                  </Box>
              </Grid>
              <Grid item xs={6}>
                  <Box sx={{
                      p: 0.5,
                      display: 'flex',
                      width: "100vw",
                      height: '33vh',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      gap: '8px' }}>
                      <Box
                          sx={{
                              width: "30vw",
                              height: '30vh',
                              display: 'flex',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                          }}
                          className="boxContainer">
                              Company info:
                          ajdasjdajdaijdajdasdijaodj adiajdpasjd
                          Add API call with information here
                      </Box>
                      <Box
                          sx={{
                              width: "48vw",
                              height: '30vh',
                              display: 'flex',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                          }}
                          className="boxContainer">
                          Graph goes here
                      </Box>
                  </Box>
                  <Box
                      sx={{
                          m: "8px",
                          width: "80vw",
                          height: '60vh',
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-start',
                      }}
                      className="boxContainer">
                      Competitive intelligence
                  </Box>
              </Grid>
          </Grid>


          <Typography>
              WIP Website
          </Typography>

      </div>
  );
}




export default App;

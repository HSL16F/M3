// Example usage in src/MainContent.js
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { APP_BAR_HEIGHT } from './theme'; // Import the height variable
import TickerModule from '../modules/TickerModule';
import D3LineChartModule from '../modules/ChartModule';


const MainContent = () => {
  // Mock data
  const tickerData = {
    ticker: 'AAPL',
    price: '$150.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
  };
  const sampleData = [
    { date: '2021-01-01', value: 0 },
    { date: '2021-01-02', value: 1 },
    { date: '2021-01-03', value: 2 },
    { date: '2021-01-04', value: 2 },
    { date: '2021-01-05', value: 4 },
    { date: '2021-01-06', value: 3 },
    { date: '2021-01-07', value: 0 },
    { date: '2021-01-08', value: 2 },
    // ... more data points
  ];
  const cardSize = { width: 500, height: 300 };

  return (
    <Box style={{ height: `calc(100vh - ${APP_BAR_HEIGHT}px)`, backgroundColor: 'var(--color-dark-purple)', overflow: 'auto'}}>
      <Grid container spacing={2} justifyContent="left" alignItems="center" sx={{p: 1}}>
        
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TickerModule
            ticker={tickerData.ticker}
            price={tickerData.price}
            description={tickerData.description}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={8} lg={9}>
          
          <D3LineChartModule
            data={sampleData}
            width={500}
            height={300}
            lineColor="var(--text_grey)" // Example: orange line
            fillColor="rgba(40, 255, 40, 0.3)" // Example: light orange fill
          />
        </Grid>
    
      </Grid>
    </Box>
  );
};

export default MainContent;

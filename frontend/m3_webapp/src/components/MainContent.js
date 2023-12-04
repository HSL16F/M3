// Example usage in src/MainContent.js
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { APP_BAR_HEIGHT } from './theme'; // Import the height variable
import TickerModule from '../modules/TickerModule';
import D3LineChartModule from '../modules/ChartModule';
import NewsModule from '../modules/newsModule';


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

  // Example RSS feed data
  const rssFeedData = [
    {
      title: "Article 1",
      pubDate: "2021-01-01T12:00:00Z",
      description: "A brief description of Article 1."
    },
    {
      title: "Article 2",
      pubDate: "2022-01-01T12:00:005",
      description: "A brief description of Article 2. Lorem isupm"
    },
    {
      title: "Article 3",
      pubDate: "2022-02-01T12:00:005",
      description: "A brief description of Article 3. Lorem isupm dolor sit amet, consectetur adipiscing "
    },
    // ... more articles
  ];


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

    <Grid item xs={12} sm={6} md={8} lg={9}>
      <NewsModule feed={rssFeedData} />
    </Grid>

    </Box>
  );
};

export default MainContent;

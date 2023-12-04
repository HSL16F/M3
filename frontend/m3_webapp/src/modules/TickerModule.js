// src/modules/TickerModule.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TickerModule = ({ ticker, price, description }) => {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: 'var(--color-light-purple)',color: "var(--text_grey)"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, color: "var(--text_grey)" }} gutterBottom>
          Ticker
        </Typography>
        <Typography variant="h5" component="div">
          {ticker}
        </Typography>
        <Typography sx={{ mb: 1.5}}>
          Ticker Price: {price}
        </Typography>
        <Typography variant="body2">
          Ticker Description
          <br />
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TickerModule;

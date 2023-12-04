// src/modules/NewsModule.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const NewsModule = ({ feed }) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 400, backgroundColor: 'var(--color-light-purple)', color: "var(--text_grey)"}}>
      <CardContent>
        <Typography sx={{ fontSize: 24, color: "var(--text_grey)" }} gutterBottom>
          News Feed
        </Typography>
        <Box sx={{
            maxHeight: '200px',
            overflowY: 'auto',
            mt: 1,
            '&::-webkit-scrollbar-track': {
                backgroundColor: 'var(--color-light-purple)',
                borderRadius: '10px',
            },
            '&::-webkit-scrollbar': {
                width: '8px',
                backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'var(--text_grey)',
                borderRadius: '10px',
                border: '2px solid var(--color-light-purple)',
            },
            '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#555',
            },
            scrollbarWidth: 'thin', /* For Firefox */
            scrollbarColor: 'var(--text_grey) var(--color-light-purple)', /* For Firefox */
            }}>
          <List dense>
            {feed.map((item, index) => (
              <ListItem key={index} sx={{ color: "var(--text_grey)" }}>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" sx={{ color: "var(--text_grey)" }}>
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="caption" sx={{ color: "var(--text_grey)" }} display="block">
                        {new Date(item.pubDate).toLocaleString()}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "var(--text_grey)" }}>
                        {item.description}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NewsModule;

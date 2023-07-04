import logo from '../logo.svg';
import '../App.css';
import * as React from 'react';
import {Box, Container, Grid, Unstable_Grid2} from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled} from '@mui/material/styles';
import StockData from "./StockData"

function Item_top(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                height: "50%",
                width: "50%",
                borderRadius: "8px",
                bgcolor: "#836fc2",
                p: 1,
                m: 1
            }}
            {...other}
        />
    );
}

function Item_bottom(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                height: "20%",
                width: "97%",
                borderRadius: "8px",
                bgcolor: "#52af9d",
                p: 1,
                m: 1
            }}
            {...other}
        />
    );
}

function Demo_Page() {
    return (
        <div className="App">
            <Container
                sx={{
                    bgcolor: "#4a4c60",
                    height: "100vh",

                }}>
                <Grid sx={{p: 1}}>
                    <Box sx={{
                        alignItems: 'flex-start',
                        display: 'flex',
                        flexDirection: 'row',

                    }}
                         className="boxContainer">
                        <Item_top><StockData/></Item_top>
                        <Item_top>Hello there</Item_top>
                    </Box>
                </Grid>
                <Grid
                    sx={{
                        p: 1}}>
                    <Box sx={{
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                    }}
                         className="boxContainer">
                        <Item_bottom>Test 1</Item_bottom>
                        <Item_bottom>Test 2</Item_bottom>
                        <Item_bottom>Test 3</Item_bottom>
                        <Item_bottom>Test 5</Item_bottom>
                    </Box>
                </Grid>
            </Container>
        </div>
    );
}


export default Demo_Page;

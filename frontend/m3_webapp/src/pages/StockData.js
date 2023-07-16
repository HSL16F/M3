import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";

function StockData({ticker}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const api_url = "https://m3_fast_api-1-z8464729.deta.app/stocks/" + ticker
                const response = await fetch(api_url);
                console.log(api_url)
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading data...</div>;
    }

    if (!data) {
        // return <div>No data available.</div>;
        return(
            <Paper sx={{
                backgroundColor: "#B4A7EF",
                height: '40vh', width: "16vw", mt: 2, pl: "0.5vw"}}>
                <h3 style={{ marginBottom: "0rem" }}>{ticker}</h3>
                <ul style={{ marginTop: "0rem" }}>
                    <li>Name: Company Name</li>
                    <li>Current Price: $100</li>
                    <li>Industry: Very cool Industry</li>
                    <li>Sector: Very Cool Sector</li>
                    <li>Exchange: NASDAQ</li>
                    <li>Country: Arstotzka</li>
                    <li>Currency: BTC</li>
                    <li>MarketCap: 1,000,000</li>
                </ul>
            </Paper>
        );
    }

    return (
        <Paper sx={{
            backgroundColor: "#B4A7EF",
            height: '100vh',
            padding: 2,
            m: 2}}>
            <h3 style={{ marginBottom: "0rem" }}>{data.symbol}</h3>
            <ul style={{ marginTop: "0rem" }}>
                <li>Name: {data.data.Name}</li>
                <li>Current Price: {data.data.Current_price}</li>
                <li>Industry: {data.data.Industry}</li>
                <li>Sector: {data.data.Sector}</li>
                <li>Exchange: {data.data.Exchange}</li>
                <li>Country: {data.data.Country}</li>
                <li>Currency: {data.data.Currency}</li>
                <li>MarketCap: {data.data.MarketCap}</li>
            </ul>
        </Paper>
    );
}

export default StockData;

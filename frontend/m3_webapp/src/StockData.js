import React, { useState, useEffect } from "react";

function StockData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://127.0.0.1:2000/stocks/GOOG");
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
        return <div>No data available.</div>;
    }

    return (
        <div>
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
        </div>
    );
}

export default StockData;

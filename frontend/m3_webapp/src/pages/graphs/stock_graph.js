import React, { useEffect, useState } from "react";
import { XYChart, AreaSeries, Axis, Grid, Tooltip } from "@visx/xychart";

function StockChart({ symbol }) {
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const response = await fetch(
                    `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1mo`
                );
                const data = await response.json();
                const timestamps = data.chart.result[0].timestamp;
                const closePrices = data.chart.result[0].indicators.quote[0].close;

                const stockData = timestamps.map((timestamp, index) => ({
                    date: new Date(timestamp * 1000), // Convert UNIX timestamp to JavaScript date
                    close: closePrices[index],
                }));

                setStockData(stockData);
            } catch (error) {
                console.error("Error fetching stock data:", error);
            }
        };

        fetchStockData();
    }, [symbol]);

    return (
        <div>
            <h2>{symbol} Stock Chart</h2>
            {stockData.length > 0 ? (
                <XYChart height={400} width={600} xScale={{ type: 'time' }}>
                    <Grid columns={false} numTicks={4} />
                    <Axis orientation="bottom" />
                    <Axis orientation="left" />
                    <AreaSeries dataKey="close" data={stockData} />
                    <Tooltip />
                </XYChart>
            ) : (
                <p>Loading stock data...</p>
            )}
        </div>
    );
}

export default StockChart;

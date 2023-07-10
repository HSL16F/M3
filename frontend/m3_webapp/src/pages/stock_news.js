import React, { useState, useEffect } from "react";

function StockNews({ticker}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const api_url = "https://m3_fast_api-1-z8464729.deta.app/news/" + ticker
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
        return <div>No data available.</div>;
    }

    return (
        <div>
            <ul style={{ marginTop: "0rem" }}>
                News article 1:
                <li>Title: {data[0].title}</li>
                <li>{data[0].description}</li>
                <li>{data[0].url}</li>
                {/*<li>Current Price: {data[0].Date}</li>*/}
                {/*<li>Current Price: {data[0].Tickers}</li>*/}
            </ul>
            <ul>
                <li>Title: {data[1].title}</li>
                <li>{data[1].description}</li>
                <li>{data[1].url}</li>
            </ul>
            <ul>
                <li>Title: {data[2].title}</li>
                <li>{data[2].description}</li>
                <li>{data[2].url}</li>
            </ul>
            <ul>
                <li>Title: {data[3].title}</li>
                <li>{data[3].description}</li>
                <li>{data[3].url}</li>
            </ul>
            <ul>
                <li>Title: {data[4].title}</li>
                <li>{data[4].description}</li>
                <li>{data[4].url}</li>
            </ul>
        </div>
    );
}

export default StockNews;


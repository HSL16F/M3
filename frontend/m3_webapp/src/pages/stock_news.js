import React, { useState, useEffect } from "react";
import {Box} from "@mui/material";
import {Typography} from '@mui/material';
import {Link} from "@mui/material";

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
            <Box sx={{m: 1}}>
                <Typography variant="h4">News for {ticker}</Typography>
                {data.map((data) => (
                    <p key={data.id}>
                        <Typography
                            variant="h5"
                            sx={{
                            marginTop: "1rem",
                            marginBottom: "0rem",
                            marginLeft: "2px",
                            marginRight: "2px",
                        }}>{data.title}</Typography>
                        <Typography>{data.description}</Typography>
                        <Link href={data.url}>{data.url}</Link>
                    </p>
                ))}
            </Box>
    );
}

export default StockNews;


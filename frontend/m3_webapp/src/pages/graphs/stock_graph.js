import React from 'react';
import { scaleTime, scaleLinear } from '@visx/scale';
import { AreaClosed } from '@visx/shape';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { extent } from 'd3-array';

const data = [
    { date: new Date('2019-01-01'), close: 157.92 },
    { date: new Date('2019-01-02'), close: 157.74 },
    { date: new Date('2019-01-03'), close: 142.19 },
    // Add more data points here...
];

const width = 500;
const height = 300;
const margin = { top: 20, right: 20, bottom: 40, left: 40 };

function StockGraph() {
    const xScale = scaleTime({
        domain: extent(data, (d) => d.date),
        range: [margin.left, width - margin.right],
    });

    const yScale = scaleLinear({
        domain: [0, Math.max(...data.map((d) => d.close))],
        range: [height - margin.bottom, margin.top],
    });

    return (
        <svg width={width} height={height}>
            <AxisBottom
                scale={xScale}
                top={height - margin.bottom}
                left={margin.left}
                label="Date"
            />
            <AxisLeft scale={yScale} top={margin.top} left={margin.left} label="Close Price" />
            <AreaClosed
                data={data}
                x={(d) => xScale(d.date)}
                y={(d) => yScale(d.close)}
                yScale={yScale}
                fill="#8884d8"
                stroke="#8884d8"
                strokeWidth={2}
            />
        </svg>
    );
}

export default StockGraph;

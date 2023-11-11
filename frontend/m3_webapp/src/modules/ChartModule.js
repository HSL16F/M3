// src/modules/D3LineChartModule.js
import React, { useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as d3 from 'd3';

const D3LineChartModule = ({ data, width = 500, height = 300, lineColor = 'steelblue', fillColor = 'none' }) => {
  const ref = useRef();

  useEffect(() => {
    if (data && data.length) {
      // Set dimensions and margins of the graph
      const margin = { top: 20, right: 20, bottom: 30, left: 50 };
      const chartWidth = width - margin.left - margin.right;
      const chartHeight = height - margin.top - margin.bottom;

      // Remove any existing SVG to avoid multiple appends
      d3.select(ref.current).selectAll("svg").remove();

      // Create the SVG container
      const svg = d3.select(ref.current)
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Add X axis
      const x = d3.scaleTime()
        .domain(d3.extent(data, (d) => new Date(d.date)))
        .range([0, chartWidth]);

      svg.append("g")
        .attr("transform", `translate(0,${chartHeight})`)
        .call(d3.axisBottom(x));

      // Add Y axis
      const y = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.value)])
        .range([chartHeight, 0]);

      svg.append("g")
        .call(d3.axisLeft(y));

      // Add the line
      svg.append("path")
      .datum(data)
      .attr("fill", fillColor) // Use the fillColor prop for the area fill
      .attr("stroke", lineColor) // Use the lineColor prop for the line color
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x((d) => x(new Date(d.date)))
        .y((d) => y(d.value))
        .curve(d3.curveMonotoneX)
      );
    }
  }, [data, width, height]); // Re-run the effect if data or dimensions change

  return (
    <Card sx={{ maxWidth: width, backgroundColor: 'var(--color-light-purple)' }}>
      <CardContent>
        <div ref={ref} />
      </CardContent>
    </Card>
  );
};

export default D3LineChartModule;

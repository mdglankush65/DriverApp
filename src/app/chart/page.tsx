import React from 'react';
import { Box, Typography } from '@mui/material';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

interface DataType {
    labels: string[],
    colors: string[],
    data: number[]
}

function DoughnutChart({res,title}:{ res: DataType, title:string }) {
    const chartData = {
        labels: res.labels,
        datasets: [
            {
                label: title,
                data: res.data,
                backgroundColor: res.colors,
                hoverOffset: 4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <Box sx={{ height: 180 }}>
            <Typography variant="subtitle1" gutterBottom align="center" >
                {title}
            </Typography>
            < Doughnut data={chartData} options={chartOptions} />
        </Box>
    );
}

export default DoughnutChart;
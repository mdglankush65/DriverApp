"use client";
import { Container, Typography, Grid, Box } from '@mui/material';
import Activity from '@/app/activity/page';
import { todayHighlightsData } from '@/app/data/page';
import { useEffect, useState } from 'react';

const Sidebar = () => {
    const [date, setDate] = useState(null);

    useEffect(() => {
        const today = new Date();
        setDate(today);
    }, []);

    return (
        <Container className='bg-white p-3'>
            <Typography variant="h6" gutterBottom>
                Today&apos;s Highlights ({todayHighlightsData.length})
            </Typography>
            <Typography gutterBottom>
                {date?.toDateString()}
            </Typography>
            <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 2 }}>
                <Grid container spacing={2}>
                    {todayHighlightsData.map((item) => (
                        <Grid item key={item.title} xs={6}>
                            <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2 }}>
                                <Typography variant="body1" gutterBottom>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" gutterBottom className={item.title !== 'Expenses' ? "text-green-400" : "text-red-400"}>
                                    {item.value}
                                </Typography>
                                <Typography variant="caption">
                                    {item.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Activity title="Completed Activities" />
            <Activity title="Scheduled Activities" />
        </Container>
    );
}

export default Sidebar; 
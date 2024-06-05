"use client";
import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import DoughnutChart from '@/app/chart/page';
import QuickActions from '@/app/quickActions/page'
import HighAlerts from '@/app/highAlerts/page';
import {
  ordersData,
  tripsData,
  revenueData,
  expensesData,
  todayHighlightsData,
  completedActivitiesData,
  scheduledActivitiesData,
  highPriorityAlerts
} from '@/app/data/page';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/app/theme/page';
import SideNavbar from '@/app/sideNavbar/page';

type TabType = 'todayHighlights' | 'completedActivities' | 'scheduledActivities';
const date = new Date();

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<TabType>('todayHighlights');

  const handleTabChange = (newTab: TabType) => {
    setSelectedTab(newTab);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg' className="">
        <Grid item lg={2} className='bg-blue-100' >
        <SideNavbar />
        </Grid>
      </Container>
      <Container maxWidth="lg" className='bg-blue-50'>
        <Typography variant="h4" gutterBottom mb={4} >
          Dashboard
        </Typography>
        {/* Chart Section */}
        <Grid container >
          <Grid item xs={10} md={8} className='bg-blue-100' >
            <Grid container className='bg-red-100' spacing={4} >
              <Grid item xs={3} className='bg-white rounded-lg' >
                <DoughnutChart data={ordersData} title="Orders" />
              </Grid>
              <Grid item xs={3} className='bg-white rounded-lg' >
                <DoughnutChart data={tripsData} title="Trips" />
              </Grid>
              <Grid item xs={3} className='bg-white rounded-lg' >
                <DoughnutChart data={revenueData} title="Revenue" />
              </Grid>
              <Grid item xs={3} className='bg-white rounded-lg' >
                <DoughnutChart data={expensesData} title="Expenses" />
              </Grid>
            </Grid>
            {/* Quick Links */}
            <Grid item xs={12} md={6}>
              <QuickActions />
            </Grid>
            {/* High Priority Alerts */}
            <Grid item xs={12} md={6}>
              <HighAlerts alerts={highPriorityAlerts} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Today&apos;s Highlights ({todayHighlightsData.length})
              </Typography>  
              <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 2 }}>
                <Grid container spacing={2}>
                  {todayHighlightsData.map((item) => (
                    <Grid item key={item.title} xs={6}>
                      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2 }}>
                        <Typography variant="body1" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="body1" gutterBottom className={item.title != 'Expenses' ? "text-green-400" : "text-red-400"} >
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

              {/* Completed Activities */}
              <div className='flex justify-between'>
                <Typography variant="h6" gutterBottom>
                  Completed Activities ({completedActivitiesData.length})
                </Typography>
                <Button variant="outlined" size="small">
                  View All
                </Button>
              </div>
              <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 2 }}>
                <ul>
                  {completedActivitiesData.map((item) => (
                    <li key={item.id} className='border p-2' >
                      {item.description}
                    </li>
                  ))}
                </ul>
              </Box>

              {/* Scheduled Activities */}
              <div className='flex justify-between'>
                <Typography variant="h6" gutterBottom>
                  Scheduled Activities ({scheduledActivitiesData.length})
                </Typography>
                <Button variant="outlined" size="small">
                  View All
                </Button>
              </div>
              <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 2 }}>
                <ul>
                  {scheduledActivitiesData.map((item) => (
                    <li key={item.id} className='border p-2' >
                      {item.description}
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
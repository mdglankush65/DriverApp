import QuickActions from '@/app/quickActions/page';
import HighAlerts from '@/app/highAlerts/page';
import DoughnutChart from '@/app/chart/page';
import { Container, Grid, Typography } from '@mui/material';
import { ordersData, tripsData, revenueData, expensesData, highPriorityAlerts } from '@/app/data/page';

const Dashboard = () => {
    return (
        <Container className='bg-blue-50 py-4 h-full'>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            {/* Chart Section */}
            <Grid className='flex mb-6 flex-row justify-between'>
                <Grid className='bg-white mr-1 rounded-lg w-1/4 border' sx={{ p: 1 }}>
                    <DoughnutChart res={ordersData} title="Orders" />
                </Grid>
                <Grid className='bg-white mr-1 rounded-lg w-1/4 border' sx={{ p: 1 }}>
                    <DoughnutChart res={tripsData} title="Trips" />
                </Grid>
                <Grid className='bg-white mr-1 rounded-lg w-1/4 border' sx={{ p: 1 }}>
                    <DoughnutChart res={revenueData} title="Revenue" />
                </Grid>
                <Grid className='bg-white rounded-lg w-1/4 border' sx={{ p: 1 }}>
                    <DoughnutChart res={expensesData} title="Expenses" />
                </Grid>
            </Grid>

            {/* Quick Links */}
            <QuickActions />

            {/* High Priority Alerts */}
            <HighAlerts alerts={highPriorityAlerts} />
        </Container>
    );
}

export default Dashboard;
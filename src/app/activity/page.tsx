import { Typography, Box, Button } from '@mui/material';
import { completedActivitiesData, scheduledActivitiesData } from '@/app/data/page';

const Activity = ({ title }: any) => {
    const data = title === "Completed Activities" ? completedActivitiesData : scheduledActivitiesData;
    return (
        <>
            <div className='flex justify-between'>
                <Typography variant="h6" gutterBottom>
                    {title} ({data.length})
                </Typography>
                <Button variant="outlined" size="small">
                    View All
                </Button>
            </div>
            <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 2 }}>
                <ul>
                    {data.map(item => (
                        <li key={item.id} className='border p-2'>
                            {item.description}
                        </li>
                    ))}
                </ul>
            </Box>
        </>
    );
}

export default Activity;
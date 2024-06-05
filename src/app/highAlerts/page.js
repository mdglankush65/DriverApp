import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const HighAlerts = ({ alerts }) => {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                High Priority Alerts ({alerts.length})
            </Typography>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <List>
                        {alerts.map((alert, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={alert.title} secondary={alert.description} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </>
    );
};

export default HighAlerts;
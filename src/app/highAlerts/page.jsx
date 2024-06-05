"use client";
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const HighAlerts = ({ alerts }) => {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                High Priority Alerts ({alerts?.length})
            </Typography>
            <Card className='border-0' >
                <CardContent className='bg-blue-50 border-0 flex flex-row gap-1' >
                    {alerts?.map((alert, index) => (
                        <div key={index} className='bg-white p-2 border border-gray-200 rounded-lg'>
                            <div>
                                {alert.title}
                            </div>
                            <p>{alert.description}</p>
                            <div className='mr-1 flex flex-row justify-end gap-1'>
                                <Button variant="outlined" size="small">
                                    ignore
                                </Button>
                                <Button variant="contained" size="small">
                                    Remove
                                </Button>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </>
    );
};

export default HighAlerts;
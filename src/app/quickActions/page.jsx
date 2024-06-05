import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { LocalShipping, PlaylistAddCircle, FireTruck, PersonAddAlt, FireTruckTwoTone } from '@mui/icons-material';

function QuickActions() {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Quick Actions
            </Typography>
            <Box sx={{ bgcolor: '#fff', p: 2, borderRadius: 2, mb: 2 }}>
                <List className='flex flex-row justify-evenly '>
                    <ListItem disablePadding className=" border border-r-black border-white ">
                        <ListItemButton className='flex flex-col' >
                            <ListItemIcon>
                                <PlaylistAddCircle />
                            </ListItemIcon>
                            <ListItemText primary="create Indents" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className=" border border-r-black border-white ">
                        <ListItemButton className='flex flex-col' >
                            <ListItemIcon>
                                <FireTruckTwoTone />
                            </ListItemIcon>
                            <ListItemText primary="Add Vehicle" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className=" border border-r-black border-white ">
                        <ListItemButton className='flex flex-col' >
                            <ListItemIcon>
                                <FireTruck />
                            </ListItemIcon>
                            <ListItemText primary="Add Trailer" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className=" border border-r-black border-white ">
                        <ListItemButton className='flex flex-col' >
                            <ListItemIcon>
                                <PersonAddAlt />
                            </ListItemIcon>
                            <ListItemText primary="Add Driver" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className='flex flex-col' >
                            <ListItemIcon>
                                <LocalShipping />
                            </ListItemIcon>
                            <ListItemText primary="Add Indents" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </>
    );
}

export default QuickActions;
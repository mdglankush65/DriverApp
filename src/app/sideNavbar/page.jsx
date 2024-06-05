import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
} from '@mui/material';
import { DriveEta, Search, Dashboard, Add, Home, Computer, People } from '@mui/icons-material';

const SideNavbar = () => {
    return (
        <List className='bg-white max-w-7 h-full fixed '>
            <ListItem disablePadding>
                <ListItemButton className='py-6'>
                    <ListItemIcon>
                        <DriveEta />
                    </ListItemIcon>
                    {/* <ListItemText primary="Drive" /> */}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton className='py-6'>
                    <ListItemIcon>
                        <Search />
                    </ListItemIcon>
                    {/* <ListItemText primary="Search in Drive" /> */}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton className='py-6'>
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    {/* <ListItemText primary="Dashboard" /> */}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton className='py-6'>
                    <ListItemIcon>
                        <Add />
                    </ListItemIcon>
                    {/* <ListItemText primary="+ New" /> */}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton className='py-6'>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    {/* <ListItemText primary="Home" /> */}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton className='py-6'>
                    <ListItemIcon>
                        <Computer />
                    </ListItemIcon>
                    {/* <ListItemText primary="My Drive" /> */}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton className='py-6'>
                    <ListItemIcon>
                        <People />
                    </ListItemIcon>
                    {/* <ListItemText primary="Shared with me" /> */}
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default SideNavbar;
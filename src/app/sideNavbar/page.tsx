import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
} from '@mui/material';
import { DriveEta, Search, Dashboard, Add, Home, Computer, People } from '@mui/icons-material';

const SideNavbar = () => {
    return (
        <List className='bg-white min-w-10'>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <DriveEta />
                    </ListItemIcon>
                    {/* <ListItemText primary="Drive" /> */}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Search />
                    </ListItemIcon>
                    {/* <ListItemText primary="Search in Drive" /> */}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    {/* <ListItemText primary="Dashboard" /> */}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Add />
                    </ListItemIcon>
                    {/* <ListItemText primary="+ New" /> */}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    {/* <ListItemText primary="Home" /> */}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Computer />
                    </ListItemIcon>
                    {/* <ListItemText primary="My Drive" /> */}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
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
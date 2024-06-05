"use client";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/app/theme/page';
import SideNavbar from '@/app/sideNavbar/page';
import Dashboard from '@/app/dashboard/page';
import Sidebar from '@/app/sidebar/page';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className='min-h-screen flex flex-col md:flex-row bg-white'>
        <div className='w-full md:w-nav'>
          <SideNavbar />
        </div>
        <div className='w-full md:w-das'>
          <Dashboard />
        </div>
        <div className='w-full md:w-sdb'>
          <Sidebar />
        </div>
      </div>
    </ThemeProvider>
  );
}
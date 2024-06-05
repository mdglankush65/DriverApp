interface ChartData {
    labels: string[];
    data: number[];
    colors: string[];
}

interface Highlight {
    title: string;
    value: string;
    description: string;
}

interface Activity {
    id: number;
    description: string;
}

interface quickActions {
    title: string
    count?:number
}

interface Priority {
    title:string,
    description: string
}

export const highPriorityAlerts: Priority[] = [
    {
        title: 'Reefer Temp. out of range',
        description: 'Load No: 12454, Bill To: RoaDo demo Bangalore',
    },
    {
        title: 'Driver Raised Concern',
        description: 'Load No: 12454, Bill To: RoaDo demo Bangalore',
    },
];

export const quickActionsData: quickActions[] = [
    { title: 'Create Indents' },
    { title: 'High Priority alerts', count: 14 },
    { title: 'Add Vehicle' },
    { title: 'Add Trailer' },
    { title: 'Add Driver' },
    { title: 'Add Indents' },
];

export const ordersData: ChartData = {
    labels: ['Upcoming', 'Ongoing', 'Completed'],
    data: [50, 100, 50],
    colors: ['#88d8b0', '#ff9f43', '#26a69a'],
};

export const tripsData: ChartData = {
    labels: ['Upcoming', 'Ongoing', 'Completed'],
    data: [50, 100, 50],
    colors: ['#88d8b0', '#ff9f43', '#26a69a'],
};

export const revenueData: ChartData = {
    labels: ['Upcoming', 'Ongoing', 'Completed'],
    data: [50, 100, 50],
    colors: ['#88d8b0', '#ff9f43', '#26a69a'],
};

export const expensesData: ChartData = {
    labels: ['Freight Charge', 'Driver Charge', 'Other Charges'],
    data: [50, 100, 50],
    colors: ['#88d8b0', '#ff9f43', '#26a69a'],
};

export const todayHighlightsData: Highlight[] = [
    { title: 'Income', value: '100000 CAD', description: '2 payments received' },
    { title: 'Expenses', value: '50000 CAD', description: '5 payments paid' },
];

export const completedActivitiesData: Activity[] = [
    { id: 1, description: 'Gurpreet Singh (Dispatch team) has created Load No. 1-I-AAA-1325' },
    { id: 2, description: 'Aman (Driver) Picked Up goods at Location_Name for Load No. I-I-AAA-1325' },
    { id: 3, description: 'Gurpreet Singh (Dispatch team) has created Load No. 1-H-AAA-1325' },
];

export const scheduledActivitiesData: Activity[] = [
    { id: 1, description: 'Load No. I-I-AAA-1325 will be delivered by Aman (Driver)' },
    { id: 2, description: 'Aman (Driver) will Picked Up goods at Location_Name for Load No. I-I-AAA-1325' },
    { id: 3, description: 'Load No. I-I-AAA-1325 will start added by Gurpreet Singh' },
    { id: 4, description: 'Load No. I-I-AAA-1325 will start added by Gurpreet Singh' },
];
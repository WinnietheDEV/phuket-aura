import FlightLandIcon from '@mui/icons-material/FlightLand';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import RouteIcon from '@mui/icons-material/Route';
import UpdateIcon from '@mui/icons-material/Update';
import { Button } from '@mui/material';

export const features = [
    {
        title: 'Pick up at airport',
        icon: (
            <FlightLandIcon
                sx={{ fontSize: '2rem' }}
                className="icon-feature"
            />
        ),
        description: 'sdfdsfsdfsdfdfds',
    },
    {
        title: 'First class insurance',
        icon: (
            <LooksOneIcon sx={{ fontSize: '2rem' }} className="icon-feature" />
        ),
        description: 'sdfdsfsdfsdfdfds',
    },
    {
        title: 'Test drive',
        icon: (
            <DriveEtaIcon sx={{ fontSize: '2rem' }} className="icon-feature" />
        ),
        description: 'sdfdsfsdfsdfdfds',
    },
    {
        title: 'Unlimited mile',
        icon: <RouteIcon sx={{ fontSize: '2rem' }} className="icon-feature" />,
        description: 'sdfdsfsdfsdfdfds',
    },
    {
        title: '24 hrs service',
        icon: <UpdateIcon sx={{ fontSize: '2rem' }} className="icon-feature" />,
        description: 'sdfdsfsdfsdfdfds',
    },
];

'use client';

import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Tab,
    Tabs,
    Typography,
} from '@mui/material';
import styles from './catalog.module.css';
import Carousel from 'react-material-ui-carousel';
import { useState } from 'react';
import { toyotaCars } from './toyotaCars';

export default function Catalog() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    var items = [
        {
            name: 'Random Name #1',
            description: 'Probably the most random thing you have ever seen!',
        },
        {
            name: 'Random Name #2',
            description: 'Hello World!',
        },
    ];

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
            </div>
        );
    }

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    console.log(toyotaCars);

    return (
        <div className={`${styles['catalog']}`}>
            <Container sx={{ margin: 0, minWidth: '100%' }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab label="TOYOTA" {...a11yProps(0)} />
                            <Tab label="NISSAN" {...a11yProps(1)} />
                            <Tab label="SUBARU" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Carousel>
                            {toyotaCars.map((car, i) => {
                                return <Car key={i} {...car} />;
                            })}
                        </Carousel>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item Two
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Item Three
                    </CustomTabPanel>
                </Box>
            </Container>
        </div>
    );
}

function Car({ qualities, title, price, image }) {
    return (
        <Paper sx={{ minHeight: '10rem' }}>
            <Stack direction={'row'}>
                <Stack
                    width={'50%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                >
                    <div
                        style={{
                            minWidth: '100%',
                            minHeight: '100%',
                            position: 'absolute',
                            backgroundImage: `linear-gradient(
                        to bottom right,
                        rgba(0, 30, 138, 1),
                        rgba(0, 30, 138, 1)
                    )`,
                            clipPath: 'polygon(0 0, 25% 0, 10% 100%, 0 100%)',
                            zIndex: 1,
                        }}
                    >
                        s
                    </div>
                    {image}
                    <Typography variant="h5">{title}</Typography>
                </Stack>
                <Stack width={'50%'}>
                    <ul>
                        {qualities.map((quality) => (
                            <li key={quality}>{quality}</li>
                        ))}
                    </ul>
                    <Typography>{price}</Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}

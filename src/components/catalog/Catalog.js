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
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';

export default function Catalog() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
        <div className={`${styles['catalog']}`} id="catalog">
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
                        <Carousel>
                            {toyotaCars.map((car, i) => {
                                return <Car key={i} {...car} />;
                            })}
                        </Carousel>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <Carousel>
                            {toyotaCars.map((car, i) => {
                                return <Car key={i} {...car} />;
                            })}
                        </Carousel>
                    </CustomTabPanel>
                </Box>
            </Container>
        </div>
    );
}

function Car({ qualities, title, price, image }) {
    return (
        <Paper sx={{ minHeight: '10rem' }} key={title}>
            <Stack direction={'row'}>
                <Stack
                    width={'50%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                >
                    {/* <div
                        style={{
                            minWidth: '100%',
                            minHeight: '100%',
                            position: 'absolute',
                            backgroundImage: `linear-gradient(
                        to bottom right,
                        rgba(0, 30, 138, 1),
                        rgba(0, 30, 138, 1)
                    )`,
                            clipPath: 'polygon(0 0, 15% 0, 5% 100%, 0 100%)',
                            zIndex: 1,
                        }}
                    >
                        
                    </div> */}
                    {image}
                    <Typography variant="h5" paddingBottom={6}>
                        {title}
                    </Typography>
                </Stack>
                <Stack width={'25%'}>
                    <ul>{qualities.map((quality) => Quality(quality))}</ul>
                </Stack>
                <Stack width={'25%'}>
                    <Typography>900 Baht/Day</Typography>
                    <Typography>6,000 Baht/Week</Typography>
                    <Typography>20,000 Baht/Month</Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}

function Quality(props) {
    const { type, value } = props;
    if (type === 'seat') {
        return (
            <div>
                <AirlineSeatReclineNormalIcon />
                <span>{value}</span>
            </div>
        );
    } else if (type === 'engine') {
        return (
            <div>
                <AirlineSeatReclineNormalIcon />
                <span>{value}</span>
            </div>
        );
    } else if (type === 'fuel') {
        return (
            <div>
                <AirlineSeatReclineNormalIcon />
                <span>{value}</span>
            </div>
        );
    }
}

'use client';

import styles from './feature.module.css';
import { Typography, CardContent, Container, Card } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { features } from './list';
import { useState } from 'react';

export default function Feature() {
    const [isFlipped, setIsFlipped] = useState(-1);

    const handleClick = (index) => {
        if (index === isFlipped) {
            setIsFlipped(-1);
        } else {
            setIsFlipped(index);
        }
    };

    return (
        <div className={`${styles['feature']}`} id="feature">
            <Grid
                container
                gap={2}
                justifyContent={'center'}
                alignItems={'center'}
            >
                {features.map((feature, index) => {
                    return (
                        <Grid
                            xs={6}
                            sm={6}
                            md={3.5}
                            sx={{
                                backgroundColor: '#fff',
                                textAlign: 'center',
                                padding: 0,
                            }}
                            key={feature.title}
                        >
                            <div
                                className={`${styles['card-container']} ${
                                    index === isFlipped
                                        ? `${styles['flipped']}`
                                        : ''
                                }`}
                                onClick={() => handleClick(index)}
                            >
                                <Card className={styles['card-front']}>
                                    <CardContent className="container-feature">
                                        {feature.icon}
                                        <Typography
                                            sx={{ fontSize: 14 }}
                                            color="text.secondary"
                                            gutterBottom
                                            className={`${styles['title']}`}
                                        >
                                            {index === isFlipped
                                                ? feature.description
                                                : feature.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

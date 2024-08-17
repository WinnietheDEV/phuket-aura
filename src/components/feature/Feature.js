import styles from './feature.module.css';
import { Typography, CardContent, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { features } from './list';

export default function Feature() {
    return (
        <div className={`${styles['feature']}`}>
            <Grid
                container
                gap={2}
                justifyContent={'center'}
                alignItems={'center'}
            >
                {features.map((feature) => {
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
                            <CardContent className="container-feature">
                                {feature.icon}
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                    className={`${styles['title']} text-feature`}
                                >
                                    {feature.title}
                                </Typography>
                            </CardContent>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

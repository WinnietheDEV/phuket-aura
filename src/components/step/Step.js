import styles from './step.module.css';
import { Typography, CardContent, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function Step() {
    return (
        <div className={`${styles['step']}`}>
            <Grid
                container
                gap={2}
                justifyContent={'center'}
                alignItems={'center'}
            ></Grid>
        </div>
    );
}

import { Grid, Typography } from '@mui/material';
import styles from './info.module.css';
import Faq from './Faq';
import StepperRental from './Stepper';

export default function Info() {
    return (
        <div className={`${styles['info']}`} id="info">
            <Grid container justifyContent={'center'} alignItems={'start'}>
                <Grid item xs={5.5} width={'80%'}>
                    <Typography variant="h4">FAQ</Typography>
                    <Faq />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={5.5} width={'80%'}>
                    <Typography variant="h4">What to do?</Typography>
                    <StepperRental />
                </Grid>
            </Grid>
        </div>
    );
}

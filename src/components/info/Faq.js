'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styles from './info.module.css';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: '#fff',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Faq() {
    const [expanded, setExpanded] = React.useState();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                >
                    <Typography>Do I need to pay to reserve the car?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    No, you can just pay on the day you use the car.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
            >
                <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                >
                    <Typography>What documents are required to rent a car?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    1. Driver's License
                    <br/>
                        2. Identification
                        <br/>
                        3. Reservation Confirmation
                    
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
            >
                <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                >
                    <Typography>Do you provide utility items such as a GPS or a baby seat?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Yes, we offer those items, but they come at an additional cost.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

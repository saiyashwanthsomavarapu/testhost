import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import {  InitiateServiceRequestCardsData } from './InitiateServiceRequest.constants';
import { useStyles } from './InititateServiceRequest.styles';
import ServiceRequestCard from '../../components/ServiceCard/ServiceCard';
import clsx from 'clsx';
const IntitateServiceRequest = () => {
    const classes = useStyles();
    const history = useNavigate();

    const redirect = (path: string) => {
        history(path);
    }
    return (
        <React.Fragment>

            <div className={classes.root}>
                <Grid container spacing={0} className={classes.gridContainer}>
                    <Grid md={12} xs={12}>
                        <Typography variant='h5' className={classes.header}>What type of Service Request are you looking for?</Typography>
                    </Grid>
                    <Grid container spacing={1} md={12} xs={12} className={classes.cardContainer}>
                        {InitiateServiceRequestCardsData.map((item, index) => (
                            <Grid key={index} item xs={12} sm={6} md={3} lg={3} xl={2} className={clsx(item?.enable && classes.gridItem)}>
                                <ServiceRequestCard
                                    onClick={() => item?.enable && redirect(item?.path)}
                                    header={item?.header}
                                    image={item?.icons}
                                    cardHeight={200}
                                    content={item?.description}
                                />
                            </Grid>
                        ))}

                    </Grid>
                </Grid>

            </div>
        </React.Fragment>
    )
}

export default IntitateServiceRequest;

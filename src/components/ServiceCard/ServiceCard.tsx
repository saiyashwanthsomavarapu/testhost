import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import { useStyles } from './ServiceCard.styles'

interface ActionsProps {
    buttonName?: string;
    onClick?: any;
}
interface HeaderBarProps {
    label?: string;
    color?: string;
}
export interface ServiceRequestCardProps {
    header?: string;
    image?: any;
    content?: any;
    actions?: ActionsProps;
    onClick?: any;
    headerBarColor?: string;
    headerBar?: HeaderBarProps;
    draftDetails?: any;
    cardHeight?: any;
    component?: any;
    enable?: boolean;
    [key: string]: string | any
}
const ServiceCard = (props: ServiceRequestCardProps) => {
    const classes = useStyles({
        headerBarColor: props?.headerBarColor ?? props?.headerBar?.color,
        cardHeight: props?.cardHeight
    });
    return (
        <Card variant='outlined' onClick={props?.onClick}>
            <div className={classes.headerbar}>
                {props?.headerBar?.label}
            </div>
            <CardContent className={classes.cardContent}>
            
                {props?.component ? (
                    <React.Fragment>
                        {props?.component}
                    </React.Fragment> 
                 ) :(
                    <React.Fragment>
                        <Typography className={classes.header} >
                            {props?.header}
                        </Typography>
                        {props?.image && <Box className={classes.imgBox} >
                            <img alt="" className={classes.image} height="20%" src={process.env.PUBLIC_URL+props?.image}/>
                        </Box>}
                        <Typography className={classes.cardContentText}>
                            {props?.content}
                        </Typography>
                        <Typography className={classes.draftDetails}>
                            {props?.draftDetails}
                        </Typography>
                    </React.Fragment>
                )}
            </CardContent>
            {props?.actions && <CardActions className={classes.cardActionBox}>
                <Button size="small" variant='text' onClick={props?.actions?.onClick} className={classes.actionButton}>{props?.actions?.buttonName}</Button>
            </CardActions>}
        </Card>
    )
}

export default ServiceCard;

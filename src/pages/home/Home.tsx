import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { useStyles } from './Home.styles';
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14, textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' }} gutterBottom>
        Contacts
      </Typography>
      <Box sx={{ minHeight: 80 }}>
        <img alt="" style={{ position: 'relative', maxHeight: '100%', width: '100%', border: '1px solid' }} src="https://cdn-icons-png.flaticon.com/512/66/66634.png" />
      </Box>
      <Typography sx={{ fontSize: 11, textAlign: 'center' }}>
        Add or Change your plan contacts, TPA or Advisor.
      </Typography>
    </CardContent>
    <CardActions sx={{ borderTop: '1px solid #c3c3c3', justifyContent: 'center', display: 'flex' }}>
      <Button size="small" variant='text' sx={{ color: 'black', fontSize: 12, textAlign: 'center' }}>Learn More</Button>
    </CardActions>
  </React.Fragment>
);
const Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Header heading={"Service Request Center"} subHeading={"Service as a Request"} /> */}
      <div className={classes.root}>
        <Typography variant='h5' className={classes.header}>What type of Service Request are you looking for?</Typography>
        <Grid container spacing={1} className={classes.cardContainer}>
          <Grid item sm={6} xs={12} md={3} lg={3}>
            <ServiceCard
              header="Initial Service Request"
              image={"Add or Change your plan contacts, TPA or Advisor."}
              content={"Click here to initiae a service request to update your plan."}
            />
          </Grid>
          <Grid item sm={6} xs={12} md={3} lg={3}>
            <ServiceCard
              header="Approval tasks"
              image={"Add or Change your plan contacts, TPA or Advisor."}
              content={"Review and approve pending service requests"}
            />
          </Grid>
          <Grid item sm={6} xs={12} md={3} lg={3}>
            <ServiceCard
              header="Drafts"
              image={"Add or Change your plan contacts, TPA or Advisor."}
              content={"Resume any previously drafted and unsubmitted service requests."}
            />
          </Grid>
          <Grid item sm={6} xs={12} md={3} lg={3}>
            <ServiceCard
              header="Submitted Service Request"
              image={"Add or Change your plan contacts, TPA or Advisor."}
              content={"Review the status od submitted and completed service request"}
            />
          </Grid>
          {/* 1920 x 1172 */}
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Home;
import { Dialog, Grid, Link } from '@mui/material';
import {
  DashboadHeading,
  RequestCardsData,
  SelectOptionText,
  InstructionsLink
} from './Dashboard.constants'
import CloseIcon from '@mui/icons-material/Close';
import './Dashboard.css'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import Header from '../../components/Header/Header';
import ServiceCard from '../../components/ServiceCard/ServiceCard'

interface DashboardProps {
  user: string
}

interface DashboardDialogProps {
  open: boolean;
  onClose: () => void;
}

const Dashboard = (props: DashboardProps) => {
  const { user } = props;
  const history = useNavigate();
  const [disclosureOpen, setDisclosureOpen] = useState(true);

  const handleDisclosureClose = () => {
    setDisclosureOpen(false);
  }

  const WelcomeText = (
    <h3 className='welcome_text'>
      Welcome {user}, {SelectOptionText}
    </h3>
  )

  const getHeaderBarColor = (cardType: string) => {
    switch (cardType) {
      case 'INITIATE_SERVICE_REQUEST':
        return '#004c46'
      default:
        return '#005f9e'
    }
  }


  const DisclosurePopup = (props: DashboardDialogProps) => {

    const { onClose, open } = props;

    const handleClose = () => {
      onClose();
    };

    return (
      <Dialog onClose={handleClose} open={open} maxWidth='lg'>
          <div className="closeIcon">
          <CloseIcon onClick={handleClose}/>
          </div>

        <div className='disclosure-container'>

          <h1>Welcome to the Service Request Center</h1>
          <span className='disclosure-text'>This is where you can initiate new maintenance requests, approve requests, view submitted requests and much more. </span>
          <span className='disclosure-text'>Click anywhere to get started.</span> 
        </div>
      </Dialog>
    );
  }

  const redirect = (path: string) => {
    history(path)
  }

  const RequestCardRow = (
    <Grid container xs={12} spacing={1} wrap='wrap' className='request-row'>
      {RequestCardsData.map((data, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={3} className="request-item" onClick={()=>data?.enable && redirect(data?.path)} style={{paddingLeft: '0px !important'}}>
            <ServiceCard
              header={data.header}
              image={data.icons}
              content={data.description}
              cardHeight={220}
              headerBarColor={getHeaderBarColor(data.type)}
              draftDetails={data.draft}
            />
          </Grid>
        )
      })}
    </Grid>
  )

  return (
    <div>
      <DisclosurePopup open={disclosureOpen} onClose={handleDisclosureClose} />
      {/* <Header heading={DashboadHeading.heading} subHeading={DashboadHeading.subheading}/> */}
      <div className="container">
      {WelcomeText}
      {RequestCardRow}
      {/* <p className='endText'>For plan  <Link href={InstructionsLink}>handouts and instructions</Link>, or <Link href={InstructionsLink}> installation files</Link>, please visit our online forms site to download.</p> */}
      </div>
    </div>
  )
}
export default Dashboard

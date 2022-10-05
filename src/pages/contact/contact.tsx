import React, { useState } from 'react'
import Header from '../../components/Header/Header';
// import { DashboadHeading } from '../Dashboard/Dashboard.constant'
import { StyledConnector, StyledStepIconRoot, useStyles } from './contact.styles';
// import { breadCrumbs } from './contactChange.constant';
// import BreadCrumbs from '../Breadcurmbs/BreadCrumbs';
import { Alert, Box, Button, Divider, Grid, Step, StepLabel, Stepper } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Step1 from './step1/Step1';
import Step2 from './step2/Step2';
import Step3 from './step3/Step3';
import { ButtonNames, StepHeading, steps, validationSchema } from './conatct.constant';
import Footer from '../../components/Footer/Footer';
import Model from '../../components/Model/Model';
import { Delete } from '@mui/icons-material';
// import Footer from '../../components/Footer/Footer';
// import clsx from 'clsx';
interface StepIconProps {
    active: boolean,
    completed: boolean,
    className: string,
}

const StepIcon = (props: StepIconProps) => {
    const { active, completed, className } = props;

    return (
        <StyledStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <div className='StepIcon-circle' />
            ) : (
                <div className="StepIcon-dot" />)
            }
        </StyledStepIconRoot>
    );
}

const ContactChange = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [openModal, setOpenModel] = useState(false);
    const [errors,setErrors] = useState({});
    const [formValues, setFormValues] = useState<any>({
        'firstName':'',
        'middleName': '',
        'lastName': '',
        'title':'',
        'email': '',
        'phone':'',
        "ext":'',
        'role':'',
        'primaryContact': '',
        'webAccess':'',
        "planNotification":''
    })


    const handleWebAccessButton = () => {
        console.log(formValues,activeStep,);
        if(activeStep === 0) {

        }
        console.log(!isError())
        if (activeStep < StepHeading.length - 1 && !isError()) {
            setActiveStep(activeStep + 1);
        } else {
            console.log('error');
        }
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    const onChange = (event: any) => {

        if (event.target.value) {
            setErrors({
                ...errors,
                [event.target.name]: false
            })
        }
        console.log(errors);
        // console.log(event.target.required, formValues);
        setFormValues((prev: any)=>({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }
    const isError = () => {
        let errors:any = {}
        let array = validationSchema['personalInformation'];
        array.filter((el:any) => {
            if (el?.required && !formValues[el['name']]) {
                errors[el['name']] = true;
            } else {
                errors[el['name']] = false
            }
        })
        console.log(array,errors)
        setErrors(errors);
        // Object.keys(validationSchema).some()
        return array.some((el:any) => el?.required && !formValues[el['name']]);
    }



    const label = (name: string, optionalText: string = '') => {
        return (<b style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: '1.5px' }}>{name} &nbsp;
            {optionalText !== '' && <span style={{ color: '#c3c3c3', fontSize: 12 }}>  ({optionalText})</span>}
        </b>)
    }

    return (
        <React.Fragment>
            <Model open={openModal} onClose={()=>{setOpenModel(!openModal)}}></Model>
            <Header heading={"Service Request Center"} subHeading={"Service as a Request"} />
            <div className={classes.root}>
                <h4 className={classes.heading}>Update Contact</h4>
                <Alert className={classes.errorMessage} variant="filled" severity="error">
                    This is an error alert — check it out! <Delete/>
                </Alert>
                <p className={classes.stepHeading}>
                    {activeStep > 0 && <ArrowBackIcon sx={{ margin: '0px 4px' }} onClick={handleBack} />}
                    {StepHeading[activeStep]}
                </p>
                <Box sx={{ width: '100%', marginTop: 3 }}>
                    <Stepper
                        nonLinear={false}
                        sx={{ width: '70%' }}
                        activeStep={activeStep}
                        alternativeLabel
                        connector={<StyledConnector />}
                    >
                        {steps.map((label, index) => (
                            <Step key={label} completed={activeStep >= index} >
                                <StepLabel className={classes.stepLabel} StepIconComponent={StepIcon} >
                                    <span dangerouslySetInnerHTML={{ __html: label }}></span>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === 0 && <Step1 formValues={formValues} errors={errors} onValueChange={onChange} label={label}/>}
                    {activeStep === 1 && <Step2 formValues={formValues} onValueChange={onChange} label={label} />}
                    {activeStep === 2 && <Step3 formValues={formValues} onValueChange={onChange} label={label} />}
                    <Divider className={classes.divider} />

                    <Grid container >
                        <Grid item xs={12} lg={4} sx={{
                            padding: '5px 0px',
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'center', lg: "flex-start" },
                            alignItems: 'center'
                        }}>
                            <Button disableRipple className={classes.cancelButton} variant="text">Cancel</Button>
                        </Grid>
                        <Grid item xs={12} lg={4} sx={{
                            padding: '5px 0px',
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                            border: '1px solid black'
                        }}>
                            <Button disableRipple className={classes.saveButton} color="primary" variant="outlined">Save As a Draft</Button>
                            <Button disableRipple onClick={handleWebAccessButton} endIcon={<ArrowForwardIcon className={classes.icon} />} color="primary" disableElevation className={classes.webAccessButton} variant="contained">
                                {ButtonNames[activeStep]}
                            </Button>
                        </Grid>
                        <Grid item xs={12} lg={4} sx={{
                            padding: '5px 0px',
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'center', lg: "flex-end" },
                            alignItems: 'center'
                        }}>
                            <Button onClick={()=>{setOpenModel(true)}} disableRipple className={classes.removeContactbutton} variant="outlined">
                                Remove Contact
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default ContactChange;

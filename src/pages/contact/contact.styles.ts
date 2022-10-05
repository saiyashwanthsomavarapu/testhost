import {
    StepConnector,
    stepConnectorClasses,
    styled,
    Theme,
} from "@mui/material";
import createStyles  from '@mui/styles/createStyles'
import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            margin: "0px 15%",

            flexDirection: "column",
            alignItems: "flex-start",
        },
        errorMessage:{
            '&.MuiAlert-root': {
                position: 'relative',
                width: '100%',
                borderRadius: 'unset',
                marginTop: 10,
                '& .MuiAlert-message':{
                    display: 'flex',
                    color: 'blue'
                }
            },
            '&.MuiAlert-message':{
                display: 'flex'
            }
        },
        heading: {
            // fontFamily: "AvenirNextLTCom !important",
            fontWeight: "bolder !important",
            margin: '0 !important',
        },
        stepHeading: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 22,
            margin: "15px 0px",

        },
        stepLabel: {
            textTransform: 'uppercase'
        },
        icon:{
            fontSize: '12px !important'
        },
        inputfield: {
            fontWeight: "bold",
            margin: "4px 4px !important",
            "& .MuiInput-underline": {
                borderBottomColor: "#000",
                "&:before": {
                    borderBottomColor: "#000",
                },
                "&:after": {
                    borderBottomColor: "#000",
                },
            },
            "& label": {
                color: "#000",
                "&.Mui-focused": {
                    color: "#000",
                },
            },
            "& .MuiTextField-root": {
                borderBottomColor: "#000",
                textTransform: "uppercase"
            },
        },
        divider:{
            marginTop: '50px !important',
            marginBottom: '10px !important'
        },
        cancelButton: {
            "&.MuiButton-root": {
                color: "#005f9e",
                borderRadius: "unset",
                margin: "5px    ",
                fontSize: "10px",
                padding: "10px 20px",
                width: 150,
                textDecoration: "underline",
                "&:hover": {
                    background: "#fff",
                    textDecoration: "underline",
                },
            },

        },
        saveButton: {
            "&.MuiButton-root": {
                color: "#005f9e !important",
                borderRadius: "unset !important",
                margin: "5px !important",
                fontSize: "10px !important",
                padding: "10px 20px !important",
                minWidth: 150,
                border: '2px solid',
                '&.MuiButton-outlined':{
                    borderColor: '#005f9e' 
                },
                "&:hover": {
                    background: "#fff",
                    border: '2px solid',
                },
            }
        },
        webAccessButton: {
            backgroundColor: "#005f9e !important",
            borderRadius: "unset !important",
            margin: "5px !important",
            fontSize: "10px !important",
            padding: "12px 20px !important",
            minWidth: 150,
        },
        removeContactbutton: {
            "&.MuiButton-root": {
                margin: "5px !important",
                color: `#b42573 !important`,
                borderRadius: "unset !important",
                fontSize: "10px !important",
                padding: "10px 20px !important",
                minWidth: 150,
                border: '2px solid',
                '&.MuiButton-outlined':{
                    color:'#b42573 !important',
                    borderColor: '#b42573' 
                },
                "&:hover": {
                    background: "#fff",
                    border: '2px solid',
                },
            }
        },
    })
);

export const StyledConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: "calc(-50% + 5px)",
        right: "calc(50% + 5px)",
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: "#784af4",
            width: "100%",
            padding: "0px",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: "#784af4",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#eaeaf0",
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

export const StyledStepIconRoot = styled("div")<{
    ownerState: { active?: boolean };
}>(({ theme, ownerState }) => ({
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
        color: "#784af4",
    }),
    "& .StepIcon-completedIcon": {
        color: "#784af4",
        zIndex: 1,
        fontSize: 18,
    },
    "& .StepIcon-circle": {
        width: 20,
        height: 20,
        zIndex: 2,
        borderRadius: "50%",
        border: "7px solid black",
        backgroundColor: "#fff",
    },
    "& .StepIcon-dot": {
        width: 12,
        height: 12,
        zIndex: 2,
        borderRadius: "50%",
        backgroundColor: "#eaeaf0",
    },
}));

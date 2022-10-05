import {
    Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import createStyles  from '@mui/styles/createStyles'
export const useStyles: any = makeStyles((theme: Theme) =>
    createStyles({
        
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
        phoneNumber:{
            width: '100% !important'
        },
        ext:{
            width:'15ch !important'
        }
    })
);

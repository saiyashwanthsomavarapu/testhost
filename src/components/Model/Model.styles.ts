import { createStyles, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
    createStyles({
        modal:{
                display: 'flex !important',
                padding: '1px solid',
                alignItems: 'center !important',
                justifyContent: 'center !important',
                minWidth:'1000px !important'
        },
        submitButton:{
            "&.MuiButton-root": {
                borderRadius: "unset !important",
                margin: "5px !important",
                fontSize: "10px !important",
                padding: "15px 20px !important",
                border: '2px solid',
                background:'#b42573 !important',
                "&:hover": {
                    background: "#fff",
                    border: '2px solid',
                },
            }
        },
        cancelButton: {
            "&.MuiButton-root": {
                color: "#000",
                borderRadius: "unset",
                // margin: "5px    ",
                fontSize: "10px",
                padding: "10px 20px 10px 0px",
                textDecoration: "underline",
                "&:hover": {
                    background: "#fff",
                    textDecoration: "underline",
                },
            },

        },
        closeIcon:{
            position:'absolute !important', 
            top: '10px !important', 
            right: '10px !important',
            cursor: 'pointer'
        }
    })
);
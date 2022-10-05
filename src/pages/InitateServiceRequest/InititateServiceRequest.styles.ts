import {
    createStyles,
    Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
    createStyles({
        root:{
            display: "flex",
            margin: "0px 15%",
            flexDirection: "column",
            alignItems: "flex-start",  
        },
        gridContainer:{
            boxShadow:'none !important',
            margin: '40px 0px !important'
        },
        gridItem:{
            cursor: 'pointer'
        },
        cardContainer:{
            display: 'flex',
            marginTop: '12px !important'
        }
    })
);

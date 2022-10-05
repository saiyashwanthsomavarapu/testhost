import {
    Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import createStyles  from '@mui/styles/createStyles'
export const useStyles: any = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            margin: "0px 15%",
            flexDirection: "column",
            alignItems: "flex-start",
        },
        cardContainer:{
            boxShadow:'none !important',
            marginTop: '12px !important'
        },
        header:{
            fontWeight: '300 !important'
            // fontFamily: 'AvenirNextLTCom !important',
        }
    })
);
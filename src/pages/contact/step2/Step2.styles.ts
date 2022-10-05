import {
    Theme,
} from "@mui/material";
import createStyles  from '@mui/styles/createStyles'
import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
    createStyles({
        textContainer:{
            marginBottom: '25px'
        },
        text: {
            '&.MuiTypography-root' :{
                textTransform: 'uppercase',
                fontSize: '12px',
                fontWeight: 'bold',
                marginLeft: 5
            }

        }
    })
);

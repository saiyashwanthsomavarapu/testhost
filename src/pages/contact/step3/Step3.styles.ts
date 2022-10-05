import {
    Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import createStyles  from '@mui/styles/createStyles'

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
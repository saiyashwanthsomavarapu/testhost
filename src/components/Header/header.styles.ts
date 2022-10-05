import { createStyles, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
    createStyles({
        header_container: {
            // backgroundColor: theme.palette && theme.palette.grey[100],
            backgroundColor: '#005f9e',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '5px 15% 5px 15%',
            // paddingLeft: '15%',
            // paddingRight: '15%'
        },
        header_image: {
            display: 'flex',
            // maxWidth: 240,
            minHeight: 50,
            paddingLeft: '12%',
            paddingRight: '12%',
            marginTop: 25
        },
        image:{
            margin: 12,
        },
        heading: {
            fontFamily: 'AvenirNextLTCom',
            fontSize: 30,
            margin: '5px 0px',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#fff',
        },
        subHeading: {
            fontFamily: 'AvenirNextLTCom',
            fontSize: 12,
            margin: '5px 0px',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color:'#c9c7c7'
        }

    })
);

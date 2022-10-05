import { createStyles, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            // backgroundColor: '#e6e6e6',
            // padding: '5px 15% 5px 15%',
            minHeight: "139px"
        },
        listLinks:{
            backgroundColor: '#e6e6e6',
            padding: '5px 15% 5px 15%',
        },
        links: {
            paddingLeft: 10,
            paddingRight: 10,
        },
        linkText:{
            fontSize: 15,
            fontWeight: 'bold'
        }

    })
);

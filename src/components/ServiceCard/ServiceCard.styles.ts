import { createStyles, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: "14px !important",
      "&.MuiCardHeader-title": {
        fontSize: "14px !important",
        textAlign: "center !important",
        textTransform: "uppercase",
        fontWeight: "bold",
      },
    },
    header:{
      minHeight: '35px !important', 
      padding: '5px 15px !important',
        fontSize: '14px !important',
      
      textAlign: 'center !important',
      textTransform: 'uppercase !important', 
      fontWeight: 'bold !important' 
    },
    headerbar:{
      fontSize: 10, 
      textAlign:'center',
      padding: '4px 0px', 
      color:'#fff', 
      backgroundColor: (props: any) => props?.headerBarColor ?? '', 
    },
    titleTypograpyClass: {
      fontSize: 14,
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    cardContent: {
      position: 'relative !important',
      display: 'flex !important',
      height:(props:any) => `${props?.cardHeight ?? 220}px !important`,
      flexDirection: 'column',
      padding: "0px 0px 9px 0px !important",
      justifyContent: 'space-between'
    },
    cardContentText: {

      fontSize: "12px !important",
      textAlign: "center !important",
      padding: '9px 9px',
      
    },
    cardActionBox: {
      padding: "0px !important",
      borderTop: "1px solid #c3c3c3 !important",
      justifyContent: "center !important",
      display: "flex !important",
    },
    actionButton: {
      color: "black !important",
      fontSize: "12px !important",
      textAlign: "center !important",
    },
    imgBox: {
      position: 'realtive !important',
      display: 'flex',
      justifyContent: 'center',
      // minHeight: " !important",
      maxHeight: "80px !important",
      margin: 5
    },
    image: {
      position: "relative",
      height: "100%",
      width: "auto",
    },
    draftDetails: {
      textAlign: 'center !important',
      color: '#005f9e',
      fontSize: 14,
      fontWeight: 'bold !important',
      minHeight: '20px !important'
    }
  })
);

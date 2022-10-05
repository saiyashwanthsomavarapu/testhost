import { TextField } from '@mui/material';
import { createStyles, styled, Theme } from '@mui/material/styles';

import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    label: {
        fontSize: '14px !important',
        letterSpacing: '1.5px !important'
      },
      optionalText: {
        color: '#c3c3c3',
        fontSize: 12
      },
    inputStyles:{
      letterSpacing: '1.5px !important',
      textTransform: 'uppercase !important', 
      fontWeight: 'bold !important', 
      fontSize: '12px !important' 
    }
  })
);

export const StyledTextField = styled(TextField)(()=>({
    textTransform: 'uppercase',
    margin: '4px 4px !important',
    '& .MuiInput-underline': {
        borderBottomColor: '#000',
        "&:before":{
            borderBottomColor: '#000'
        },
        "&:after":{
            borderBottomColor: '#000'
        }
    },
    '& label': {
        color: '#000',
        '&.Mui-focused':{
            color: '#000'
        }
      },
    '& .MuiTextField-root':{
        borderBottomColor: '#000',
        textTransform: 'uppercase',
        // margin: 10
    }
}));
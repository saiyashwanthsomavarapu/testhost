import { FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import React from 'react'
import { FromFields } from '../conatct.constant';
import { useStyles } from './Step2.styles';

interface Step2Props {
    formValues: FromFields;
    label(name: string, optionalText?: string): any;
    onValueChange(e: any): any;
}
const Step2 = (props: Step2Props) => {
    const { formValues, label, onValueChange } = props;
    const classes = useStyles();

  return (
    <Stack component="form" sx={{width: '30ch', marginTop: 5}}>
        <div className={classes.textContainer}>
            <Typography className={classes.text}>JOHN DoE</Typography>
            <Typography className={classes.text}>Senior operations</Typography>
            <Typography className={classes.text}>j.doe@group.com</Typography>
            <Typography className={classes.text}>Autorized signer</Typography>
        </div>
 
    <FormControl variant="standard" fullWidth sx={{ margin: '4px 4px !important' }} >
        <InputLabel sx={{
            color: '#000',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            fontSize: '12px',
            "&.Mui-focused": {
                color: "#000"
            }
        }} >{label('Web Access')}</InputLabel>
        <Select
            id="demo-simple-select"
            label={label("role")}
            variant='standard'
            value={formValues.webAccess}
            name="webAcces"
            onChange={onValueChange}
            sx={{
                textTransform: 'uppercase',
                fontSize: 12,
                fontWeight: 'bold',
                letterSpacing: '1.5px',
                ':before': { borderBottomColor: '#000' },
                ':after': { borderBottomColor: '#000' },
                '& .MuiSvgIcon-root': {
                    color: '#000'
                }
            }}

        // onChange={handleChange}
        >
            <MenuItem value={"Full Access"}>Full Access</MenuItem>
        </Select>
        <FormHelperText>Adjust what user's can view and edit online.</FormHelperText>
    </FormControl>
    </Stack>

  )
}

export default Step2;
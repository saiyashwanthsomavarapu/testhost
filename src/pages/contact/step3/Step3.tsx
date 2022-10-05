import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import React from 'react'
import { FromFields } from '../conatct.constant';
import { useStyles } from './Step3.styles';

interface Step3Props {
    formValues: FromFields;
    label(name: string, optionalText?: string): any;
    onValueChange(e: any): any;
}
const Step3 = (props: Step3Props) => {
    const { formValues, label, onValueChange } = props;
    const classes =  useStyles();

  return (
    <Stack component="form" sx={{ width: '35ch', marginTop: 5}}>
         <div className={classes.textContainer}>
            <Typography className={classes.text}>JOHN DoE</Typography>
            <Typography className={classes.text}>Senior operations</Typography>
            <Typography className={classes.text}>j.doe@group.com</Typography>
            <Typography className={classes.text}>Autorized signer</Typography>
        </div>

        <FormControl variant="standard" fullWidth sx={{ margin: '4px 4px !important' }}>
        <FormLabel sx={{
            color: '#000',
            fontSize: 12,
            ':before': { borderBottomColor: '#000' },
            ':after': { borderBottomColor: '#000' },
            '& .Mui-focused': {
                color: '#000'
            }
        }} id="demo-row-radio-buttons-group-label">{label("primay contact")}</FormLabel>
        <RadioGroup
            id=""
            row
            value={formValues.planNotification}
            onChange={onValueChange}
            name="planNotification"
        >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <FormHelperText>{"Maximum of 3 contacts can receive Plan Notifications."}</FormHelperText>
    </FormControl>
    </Stack>

  )
}

export default Step3;
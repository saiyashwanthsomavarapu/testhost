import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Stack } from '@mui/material'
import React, { } from 'react'
import InputField from '../../../components/FormFields/InputField/InputField';
import PhoneNumber from '../../../components/FormFields/PhoneNumber/PhoneNumber';
import SelectField from '../../../components/FormFields/Select/SelectField';
import { FromFields } from '../conatct.constant';
import { useStyles } from './Step1.styles';
// import { } from '../conatct.constant';
interface Step1Props {
    formValues: FromFields;
    errors: any;
    label(name: string, optionalText?: string): any;
    onValueChange(e: any): any;
}

const Step1 = (props: Step1Props) => {
    const classes = useStyles();
    const { formValues, errors, label, onValueChange } = props;
    const menuList = [
        { label: "Authorized Signer",value: "Authorized Signer"}
    ]

    return (
        <Stack component="form" sx={{ width: "30ch", marginTop: 5 }} spacing={2}>
            {JSON.stringify(errors)}
            <InputField
                required
                name="firstName"
                label={"FIRST NAME"}
                value={formValues.firstName}
                onChange={onValueChange}
                validator={{
                    minLength:2,
                    maxLength: 10,
                    pattern:{
                        regex: /[A-Za-z]+$/
                    }
                }}
                error={errors?.firstName}
                inputProps={{pattern: "[A-Za-z]"}}
                errorText={"required field"}
            />
            <InputField
                label={"MIDDLE NAME"}
                optionalWithLabel={"OPTIONAL"}
                name="middleName"
                value={formValues.middleName}
                onChange={onValueChange}
            />
            <InputField
                required
                name="lastName"
                label={"LAST NAME"}
                value={formValues.lastName}
                onChange={onValueChange}
            />
            <InputField
                label={"TITLE"}
                optionalWithLabel={"OPTIONAL"}
                name="title"
                value={formValues.title}
                onChange={onValueChange}
            />
            <InputField
                type="email"
                name="email"
                label={"EMAIL"}
                required
                pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
                value={formValues.email}
                onChange={onValueChange}
                errorText="invalid email"
            />
            <div style={{ margin: 0, display: 'flex' }}>
                <PhoneNumber 
                    name="phone"
                    mask={"000"}
                    label="phone"
                    className={classes.phoneNumber}
                    onChange={onValueChange}
                    value={formValues.phone}    
                    inputProps={{mask:'(000) 000-000'}}        
                />
                 <PhoneNumber 
                    name="ext"
                    className={classes.ext}
                    label="ext"
                    onChange={onValueChange}
                    value={formValues.ext}  
                    inputProps={{ mask: "000", style: { letterSpacing: '1.5px !important', textTransform: 'uppercase !important', fontWeight: 'bold !important', fontSize: 12, width: '15ch !important' } }}          
                />
                {/* <InputField
                    label={"phone"}
                    name="phone"
                    required
                    value={formValues.phone}
                    onChange={onValueChange}
                    fullWidth
                    inputProps={{ style: { letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 12 } }}
                /> */}
                {/* <InputField
                    label={"EXT"}
                    required
                    name="ext"
                    value={formValues.ext}
                    margin="normal"
                    pattern="/[0-9]+/g"
                    onChange={onValueChange}
                    inputProps={{ pattern: '[0-9]*' , maxLength: 3, style: { letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 12, width: '15ch' } }}
                /> */}
            </div>
            <SelectField
                name="role"
                label='role'
                menuList={menuList}
                value={formValues.role}
                onChange={onValueChange}
                helperText={"Adjust what this contact able to autorize"}
            />

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
                    row
                    name="primaryContact"
                    value={formValues.primaryContact}
                    onChange={onValueChange}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <FormHelperText>{"There is a single primary contact per plan"}</FormHelperText>
            </FormControl>
        </Stack>
    )
}

export default Step1
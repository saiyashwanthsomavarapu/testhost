import { FormControl, Input, InputLabel  } from '@mui/material';
import React, { forwardRef, RefCallback } from 'react'

import { IMaskInput } from 'react-imask';
import { useStyles } from './PhoneNumber.styles';
import clsx from 'clsx';

interface CustomProps {
    style: any;
    mask: string;
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const PhoneMaskCustom = forwardRef<HTMLElement, CustomProps>(
    function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask={props?.mask}
                definitions={{
                    '#': /[1-9]/,
                }}
                style={{width:'15ch'}}
                inputRef={ref as RefCallback<HTMLTextAreaElement | HTMLInputElement>}
                onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    },
);


interface PhoneNumberProps {
    className?: any;
    name: string;
    label: string;
    value: any;
    optionalWithLabel?: string;
    onChange: any;
    mask?: any;
    fullWidth?: boolean;
    inputProps?: any;
}
const PhoneNumber = (props: PhoneNumberProps) => {
    const classes = useStyles();
    const labelText = (name: string, optionalText: string = '') => {
        return (
            <b style={{ fontSize: 14, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                {name} &nbsp;
                {optionalText !== '' &&
                    <span style={{ color: '#c3c3c3', fontSize: 12 }}>  ({optionalText})</span>}
            </b>
        );
    }
    return (
        <FormControl variant="standard" className={clsx(classes.root,props?.className)} fullWidth error={true}>
            <InputLabel className={classes.inputLabel} htmlFor={`phonenumber-${props?.name}`}>{labelText(props?.label,props?.optionalWithLabel)}</InputLabel>
            <Input
                className={clsx(classes.input)}
                value={props?.value}
                onChange={props?.onChange}
                name={props?.name}
                margin="dense"
                fullWidth={props?.fullWidth ? true : false }
                id={`phonenumber-${props?.name}`}
                inputProps={{

                    ...{ mask: props?.mask, style: { letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 12 } },
                    ...props?.inputProps
                }}
                inputComponent={PhoneMaskCustom as any}
            />
        </FormControl>
    )
}

export default PhoneNumber
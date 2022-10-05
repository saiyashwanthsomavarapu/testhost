import { useState } from 'react';
import { StyledTextField, useStyles } from './InputField.styles';

interface InputFieldProps {
    label: string;
    type?: string;
    name: string;
    optionalWithLabel?: string;
    variant?: any;
    inputProps?: any;
    className?: string;
    onChange?: any;
    required?: boolean;
    margin?: any;
    fullWidth?: boolean;
    validator?: any;
    value?: any;
    maxLength?: any;
    error?: boolean;
    pattern?: any;
    errorText?: string;
}

const InputField = (props: InputFieldProps) => {
    const [hasError, setHasError] = useState(false)
    const [errorMsg, setErrorMsg] = useState<any>({});
    const classes = useStyles();
    const labelText = (name: string, optionalText: string = '') => {
        return (
            <b className={classes.label} >
                {name} &nbsp;
                {optionalText !== '' &&
                    <span className={classes.optionalText}>  ({optionalText})</span>}
            </b>
        );
    }

    const onBlur = (ev: any) => {
        const val = ev.target.value;
        if ((!val.length && props?.required)) {
            setHasError(true);
        }
    }


    const checkValidator = (ev: any) => {
        const { value } = ev.target;
        if (!props?.validator)
            return
        const exp = props?.validator?.pattern
        const reg = exp?.regex ? exp?.regex.test(String(value).toLowerCase()) : true;
        if (value?.length > props?.validator.maxLength) {
            setErrorMsg({
                [props?.name]: `maxLength ${props?.validator.maxLength}`
            })
            setHasError(true)
        } else if (props?.validator?.minLength > value.length) {
            setErrorMsg({
                [props?.name]: `minLength ${props?.validator.minLength}`
            })
            setHasError(true)
        } else if (!reg ) {
            setErrorMsg({
                [props?.name]: exp?.errorMsg
            })
            setHasError(true)
        }
        else {
            setErrorMsg({})
            setHasError(false)
        }
    }
    const onChange = (ev:any) => {
        const exp = props?.validator?.pattern
        const reg = exp ? exp?.regex.test(String(ev.target.value).toLowerCase()) : true;
        if (reg || !ev.target.value.length || props?.type === 'email') {
            props?.onChange(ev);
        }
    }

    return (
        <>
        {props?.error ? 'true': 'false'}
        <StyledTextField
            className={props?.className}
            type={props?.type ?? 'text'}
            label={labelText(props.label, props?.optionalWithLabel)}
            variant={props?.variant ?? 'standard'}
            name={props?.name}
            margin={props.margin ?? 'dense'}
            onBlur={onBlur}
            onInput={checkValidator}
            onChange={onChange}
            value={props?.value}
            required={props?.required}
            fullWidth={props?.fullWidth ? true : false}
            error={props?.error ?? hasError }
            helperText={hasError && `${errorMsg?.[props.name] ?? ''}`}
            inputProps={{
                ...{ className: classes.inputStyles },
                ...props?.inputProps,
                ...props?.validator
            }}
        />
        </>
    )
}

export default InputField;

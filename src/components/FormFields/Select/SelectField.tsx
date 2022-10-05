import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'

interface MenuProps {
    label: string;
    value: any;
}
interface SelectFieldProps {
    name: string;
    label: string;
    variant?: any;
    value: any;
    optionalWithLabel?: string;
    menuList: MenuProps[];
    onChange: any;
    helperText?: string;
}
const SelectField = (props:SelectFieldProps) => {
    const label = (name: string, optionalText: string = '') => {
        return (
            <b style={{ fontSize: 14, letterSpacing: '1.5px' }}>
                {name} &nbsp;
                {optionalText !== '' &&
                    <span style={{ color: '#c3c3c3', fontSize: 12 }}>  ({optionalText})</span>}
            </b>
        );
    }

    return (
        <FormControl variant="standard" fullWidth sx={{ margin: '4px 4px !important' }} >
            <InputLabel sx={{
                color: '#000',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                fontSize: '12px',
                "&.Mui-focused": {
                    color: "#000"
                }
            }} >{label(props?.label, props?.optionalWithLabel)}</InputLabel>
            <Select
                id={`select-${props?.name}`}
                name={props?.name}
                label={props?.label}
                variant={props?.variant ?? 'standard'}
                value={props?.value}
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
                onChange={props?.onChange}
            >
                {props?.menuList.map((item,index) =>(
                    <MenuItem key={index} value={item?.value}>{item.label}</MenuItem>
                ))}
            </Select>
            <FormHelperText>{props?.helperText}</FormHelperText>
        </FormControl>
    )
}

export default SelectField
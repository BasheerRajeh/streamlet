import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { ChangeEvent, FC } from 'react';

interface InputProps {
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    error?: boolean;
    helperText?: string;
}

const Input: FC<InputProps & TextFieldProps> = ({
    startAdornment,
    endAdornment,
    error,
    helperText,
    onChange,
    ...rest
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <TextField
            {...rest}
            variant='outlined'
            InputProps={{
                startAdornment: startAdornment && (
                    <InputAdornment position='start'>{startAdornment}</InputAdornment>
                ),
                endAdornment: endAdornment && (
                    <InputAdornment position='end'>{endAdornment}</InputAdornment>
                ),
            }}
            error={error}
            helperText={helperText}
            fullWidth
            onChange={handleChange}
        />
    );
};

export default Input;

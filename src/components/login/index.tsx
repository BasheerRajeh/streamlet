import { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Lock } from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    borderRadius: '24px',
    boxShadow: theme.shadows[13]
}));

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => setShowPassword(!showPassword);

    return (
        <StyledCard>
            <CardContent>
                <h2>Login</h2>
                <TextField
                    fullWidth
                    margin="normal"
                    id="email"
                    label="Email"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    sx={{ borderRadius: '24px' }}
                    fullWidth
                    margin="normal"
                    id="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleTogglePassword}>
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me"
                    style={{ marginBottom: 0 }}
                />
                <Button fullWidth variant="contained" color="primary" style={{ marginTop: 16 }}>
                    Login
                </Button>
            </CardContent>
        </StyledCard>
    );
}

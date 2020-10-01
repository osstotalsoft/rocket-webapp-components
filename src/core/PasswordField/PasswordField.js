import React, { useState, useCallback } from 'react'
import CustomTextField from "../CustomTextField";
import { InputAdornment, IconButton } from "@material-ui/core"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from 'react-i18next';

const PasswordField = ({ ...rest }) => {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const tooltip = showPassword ? t('Tooltips.HidePassword') : t('Tooltips.ShowPassword')

    const handleClickShowPassword = useCallback(_ => {
        setShowPassword(x => !x)
    }, [])

    const handleMouseDownPassword = useCallback(event => {
        event.preventDefault();
    }, [])

    return (
        <CustomTextField
            {...rest}
            customInputProps={{
                type: showPassword ? 'text' : 'password'
            }}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                        <Tooltip title={tooltip}>
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </Tooltip>
                    </IconButton>
                </InputAdornment>
            }
        />
    )
}

export default PasswordField
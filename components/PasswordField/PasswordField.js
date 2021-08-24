import React, { useState, useCallback } from "react";
import CustomTextField from "../CustomTextField";
import { InputAdornment } from "@material-ui/core";
import Tooltip from '../Tooltip/Tooltip';
import { Visibility, VisibilityOff } from "@material-ui/icons";
import IconButton from "../IconButton";
import PropTypes from "prop-types";

const PasswordField = ({ showPasswordText, hidePasswordText, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const tooltip = showPassword ? hidePasswordText : showPasswordText;

  const handleClickShowPassword = useCallback(_ => {
    setShowPassword(x => !x);
  }, []);

  const handleMouseDownPassword = useCallback(event => {
    event.preventDefault();
  }, []);

  return (
    <CustomTextField
      {...rest}
      inputProps={{
        type: showPassword ? "text" : "password"
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
  );
};

PasswordField.defaultProps = {
  hidePasswordText: "Hide password",
  showPasswordText: "Show password text"
};

PasswordField.propTypes = {
/**
* The text to be displayed on tooltip when the user wants to hide the password
*/
  hidePasswordText: PropTypes.string,
/**
* The text to be displayed on tooltip when the user wants to show the password
*/
  showPasswordText: PropTypes.string
};

export default PasswordField;

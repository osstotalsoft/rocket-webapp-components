import React from "react";
import PropTypes from "prop-types";
import ReactDatetime from "react-datetime";
import moment from 'moment';
import { TextField, makeStyles } from '@material-ui/core';
import timePickerStyle from './dateTimeStyle';

const useStyles = makeStyles(timePickerStyle);

const TimePicker = ({ value, label, required, error, helperText, timeFormat, editable, disabled, onChange, ...other }) => {
    const classes = useStyles();

    const handleTimeChange = value => {
        if (moment.isMoment(value)) {
            return onChange(value.format("HH:mm:ss"));
        }
        return onChange(value);
    }

    return (
        <ReactDatetime
            renderInput={(props) => {
                return (<TextField
                    className={classes.dateTimeInput}
                    fullWidth
                    disabled={disabled}
                    required={required}
                    error={error}
                    helperText={helperText}
                    label={label}
                    {...props}
                    inputProps={{ readOnly: !editable }}
                >
                </TextField>
                )
            }}
            value={value}
            onChange={handleTimeChange}
            timeFormat={timeFormat}
            strictParsing={true}
            closeOnSelect={true}
            closeOnTab={true}
            dateFormat={false}
            {...other} />
    );
}

TimePicker.defaultProps = {
    editable: true
};

TimePicker.propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    required: PropTypes.bool,
    editable: PropTypes.bool,
    error: PropTypes.any,
    onChange: PropTypes.func,
    maskable: PropTypes.bool,
    helperText: PropTypes.string,
    timeFormat: PropTypes.string,
    disabled: PropTypes.bool
};

export default TimePicker;
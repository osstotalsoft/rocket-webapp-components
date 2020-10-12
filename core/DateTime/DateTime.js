import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { makeStyles, IconButton } from "@material-ui/core";
import { Clear, CalendarToday } from "@material-ui/icons";

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import dateTimeStyle from "./dateTimeStyle";
import moment from "moment";

// ! To use another localization import "moment/locale/[lang]" in your app
moment.locale("en");

const useStyles = makeStyles(dateTimeStyle);
const defaultTimeFormat = "HH:mm"
const defaultDateFormat = "DD-MM-YYYY"

const TooltipArea = React.forwardRef(({ children, ...props }, ref) => (<div {...props} ref={ref}>{children}</div>));
TooltipArea.displayName = "TooltipArea"
TooltipArea.propTypes = {
    children: PropTypes.element
}

function DateTime({ value, onChange, dateFormat, timeFormat,
    showTime, clearable, disabled, error, helperText, invalidDateMessage, minDateMessage, maxDateMessage, language, ...res }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const format = showTime ? `${dateFormat} ${timeFormat}` : dateFormat

    const errorData = disabled
        ? { error: false, helperText: null }
        : error ? { error, helperText } : {}

    const handleChange = useCallback(date => onChange(date ? moment(date).toDate() : null), [onChange])
    const handleSetOpen = useCallback(value => () => setOpen(value), [])
    const handleClear = useCallback(() => handleChange(null), [handleChange])

    const clearablePickerProps = {
        InputProps: {
            endAdornment: (
                <>
                    <IconButton
                        disabled={disabled}
                        onClick={handleClear}
                        className={classes.dateTimeIconButtons}
                    >

                        <Clear fontSize="small" />
                    </IconButton>
                    <IconButton
                        disabled={disabled}
                        onClick={handleSetOpen(true)}
                        className={classes.dateTimeIconButtons}
                    >
                        <CalendarToday fontSize="small" />
                    </IconButton>
                </>
            )
        },
        InputAdornmentProps: {
            position: "start",
            style: {
                display: "none"
            }
        }
    }

    const simplePickerProps = {
        keyboardIcon: <CalendarToday fontSize="small" onClick={handleSetOpen(true)} />,
        KeyboardButtonProps: {
            disabled: disabled,
            className: classes.dateTimeIconButtons
        }
    }

    const pickerProps = clearable && value ? clearablePickerProps : simplePickerProps

    return (
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={language}>
            <KeyboardDateTimePicker
                {...pickerProps}
                fullWidth
                open={open}
                onClose={handleSetOpen(false)}
                value={value}
                onChange={handleChange}
                format={format}
                invalidDateMessage={invalidDateMessage}
                minDateMessage={minDateMessage}
                maxDateMessage={maxDateMessage}
                className={classes.defaultFont}
                InputProps={{
                    disabled,
                    className: classes.dateTimeInput,
                    ...pickerProps.InputProps
                }}
                InputLabelProps={{
                    className: classes.label
                }}
                {...errorData}
                {...res}
            />
        </MuiPickersUtilsProvider>
    )
}

DateTime.defaultProps = {
    value: null,
    onChange: () => { },
    label: "Date Time",
    dateFormat: defaultDateFormat,
    timeFormat: defaultTimeFormat,
    variant: "inline",
    views: ["date"],
    disableToolbar: true,
    autoOk: true,
    disabled: false,
    ampm: false,
    InvalidDateMessage: "Invalid Date Format",
    MinDateMessage: "Date should not be before minimal date",
    MaxDateMessage: "Date should not be after maximal date"
}

DateTime.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
    dateFormat: PropTypes.string,
    timeFormat: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(["dialog", "inline", "static"]),
    views: PropTypes.arrayOf(PropTypes.oneOf(["date", "year", "month", "hours", "minutes"])),
    autoOk: PropTypes.bool,
    disablePast: PropTypes.bool,
    disableFuture: PropTypes.bool,
    disableToolbar: PropTypes.bool,
    allowKeyboardControl: PropTypes.bool,
    ampm: PropTypes.bool, //12h/24h view for hour selection clock
    showTime: PropTypes.bool,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    clearable: PropTypes.bool,
    InvalidDateMessage: PropTypes.string,
    maxDateMessage: PropTypes.string,
    minDateMessage: PropTypes.string,
    /** The current language, preferably get it from the i18next (i18.language)  */
    language: PropTypes.string
}

export default DateTime;
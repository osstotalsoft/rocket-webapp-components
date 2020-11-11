import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles, IconButton } from "@material-ui/core";
import { Clear, CalendarToday } from "@material-ui/icons";

import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
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
    showTime, clearable, disabled, error, helperText, invalidDateMessage, minDateMessage, maxDateMessage, language, ...rest }) {

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
                {...rest}
            />
        </MuiPickersUtilsProvider>
    )
}

DateTime.defaultProps = {
    value: null,
    onChange: () => { },
    dateFormat: defaultDateFormat,
    timeFormat: defaultTimeFormat,
    variant: "inline",
    views: ["date"],
    disabled: false,
    invalidDateMessage: "Invalid Date Format",
    minDateMessage: "Date should not be before minimal date",
    maxDateMessage: "Date should not be after maximal date",
    disableToolbar: true,
    autoOk: true,
    disabled: false,
    ampm: false
}

DateTime.propTypes = {
    /**
    * Picker value
    * @default null
    */
    value: PropTypes.any,
    /**
    * onChange callback
    * @default () => { }
    */
    onChange: PropTypes.func,
    /**
    * Date format string.
    * @default  'HH:mm'
    */
    dateFormat: PropTypes.string,
    /**
   * Time format string.
   * @default  'DD-MM-YYYY' 
   */
    timeFormat: PropTypes.string,
    /**
    * If true, the picker and text field will be disabled.
    * @default false
    */
    disabled: PropTypes.bool,
    /**
    * Picker container option.
    * @defualt 'inline'
    */
    variant: PropTypes.oneOf(["dialog", "inline", "static"]),
    /**
   * Array of views to show.
   * @default ["date"]
   */
    views: PropTypes.arrayOf(PropTypes.oneOf(["date", "year", "month", "hours", "minutes"])),
    /**
    * If true, the time is shown.
    * @default false
    */
    showTime: PropTypes.bool,
    /**
   * If true, the error data is provided.
   * @default false
   */
    error: PropTypes.bool,
    /**
   * The text content in case of failure.
   */
    helperText: PropTypes.string,
    /**
   * If true, show clear action in picker dialog.
   */
    clearable: PropTypes.bool,
    /**
   * Message, appearing when date cannot be parsed.
   * @default 'Invalid Date Format'
   */
    invalidDateMessage: PropTypes.node,
    /**
   * Error message, shown if date is more then maximal date. 
   * @default 'Date should not be after maximal date'
   */
    maxDateMessage: PropTypes.node,
    /**
   * Error message, shown if date is less then minimal date
   * @default 'Date should not be before minimal date'
   */
    minDateMessage: PropTypes.node,
    /**
    * To use another localization import "moment/locale/[lang]" in your app
    * The current language, preferably taken from the i18next (i18.language) or another internationalization library
    * @default "en"
    */
    language: PropTypes.string,
    /**
    * Hide toolbar and show only date/time views
    * @default false
    */
    disableToolbar: PropTypes.bool,
    /**
    * Auto accept date on selection
    * @default false
    */
    autoOk: PropTypes.bool,
    /**
     * Disable picker and text field
     * @default false
     */
    disabled: PropTypes.bool,
    /**
    * 12h/24h view for hour selection clock
    * @default true
    */
    ampm: PropTypes.bool,
}

export default DateTime;
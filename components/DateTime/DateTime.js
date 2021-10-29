import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, IconButton } from "@material-ui/core";
import { Clear, CalendarToday } from "@material-ui/icons";

import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import dateTimeStyle from "./dateTimeStyle";
import moment from "moment";
import { emptyObject } from "../../utils/constants";

// ! To use another localization import "moment/locale/[lang]" in your app
moment.locale("en");

const useStyles = makeStyles(dateTimeStyle);
const defaultTimeFormat = "HH:mm";
const defaultDateFormat = "DD-MM-YYYY";

const TooltipArea = React.forwardRef(({ children, ...props }, ref) => (
  <div {...props} ref={ref}>
    {children}
  </div>
));
TooltipArea.displayName = "TooltipArea";
TooltipArea.propTypes = {
  children: PropTypes.element
};

function DateTime({
  value,
  onChange,
  dateFormat,
  timeFormat,
  showTime,
  clearable,
  disabled,
  error,
  helperText,
  invalidDateMessage,
  minDateMessage,
  maxDateMessage,
  language,
  ...rest
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const format = showTime ? `${dateFormat} ${timeFormat}` : dateFormat;

  const errorData = disabled
    ? { error: false, helperText: null }
    : error
    ? { error, helperText }
    : emptyObject;

  const handleSetOpen = useCallback(value => () => setOpen(value), []);
  const handleChange = useCallback(
    date => onChange(date ? moment(date).toDate() : null),
    [onChange]
  );
  const handleClear = useCallback(() => handleChange(null), [handleChange]);

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
            className={classes.dateTimeIconButtons}
            onClick={handleSetOpen(true)}
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
  };

  const simplePickerProps = {
    keyboardIcon: <CalendarToday fontSize='small' onClick={handleSetOpen(true)} />,
    KeyboardButtonProps: {
      disabled: disabled,
      className: classes.dateTimeIconButtons
    }
  }

  const pickerProps =
    clearable && value ? clearablePickerProps : simplePickerProps;

  return (
    <MuiPickersUtilsProvider
      libInstance={moment}
      utils={MomentUtils}
      locale={language}
    >
      <KeyboardDateTimePicker
        {...pickerProps}
        fullWidth
        value={value}
        open={open}
        onClose={handleSetOpen(false)}
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
  );
}

DateTime.defaultProps = {
  value: null,
  onChange: () => {},
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
  ampm: false
};

DateTime.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["dialog", "inline", "static"]),
  views: PropTypes.arrayOf(
    PropTypes.oneOf(["date", "year", "month", "hours", "minutes"])
  ),
  showTime: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  clearable: PropTypes.bool,
  invalidDateMessage: PropTypes.node,
  maxDateMessage: PropTypes.node,
  minDateMessage: PropTypes.node,
  language: PropTypes.string,
  disableToolbar: PropTypes.bool,
  autoOk: PropTypes.bool,
  ampm: PropTypes.bool
};

export default DateTime;

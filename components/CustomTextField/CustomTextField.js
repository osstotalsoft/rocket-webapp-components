/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { makeStyles, TextField } from "@material-ui/core";
import textFieldStyle from "./textFieldStyle";
import { useDebounce } from "use-debounce";
import { curry } from "ramda";
import { emptyFunction, emptyString } from "../../utils/constants";

const useStyles = makeStyles(textFieldStyle);

const isAllowed = values =>
  !(values.floatValue && values.floatValue.toString().includes("e"));

function NumberFormatCustom(props) {
  const {
    inputRef,
    onChange,
    decimalScale,
    fixedDecimalScale,
    thousandSeparator,
    language,
    ...other
  } = props;
  let formatter = new Intl.NumberFormat(language);

  var thousandSep = thousandSeparator
    ? formatter.format(1111).replace(/1/g, "")
    : thousandSeparator;
  var decimalSeparator = formatter.format(1.1).replace(/1/g, "");
  const valueIsNumericString =
    !!props.value &&
    typeof props.value === "string" &&
    !Number.isNaN(Number(props.value));

  const handleValueChange = useCallback(values => onChange(values.floatValue), [
    onChange
  ]);

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      style={{ textAlign: "right" }}
      onValueChange={handleValueChange}
      isAllowed={isAllowed}
      decimalScale={decimalScale}
      fixedDecimalScale={fixedDecimalScale}
      thousandSeparator={thousandSep}
      decimalSeparator={decimalSeparator}
      isNumericString={valueIsNumericString}
      //format = {customFormat}
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  decimalScale: PropTypes.number.isRequired,
  fixedDecimalScale: PropTypes.bool,
  thousandSeparator: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

NumberFormatCustom.defaultProps = {
  decimalScale: 2,
  fixedDecimalScale: true,
  thousandSeparator: true
};

// TODO: this is for backwards compatibility (onTextBoxChange) ... remove onTextBoxChange and keep only value
const setValueToDesiredFormat = curry((isNumeric, value) =>
  isNumeric ? value : { target: { value } }
);
const getValueFromDesiredFormat = curry((isNumeric, e) =>
  isNumeric ? e : e?.target.value
);

function CustomTextField({
  isNumeric,
  customInputProps,
  inputProps,
  endAdornment,
  startAdornment,
  InputLabelProps,
  className,
  value,
  onChange,
  debounceBy,
  ...rest
}) {
  const classes = useStyles();

  // props applied to the Input element
  const customMuiInput = isNumeric
    ? {
        inputComponent: NumberFormatCustom,
        endAdornment,
        startAdornment,
        ...customInputProps
      }
    : {
        endAdornment,
        startAdornment,
        ...customInputProps
      };

  // attributes applied to the input element
  const customReactInput = {
    ...inputProps,
    className: `${classes.input} ${
      inputProps?.className ? inputProps.className : emptyString
    }`
  };

  const [localValue, setLocalValue] = useState(value);
  const [debouncedValue] = useDebounce(localValue, debounceBy);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    debouncedValue !== value &&
      onChange(setValueToDesiredFormat(isNumeric)(debouncedValue));
  }, [debouncedValue]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    value !== localValue && setLocalValue(value);
  }, [value]);

  const handleChange = useCallback(
    e => setLocalValue(getValueFromDesiredFormat(isNumeric)(e)),
    [isNumeric]
  );

  return (
    <TextField
      onChange={handleChange}
      value={localValue}
      {...rest}
      className={classes.textField + " " + className}
      InputProps={customMuiInput}
      inputProps={customReactInput}
      InputLabelProps={{
        className: classes.label,
        ...InputLabelProps
      }}
    />
  );
}

CustomTextField.defaultProps = {
  isNumeric: false,
  debounceBy: 0,
  onChange: emptyFunction
};

CustomTextField.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  className: PropTypes.string,
  /**
   * If true, the input will accept only numeric values.
   */
  isNumeric: PropTypes.bool,
  /**
   * Other properties you can provide to the Input component.
   */
  customInputProps: PropTypes.object,
  /**
   * Attributes applied to the input element.
   */
  inputProps: PropTypes.object,
  /**
   * End adornment of componenent. (Usually an InputAdornment from material-ui)
   */
  endAdornment: PropTypes.any,
  /**
   * Start adornment of componenent. (Usually an InputAdornment from material-ui)
   */
  startAdornment: PropTypes.any,
  /**
   * Props applied to the InputLabel element.
   */
  InputLabelProps: PropTypes.object,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes.any,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * The delay of debouncing.
   */
  debounceBy: PropTypes.number,
  /**
   * The current language, preferably taken from the i18next (i18.language) or another internationalization library
   */
  language: PropTypes.string
};

export default CustomTextField;

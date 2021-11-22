/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { makeStyles, TextField, deprecatedPropType } from "@material-ui/core";
import textFieldStyle from "./textFieldStyle";
import { useDebounce } from "use-debounce";
import { curry, is, head } from "ramda";
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
  InputProps,
  endAdornment,
  startAdornment,
  InputLabelProps,
  className,
  value,
  onChange,
  debounceBy,
  helperText,
  ...rest
}) {
  const classes = useStyles();

  // props applied to the Input element
  const customMuiInput = isNumeric
    ? {
        inputComponent: NumberFormatCustom,
        endAdornment,
        startAdornment
      }
    : {
        endAdornment,
        startAdornment,
        ...InputProps
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

  useEffect(() => {
    debouncedValue !== value &&
      onChange(setValueToDesiredFormat(isNumeric)(debouncedValue));
  }, [debouncedValue]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    value !== localValue && setLocalValue(value);
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = useCallback(
    e => setLocalValue(getValueFromDesiredFormat(isNumeric)(e)),
    [isNumeric]
  );

  return (
    <TextField
      onChange={handleChange}
      value={localValue}
      helperText={is(Array, helperText) ? head(helperText) : helperText}
      {...rest}
      className={className ? `${classes.textField} ${className}` : classes.textField}
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
   * Other properties you can provide to the component.
   */
  customInputProps: deprecatedPropType(PropTypes.object, "Use `inputProps` instead."),
  /**
   * Attributes applied to the input element.
   * For the numeric input, you can provide properties like thousandSeparator, decimalScale and allowNegative.
   */
  inputProps: PropTypes.object,
  /**
   * Other properties you can provide to the Input component.
   */
  InputProps: PropTypes.object,
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
   * The content of the helper under the input.
   */
  helperText: PropTypes.node,
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

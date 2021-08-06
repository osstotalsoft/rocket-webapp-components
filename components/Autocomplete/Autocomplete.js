import React, { useCallback, useEffect, useState } from "react";
import MuiAutocomplete, {
  createFilterOptions
} from "@material-ui/lab/Autocomplete";
import PropTypes from "prop-types";
import autoCompleteStyles from "./autocompleteStyle";
import { Chip, makeStyles, Checkbox } from "@material-ui/core";
import {
  flatten,
  prop,
  map,
  innerJoin,
  find,
  propEq,
  has,
  all,
  omit,
  contains
} from "ramda";
import { emptyArray, emptyString } from "../../utils/constants";
import CustomTextField from "../CustomTextField";
import Typography from "../Typography";
import cx from "classnames";
import humps from "humps";
import { CheckBoxOutlineBlank, CheckBox } from "@material-ui/icons";

function deprecated(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) {
    if (props[propName] != null) {
      let warned = {};
      const message = `"${propName}" property of "${componentName}" has been deprecated.\n${
        explanation ? explanation : emptyString
      }`;
      if (!warned[message]) {
        console.warn(message);
        warned[message] = true;
      }
    }

    return propType(props, propName, componentName, ...rest);
  };
}

const useStyles = makeStyles(autoCompleteStyles);

const isPrimitive = value =>
  typeof value === "string" ||
  typeof value === "number" ||
  typeof value === "boolean";

const filter = createFilterOptions();
const filterOptions = (labelKey, valueKey, creatable, createdLabel) => (
  options,
  params
) => {
  const filtered = filter(options, params);
  // Suggest the creation of a new value
  if (creatable && params.inputValue !== "") {
    filtered.push(
      isPrimitive(options[0])
        ? {
            primitiveValue: params.inputValue,
            createdLabel: createdLabel
              ? `${createdLabel} '${params.inputValue}'`
              : params.inputValue
          }
        : {
            [valueKey]: undefined,
            [labelKey]: params.inputValue,
            createdLabel: createdLabel
              ? `${createdLabel} '${params.inputValue}'`
              : params.inputValue
          }
    );
  }

  return filtered;
};

const getSimpleValue = (options, value, valueKey, isMultiSelection) => {
  if (isMultiSelection && !Array.isArray(value)) return emptyArray;

  const hasGroups = all(has("options"), options);
  const flattenOptions = hasGroups
    ? flatten(map(prop("options"), options))
    : options;

  // Add new options if the Autocomplete is multiSelection and creatable
  if (Array.isArray(value)) {
    const flattenOptionsSimpleValues = map(prop(valueKey), flattenOptions);
    value?.map(v => {
      if (!contains(v, flattenOptionsSimpleValues))
        flattenOptions.push({ [valueKey]: v });
    });
  }

  const result = isMultiSelection
    ? innerJoin((o, v) => o[valueKey] === v, flattenOptions, value)
    : find(propEq(valueKey, value), flattenOptions);

  return result || null;
};

const getOptionLabel = labelKey => option => {
  if (isPrimitive(option)) return option;
  return option[labelKey] ? option[labelKey] : emptyString;
};

const getOptionSelected = (option, value) => {
  return isPrimitive(option)
    ? option === value
    : JSON.stringify(option) === JSON.stringify(value);
};

const Autocomplete = ({
  options: receivedOptions,
  defaultOptions,
  loadOptions,
  onChange,
  creatable,
  onMenuOpen,
  value,
  isMultiSelection,
  withCheckboxes,
  isSearchable,
  isClearable,
  disabled,
  simpleValue,
  label,
  valueKey,
  labelKey,
  error,
  helperText,
  createdLabel,
  typographyContentColor,
  inputSelectedColor,
  ...other
}) => {
  const classes = useStyles();

  const typographyClasses = cx({
    [classes[`color${humps.pascalize(typographyContentColor)}`]]:
      typographyContentColor !== "initial"
  });

  const [options, setOptions] = useState(
    receivedOptions || (Array.isArray(defaultOptions) && defaultOptions)
  );

  const handleOpen = useCallback(() => {
    if (
      loadOptions &&
      options.length ===
        (Array.isArray(defaultOptions) ? defaultOptions.length : 0)
    )
      loadOptions().then(loadedOptions => {
        setOptions(loadedOptions || emptyArray);
      });
    if (onMenuOpen) onMenuOpen();
  }, [defaultOptions, loadOptions, onMenuOpen, options.length]);

  const renderInput = useCallback(
    params => {
      params.inputProps.className = `${params.inputProps.className} ${classes.input}`;
      if (inputSelectedColor)
        params.inputProps.style = { color: inputSelectedColor };

      const textFieldProps = {
        label,
        error,
        helperText
      };

      return (
        <CustomTextField
          fullWidth
          {...params}
          customInputProps={params.InputProps}
          startAdornment={params.InputProps.startAdornment}
          endAdornment={params.InputProps.endAdornment}
          {...textFieldProps}
        />
      );
    },
    [classes.input, error, helperText, inputSelectedColor, label]
  );

  const renderOption = useCallback(
    (option, { selected }) =>
      withCheckboxes ? (
        <>
          <Checkbox
            icon={<CheckBoxOutlineBlank fontSize="small" />}
            checkedIcon={<CheckBox fontSize="small" />}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.createdLabel ? option.createdLabel : option[labelKey]}
        </>
      ) : (
        <Typography className={classes.input}>
          {isPrimitive(option)
            ? option
            : option.createdLabel
            ? option.createdLabel
            : option[labelKey]}
        </Typography>
      ),
    [classes.input, labelKey, withCheckboxes]
  );

  const renderTags = useCallback(
    (value, getTagProps) =>
      value.map((option, index) => (
        <Chip
          key={index}
          label={
            isPrimitive(option)
              ? option
              : option.primitiveValue
              ? option.primitiveValue
              : option[labelKey]
          }
          {...getTagProps({ index })}
        />
      )),
    [labelKey]
  );

  const handleChange = useCallback(
    (_event, inputValue) => {
      if (!inputValue) return;
      if (isPrimitive(inputValue)) return onChange(inputValue);
      if (isMultiSelection)
        return onChange(
          simpleValue
            ? inputValue.map(a => (a[valueKey] ? a[valueKey] : a[labelKey]))
            : inputValue.map(a =>
                isPrimitive(a)
                  ? a
                  : a.primitiveValue
                  ? a.primitiveValue
                  : omit(["createdLabel"], a)
              )
        );
      if (simpleValue)
        return onChange(
          inputValue[valueKey] ? inputValue[valueKey] : inputValue[labelKey]
        );
      return onChange(
        inputValue.primitiveValue
          ? inputValue.primitiveValue
          : omit(["createdLabel"], inputValue)
      );
    },
    [isMultiSelection, labelKey, onChange, simpleValue, valueKey]
  );

  useEffect(() => {
    if (defaultOptions === true) handleOpen();
  }, [defaultOptions, handleOpen]);

  useEffect(() => {
    setOptions(receivedOptions || emptyArray);
  }, [receivedOptions]);

  return (
    <MuiAutocomplete
      autoComplete
      autoHighlight
      size="small"
      classes={{
        noOptions: `${classes.noOptionsMessage} ${typographyClasses}`
      }}
      forcePopupIcon
      label={label}
      disabled={disabled}
      onOpen={handleOpen}
      options={options || emptyArray}
      handleHomeEndKeys
      selectOnFocus
      clearOnBlur
      disableCloseOnSelect={isMultiSelection}
      filterSelectedOptions={simpleValue && isMultiSelection && !withCheckboxes}
      filterOptions={filterOptions(labelKey, valueKey, creatable, createdLabel)}
      getOptionLabel={getOptionLabel(labelKey)}
      getOptionSelected={!simpleValue ? getOptionSelected : undefined}
      value={
        simpleValue
          ? getSimpleValue(options, value, valueKey, isMultiSelection)
          : value
      }
      multiple={isMultiSelection}
      onChange={handleChange}
      disableClearable={!isClearable}
      renderOption={renderOption}
      renderInput={renderInput}
      renderTags={renderTags}
      freeSolo={creatable}
      {...other}
    />
  );
};

Autocomplete.defaultProps = {
  options: [],
  defaultOptions: [],
  isMultiSelection: false,
  withCheckboxes: false,
  isClearable: false,
  disabled: false,
  simpleValue: false,
  valueKey: "id",
  labelKey: "name",
  error: false,
  value: null,
  creatable: false,
  typographyContentColor: "textSecondary"
};

Autocomplete.propTypes = {
  /**
   * If true, the portion of the selected suggestion that has not been typed by the user,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   */
  autoComplete: PropTypes.bool,
  /**
   * If true, the first option is automatically highlighted.
   */
  autoHighlight: PropTypes.bool,
  /**
   * The array of options from which the client can select a value.
   */
  options: PropTypes.array,
  /**
   * Function that returns a promise, which is the set of options to be used once the promise resolves.
   */
  loadOptions: PropTypes.func,
  /**
   * The selected value from list of options.
   */
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool
  ]),
  /**
   * Handle change events on the autocomplete.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Handle the menu opening.
   */
  onMenuOpen: PropTypes.func,
  /**
   * If true, the user can select multiple values from list.
   */
  isMultiSelection: PropTypes.bool,
  /**
   * If true, the options list will have checkboxes.
   */
  withCheckboxes: PropTypes.bool,
  /**
   * If true, the user can clear the selected value.
   */
  isClearable: PropTypes.bool,
  /**
   * This prop is deprecated, because the new implementation of Autocomplete is searchable by default.
   */
  isSearchable: deprecated(PropTypes.bool),
  /**
   * If true, the Autocomplete is free solo, meaning that the user input is not bound to provided options
   */
  creatable: PropTypes.bool,
  /**
   * If true, the Autocomplete is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If true, options will be an array of simple values, instead of objects.
   */
  simpleValue: PropTypes.bool,
  /**
   * Label to be displayed in the heading component.
   */
  label: PropTypes.string,
  /**
   * The key of values from options.
   */
  valueKey: PropTypes.string,
  /**
   * The key of the displayed label for each option.
   */
  labelKey: PropTypes.string,
  /**
   * The text to appear below the input, usually coming from a validation.
   */
  helperText: PropTypes.string,
  /**
   * If true, the helper text is displayed when an error pops up.
   */
  error: PropTypes.bool,
  /**
   * The value of label when a new option is added.
   */
  createdLabel: PropTypes.string,
  /**
   * The default set of options to show before the user starts searching. When set to true, the results for loadOptions('') will be autoloaded.
   */
  defaultOptions: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  /**
   * The color of both the text displayed when there are no options and placeholder. It supports those theme colors that make sense for this component.
   */
  typographyContentColor: PropTypes.oneOf([
    "initial",
    "inherit",
    "primary",
    "secondary",
    "textPrimary",
    "textSecondary",
    "error"
  ]),
  /**
   * The color of selected input.
   */
  inputSelectedColor: PropTypes.string
};

export default Autocomplete;

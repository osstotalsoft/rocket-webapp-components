import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Option from "./Option";
import { LinearProgress, Chip, makeStyles } from "@material-ui/core";
import MuiAutocomplete from "@material-ui/lab/Autocomplete";
import { is, isNil, equals, isEmpty, any, prop } from "ramda";
import {
  filterOptions,
  getSimpleValue,
  findFirstNotNil,
  isStringOrNumber,
  computeChangedMultiValue,
  computeChangedSingleValue
} from "./utils";
import { emptyArray, emptyString } from "../../utils/constants";
import CustomTextField from "../CustomTextField";
import autoCompleteStyle from "./autocompleteStyle";
import cx from "classnames";
import humps from "humps";

const useStyles = makeStyles(autoCompleteStyle);

const Autocomplete = ({
  options: receivedOptions,
  defaultOptions,
  loadOptions,
  loading: receivedLoading,
  loadingText,
  getOptionLabel,
  onChange,
  onInputChange,
  creatable,
  onMenuOpen,
  onClose,
  value,
  isMultiSelection,
  withCheckboxes,
  isClearable,
  disabled,
  simpleValue,
  label,
  valueKey,
  labelKey,
  error,
  helperText,
  required,
  createdLabel,
  typographyContentColor,
  inputSelectedColor,
  isSearchable,
  getOptionDisabled,
  placeholder,
  ...other
}) => {
  const classes = useStyles();

  const typographyClasses = cx({
    [classes[`color${humps.pascalize(typographyContentColor)}`]]:
      typographyContentColor !== "initial"
  });

  const [options, setOptions] = useState(receivedOptions);
  const [asyncOptions, setAsyncOptions] = useState(
    is(Array, defaultOptions) ? defaultOptions : emptyArray
  );

  const [localLoading, setLocalLoading] = useState(false);
  const loading = receivedLoading || localLoading;

  const [localInput, setLocalInput] = useState();
  const [optionsLoaded, setOptionsLoaded] = useState(false);

  const disabledOptions = getOptionDisabled
    ? options.filter(getOptionDisabled)
    : emptyArray;
  const disabledValues = disabledOptions.map(prop(valueKey));
  const isValueDisabled = getOptionDisabled
    ? any(equals(value), disabledValues)
    : false;

  const handleLoadOptions = useCallback(
    input => {
      if (loadOptions) {
        setLocalLoading(true);
        loadOptions(input).then(loadedOptions => {
          setAsyncOptions(loadedOptions || emptyArray);
          setLocalLoading(false);
          setOptionsLoaded(true);
        });
      }
    },
    [loadOptions]
  );

  const handleMenuOpen = useCallback(() => {
    !optionsLoaded && handleLoadOptions(localInput);
    onMenuOpen && onMenuOpen();
  }, [handleLoadOptions, localInput, onMenuOpen, optionsLoaded]);

  const handleMenuClose = useCallback(() => {
    setLocalInput(emptyString);
    onClose && onClose();
  }, [onClose]);

  const renderInput = useCallback(
    params => {
      params.inputProps.className = `${params.inputProps.className} ${classes.input}`;
      if (inputSelectedColor)
        params.inputProps.style = { color: inputSelectedColor };
      params.inputProps.readOnly = !isSearchable;

      const textFieldProps = {
        label,
        error,
        helperText,
        required,
        placeholder
      };

      return (
        <CustomTextField
          fullWidth
          {...params}
          startAdornment={params.InputProps.startAdornment}
          endAdornment={params.InputProps.endAdornment}
          {...textFieldProps}
          InputProps={{ ...params.InputProps, margin: "none" }}
          InputLabelProps={{
            ...params.InputLabelProps,
            margin: null,
            classes: { root: classes.labelRoot, shrink: classes.labelShrink }
          }}
        />
      );
    },
    [
      classes.input,
      classes.labelRoot,
      classes.labelShrink,
      inputSelectedColor,
      isSearchable,
      label,
      error,
      helperText,
      required,
      placeholder
    ]
  );

  const handleOptionLabel = useCallback(
    option => {
      if (getOptionLabel) return getOptionLabel(option);
      if (isStringOrNumber(option)) return option.toString();

      const label = findFirstNotNil([labelKey, valueKey], option);
      return label?.toString() ?? emptyString;
    },
    [getOptionLabel, labelKey, valueKey]
  );

  const renderOption = useCallback(
    (option, { selected }) => {
      const optionLabel = handleOptionLabel(option);

      return (
        <Option
          createdLabel={option._createdOption ? createdLabel : emptyString}
          optionLabel={optionLabel}
          selected={selected}
          withCheckboxes={withCheckboxes}
        />
      );
    },
    [handleOptionLabel, createdLabel, withCheckboxes]
  );

  const renderTags = useCallback(
    (value, getTagProps) =>
      value.map((option, index) => (
        <Chip
          key={index}
          label={handleOptionLabel(option)}
          {...getTagProps({ index })}
          disabled={getOptionDisabled && getOptionDisabled(option)}
        />
      )),
    [getOptionDisabled, handleOptionLabel]
  );

  const getOptionSelected = useCallback(
    (option, value) =>
      simpleValue
        ? option[valueKey] === value[valueKey]
        : equals(option, value),
    [simpleValue, valueKey]
  );

  const handleChange = useCallback(
    (event, inputValue, reason) => {
      // when multi-value and clearable, doesn't clear disabled options that have already been selected
      if (reason === "clear" && getOptionDisabled && isMultiSelection) {
        return onChange(
          computeChangedMultiValue(
            disabledOptions,
            simpleValue,
            valueKey,
            labelKey
          )
        );
      }

      setLocalInput(handleOptionLabel(inputValue));
      // for multi-value Autocomplete, options dialog remains open after selection and we do not want to display a loading state
      loadOptions && !isMultiSelection && setLocalLoading(true);

      if (isNil(inputValue) || isStringOrNumber(inputValue))
        return onChange(inputValue);

      if (isMultiSelection) {
        return onChange(
          computeChangedMultiValue(inputValue, simpleValue, valueKey, labelKey)
        );
      }

      return onChange(
        computeChangedSingleValue(inputValue, simpleValue, valueKey, labelKey)
      );
    },
    [
      disabledOptions,
      getOptionDisabled,
      handleOptionLabel,
      isMultiSelection,
      labelKey,
      loadOptions,
      onChange,
      simpleValue,
      valueKey
    ]
  );

  const handleInputChange = useCallback(
    (event, value) => {
      setLocalInput(value ? value : emptyString);
      onInputChange && onInputChange(event, value);

      // this prevents the component from calling loadOptions again when the user clicks outside it and the menu closes
      if (event?.nativeEvent?.type === "focusout") {
        setOptionsLoaded(false);
        return;
      }

      if (loadOptions) {
        setLocalLoading(true);
        handleLoadOptions(value);
      }
    },
    [handleLoadOptions, loadOptions, onInputChange]
  );

  useEffect(() => {
    // when simpleValue is false, loadOptions has already been called at this point by handleInputChange
    if (!simpleValue || !loadOptions) return;
    if (is(Array, defaultOptions) && !isEmpty(defaultOptions)) return;
    if (defaultOptions === false) return;

    const hasInitialValue = is(Array, value) ? !isEmpty(value) : value;
    // when simpleValue is true, we need to previously load a set of options in order to match the value with one of them
    if (defaultOptions === true || hasInitialValue) {
      handleLoadOptions();
    }
    // this effect should run only at component mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setOptions(receivedOptions || emptyArray);
  }, [receivedOptions]);

  return (
    <MuiAutocomplete
      size="small"
      classes={{
        noOptions: `${classes.noOptionsMessage} ${typographyClasses}`
      }}
      forcePopupIcon
      label={label}
      disabled={disabled || isValueDisabled}
      loading={loading}
      loadingText={loadingText}
      onOpen={handleMenuOpen}
      onClose={handleMenuClose}
      clearOnBlur={!creatable}
      options={
        loading
          ? emptyArray
          : loadOptions
          ? asyncOptions
          : options || emptyArray
      }
      autoHighlight
      handleHomeEndKeys
      selectOnFocus
      disableCloseOnSelect={isMultiSelection}
      filterSelectedOptions={simpleValue && isMultiSelection && !withCheckboxes}
      filterOptions={filterOptions(labelKey, valueKey, creatable, createdLabel)}
      getOptionLabel={handleOptionLabel}
      getOptionSelected={getOptionSelected}
      getOptionDisabled={getOptionDisabled}
      value={
        simpleValue
          ? getSimpleValue(
              loadOptions ? asyncOptions : options,
              value,
              valueKey,
              isMultiSelection
            )
          : value
      }
      multiple={isMultiSelection}
      onChange={handleChange}
      onInputChange={handleInputChange}
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
  options: emptyArray,
  defaultOptions: emptyArray,
  isMultiSelection: false,
  isSearchable: true,
  withCheckboxes: false,
  isClearable: false,
  disabled: false,
  simpleValue: false,
  valueKey: "id",
  labelKey: "name",
  error: false,
  required: false,
  value: null,
  creatable: false,
  typographyContentColor: "textSecondary",
  loadingText: <LinearProgress />,
  noOptionsText: "No options"
};

Autocomplete.propTypes = {
  /**
   * The array of options from which the client can select a value.
   */
  options: PropTypes.array,
  /**
   * Function that returns a promise, which resolves to the set of options to be used once the promise resolves.
   */
  loadOptions: PropTypes.func,
  /**
   * If true, the component is in a loading state.
   * By default, this shows a linear progress instead of options.
   * This can be changed by sending the loadingText prop to Autocomplete.
   */
  loading: PropTypes.bool,
  /**
   * Text/component to display when in a loading state.
   */
  loadingText: PropTypes.node,
  /**
   * Text to display when there are no options.
   */
  noOptionsText: PropTypes.node,
  /**
   * Used to determine the string value for a given option.
   */
  getOptionLabel: PropTypes.func,
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
   * Callback fired when the input value changes.
   */
  onInputChange: PropTypes.func,
  /**
   * Handle the menu opening.
   */
  onMenuOpen: PropTypes.func,
  /**
   * Handle the menu closing.
   */
  onClose: PropTypes.func,
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
   * If false, the user cannot type in Autocomplete, filter options or create new ones.
   */
  isSearchable: PropTypes.bool,
  /**
   * If true, the Autocomplete is free solo, meaning that the user input is not bound to provided options and can add
   * his own values.
   */
  creatable: PropTypes.bool,
  /**
   * If true, the Autocomplete is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Used to determine the disabled state for a given option.
   */
  getOptionDisabled: PropTypes.func,
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
   * The content of the helper under the input.
   */
  helperText: PropTypes.node,
  /**
   * If true, the helper text is displayed when an error pops up.
   */
  error: PropTypes.bool,
  /**
   * Text to be displayed as a placeholder in the text field.
   */
  placeholder: PropTypes.string,
  /**
   * Marks the input field as required (with an *).
   */
  required: PropTypes.bool,
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

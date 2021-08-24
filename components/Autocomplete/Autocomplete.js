import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import autoCompleteStyles from "./autocompleteStyle";
import cx from "classnames";
import MuiAutocomplete, {
  createFilterOptions
} from "@material-ui/lab/Autocomplete";
import { Chip, makeStyles, Checkbox, deprecatedPropType } from "@material-ui/core";
import { CheckBoxOutlineBlank, CheckBox } from "@material-ui/icons";
import CustomTextField from "../CustomTextField";
import Typography from "../Typography";
import { flatten, prop, map, innerJoin, find, propEq, has, all, omit, contains, is, props, isNil, length } from "ramda";
import humps from "humps";
import { emptyArray, emptyString } from "../../utils/constants";

const useStyles = makeStyles(autoCompleteStyles);

const flattenOptions = options => {
  const hasGroups = all(has("options"), options);
  return hasGroups ? flatten(map(prop("options"), options)) : options;
};

const hasStringOptions = options => all(is(String), flattenOptions(options));

const filter = createFilterOptions();
const filterOptions = (labelKey, valueKey, creatable, createdLabel) => (
  options,
  params
) => {
  const filtered = filter(options, params);
  // Suggest the creation of a new value
  if (creatable && params.inputValue !== "") {
    filtered.push(
      hasStringOptions(options)
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
  if (isMultiSelection && !is(Array, value)) return emptyArray;

  const flatOptions = flattenOptions(options);

  if (!all(is(Object), flatOptions)) return value;

  // Add new options if the Autocomplete is multiSelection and creatable
  if (is(Array, value)) {
    const flattenOptionsSimpleValues = map(prop(valueKey), flatOptions);
    value?.map(v => {
      if (!contains(v, flattenOptionsSimpleValues))
        flatOptions.push({ [valueKey]: v });
    });
  }

  const result = isMultiSelection
    ? innerJoin((o, v) => o[valueKey] === v, flatOptions, value)
    : find(propEq(valueKey, value), flatOptions);

  return result || null;
};

const getOptionLabel = labelKey => option => {
  if (is(String, option)) return option;
  return prop(labelKey, option) || emptyString;
};

const getOptionSelected = (option, value) => {
  return is(String, option)
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
  isSearchable,
  ...other
}) => {
  const classes = useStyles();

  const typographyClasses = cx({
    [classes[`color${humps.pascalize(typographyContentColor)}`]]:
      typographyContentColor !== "initial"
  });

  const [options, setOptions] = useState(
    receivedOptions || (is(Array, defaultOptions) && defaultOptions)
  );

  const handleOpen = useCallback(() => {
    if (loadOptions && options.length === (length(defaultOptions) || 0))
      loadOptions().then(loadedOptions => {
        setOptions(loadedOptions || emptyArray);
      });

    onMenuOpen && onMenuOpen();
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
          startAdornment={params.InputProps.startAdornment}
          endAdornment={params.InputProps.endAdornment}
          {...textFieldProps}
        />
      );
    },
    [classes.input, error, helperText, inputSelectedColor, label]
  );

  const renderOption = useCallback(
    (option, { selected }) => {
      const optionLabel = is(String, option)
        ? option
        : find(
            x => !isNil(x),
            props(["createdLabel", labelKey, valueKey], option)
          );
      return withCheckboxes ? (
        <>
          <Checkbox
            icon={<CheckBoxOutlineBlank fontSize="small" />}
            checkedIcon={<CheckBox fontSize="small" />}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {optionLabel}
        </>
      ) : (
        <Typography className={classes.input}>{optionLabel}</Typography>
      );
    },
    [classes.input, labelKey, valueKey, withCheckboxes]
  );

  const renderTags = useCallback(
    (value, getTagProps) =>
      value.map((option, index) => (
        <Chip
          key={index}
          label={
            is(String, option)
              ? option
              : find(
                  x => !isNil(x),
                  props(["primitiveValue", labelKey, valueKey], option)
                )
          }
          {...getTagProps({ index })}
        />
      )),
    [labelKey, valueKey]
  );

  const handleChange = useCallback(
    (event, inputValue) => {
      if (!inputValue) return onChange(inputValue);
      if (is(String, inputValue)) return onChange(inputValue);

      if (isMultiSelection)
        return onChange(
          simpleValue
            ? inputValue.map(a =>
                is(String, a)
                  ? a
                  : find(
                      x => !isNil(x),
                      props([valueKey, labelKey, "primitiveValue"], a)
                    )
              )
            : inputValue.map(a =>
                is(String, a)
                  ? a
                  : prop("primitiveValue", a) || omit(["createdLabel"], a)
              )
        );

      if (simpleValue)
        return onChange(
          prop(valueKey, inputValue) || prop(labelKey, inputValue)
        );

      return onChange(
        prop("primitiveValue", inputValue) || omit(["createdLabel"], inputValue)
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
      size="small"
      classes={{
        noOptions: `${classes.noOptionsMessage} ${typographyClasses}`
      }}
      forcePopupIcon
      label={label}
      disabled={disabled}
      onOpen={handleOpen}
      options={options || emptyArray}
      autoHighlight
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
  options: emptyArray,
  defaultOptions: emptyArray,
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
  isSearchable: deprecatedPropType(PropTypes.bool),
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

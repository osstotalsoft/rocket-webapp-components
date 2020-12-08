/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import AsyncCreatableSelect from 'react-select/async-creatable';
import AsyncSelect from 'react-select/async';
import { Paper, MenuItem, TextField, ListItem, ListItemIcon, ListItemText, Checkbox, makeStyles, InputAdornment } from '@material-ui/core';
import Typography from '../Typography';
import autoCompleteStyles from "./autocompleteStyle"
import { isArray } from 'util';
import { curry, flatten, prop, map, innerJoin, find, propEq, has, all } from 'ramda';
import Search from '@material-ui/icons/Search';
import cx from "classnames";

const useStyles = makeStyles(autoCompleteStyles);

function NoOptionsMessage({ selectProps, innerProps, children }) {
  return (
    <Typography
      color={selectProps.typographyProps.color}
      className={selectProps.classes.noOptionsMessage}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function controlHasValue(selectProps) {
  if (selectProps.inputValue.length > 0) {
    return true;
  }
  if (selectProps.value === null || selectProps.value === undefined) {
    return false;
  }
  if (isArray(selectProps.value) && selectProps.value.length === 0) {
    return false;
  }

  return true;
}

function Control({ selectProps, innerRef, children, innerProps }) {

  const inputProps = {
    inputComponent,
    inputProps: {
      className: selectProps.classes.input,
      inputRef: innerRef,
      children: children,
      ...innerProps,
    },
    endAdornment: (
      <InputAdornment>
        <Search />
      </InputAdornment>)
  }

  if (!selectProps.isSearchable) {
    delete inputProps.endAdornment;
  }

  return (
    <TextField
      fullWidth
      InputProps={inputProps}
      InputLabelProps={{
        shrink: controlHasValue(selectProps),
        style: { fontSize: 'inherit' }
      }}
      value={selectProps.value ? selectProps.getOptionValue(selectProps.value) : null}
      {...selectProps.textFieldProps}
    />
  );
}

function Option({ innerRef, isFocused, isSelected, innerProps, children }) {
  return (
    <MenuItem
      buttonRef={innerRef}
      selected={isFocused}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
        fontSize: "14px"
      }}
      {...innerProps}
    >
      {typeof children === 'function' ? children() : children}
    </MenuItem>
  );
}

const MultiOption = props => (
  <ListItem dense button selected={props.isSelected} {...props.innerProps}>
    <ListItemIcon>
      <Checkbox
        edge="start"
        checked={props.isSelected}
        tabIndex={-1}
        disableRipple
      />
    </ListItemIcon>
    <ListItemText primary={props.label} />
  </ListItem>

);

function Placeholder({ selectProps, innerProps, children }) {
  return (
    <Typography
      color={selectProps.typographyProps.color}
      className={selectProps.classes.placeholder}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

function SingleValue({ selectProps, innerProps, children }) {
  return (
      <Typography style={{ color: selectProps.inputSelectedColor }} className={selectProps.classes.singleValue}{...innerProps}>
          {typeof children === 'function' ? children() : children}
      </Typography>
  );
}

function ValueContainer({ selectProps, children }) {
  return <div className={selectProps.classes.valueContainer}>{children}</div>;
}

function MultiValueDisplay(text) {
  return (
    <span key={text}>
      {text}
    </span>
  );
}

function MultiValueContainer({ selectProps, children }) {

  let elements = Object.assign([], children);
  if (children.length > 0 && children[0] && children[0].length > 1) {
    elements[0] = MultiValueDisplay(`(${children[0].length} selected)`);
  }

  return <div className={selectProps.classes.valueContainer}>{elements}</div>;
}


function MultiValue(props) {
  return (
    <span>{props.children}</span>
  );
}

function Menu({ selectProps, innerProps, children }) {
  return (
    <Paper square className={selectProps.classes.paper} {...innerProps}>
      {children}
    </Paper>
  );
}

function IndicatorSeparator() {
  return (<span />);
}

export const getSimpleValue = (options, value, valueKey, isMultiSelection) => {
  if (isMultiSelection && !Array.isArray(value))
    return null;

  const hasGroups = all(has("options"), options)

  const flattenOptions = hasGroups
    ? flatten(map(prop("options"), options))
    : options

  const result = isMultiSelection
    ? innerJoin((o, v) => o[valueKey] === v, flattenOptions, value)
    : find(propEq(valueKey, value), flattenOptions)
  return result;
}

function DropdownIndicator() {
  return (<span />);
}

const formatCreateLabel = curry((createdLabel, text) => createdLabel.concat(text))

function Autocomplete({ options, defaultOptions, loadOptions, onChange,
  creatable, onMenuOpen, value, isMultiSelection, isClearable,
  isSearchable, disabled, simpleValue, label, valueKey, labelKey,
  error, helperText, createdLabel, typographyContentColor, inputSelectedColor, ...other }) {
  const classes = useStyles();

  const handleOnChange = useCallback(inputValue => {
    if (simpleValue && inputValue) {
      if (isMultiSelection) {
        return onChange(inputValue.map(a => a[valueKey]))
      } else {
        return onChange(inputValue[valueKey])
      }
    }

    return onChange(inputValue)
  }, [isMultiSelection, onChange, simpleValue, valueKey])

  const getNewOptionData = useCallback((inputValue, optionLabel) => ({
    [labelKey]: optionLabel,
    [valueKey]: undefined
  }), [labelKey, valueKey])

  const Comp = loadOptions ? creatable ? AsyncCreatableSelect : AsyncSelect : Select;
  const loadOptionsAsync = useCallback(input => {
    return loadOptions(input)
  }, [loadOptions])

  const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option: isMultiSelection ? MultiOption : Option,
    Placeholder,
    SingleValue,
    ValueContainer: isMultiSelection ? MultiValueContainer : ValueContainer,
    IndicatorSeparator,
  }

  if (isSearchable) {
    components.DropdownIndicator = DropdownIndicator;
  }

  return (
    <Comp
      {...other}
      classes={classes}
      styles={classes.selectStyles}
      options={options}
      loadOptions={loadOptionsAsync}
      defaultOptions={defaultOptions}
      components={components}
      closeMenuOnSelect={isMultiSelection ? false : true}
      value={simpleValue ? getSimpleValue(options, value, valueKey, isMultiSelection) : value}
      onChange={handleOnChange}
      onMenuOpen={onMenuOpen}
      textFieldProps={{
        label: label,
        error: error,
        helperText: helperText
      }}
      typographyProps={{
        color: typographyContentColor
      }}
      multiValueRemove={false}
      creatable={creatable}
      hideSelectedOptions={false}
      placeholder={null}
      isMulti={isMultiSelection}
      isClearable={isClearable}
      isSearchable={isSearchable}
      isDisabled={disabled}
      getOptionLabel={prop(labelKey)}
      getOptionValue={prop(valueKey)}
      formatCreateLabel={formatCreateLabel(createdLabel)}
      getNewOptionData={getNewOptionData}
      inputSelectedColor={inputSelectedColor}
    />
  )
}

Autocomplete.defaultProps = {
  options: [],
  isMultiSelection: false,
  isClearable: false,
  isSearchable: false,
  disabled: false,
  simpleValue: false,
  valueKey: "id",
  labelKey: "name",
  label: " ",
  error: false,
  value: null,
  creatable: false,
  typographyContentColor: "textSecondary",
  inputSelectedColor: "black"
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
  * Handle change events on the select.
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
  * If true, the user can clear the selected value.
  */
  isClearable: PropTypes.bool,
  /**
  * If true, the search functionality is enabled.
  */
  isSearchable: PropTypes.bool,
  /**
  * If true, the Select is disabled.
  */
  disabled: PropTypes.bool,
  /**
  * @TODO
  */
  simpleValue: PropTypes.bool,
  /**
  * Label to be displayed in the heading component.
  */
  label: PropTypes.string,
  /**
  * The key of values from options.
  * @TODO
  */
  valueKey: PropTypes.string,
  /**
  * @TODO
  */
  labelKey: PropTypes.string,
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
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'error'
  ]),
  /**
  * The color of selected input.
  */
  inputSelectedColor: PropTypes.string
};

export default Autocomplete;
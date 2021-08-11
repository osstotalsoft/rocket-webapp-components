import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Switch } from "@material-ui/core";
import AutoComplete from "../Autocomplete";
import CustomTextField from "../CustomTextField";
import { emptyArray, emptyString } from "../../utils/constants";

function DynamicInput({ controlType, onChange, loadOptions, value, DefaultComp, defaultCompProps, ...other }) {
  const [comboOptions, setComboOptions] = useState(emptyArray);

  const comboOpen = useCallback(async () => {
    if (comboOptions.length === 0) {
      const options = await loadOptions();

      setComboOptions(
        options.map(option => {
          return { option: option.value };
        })
      );
    }
  }, [comboOptions.length, loadOptions])

  const onInputChange = useCallback(event => {
    onChange(event.target.value);
  }, [onChange])

  const onSelectionChange = useCallback(inputValue => {
    onChange(inputValue.option);
  }, [onChange])

  const onPropertyChange = useCallback(inputValue => {
    onChange(inputValue);
  }, [onChange])

  const onCheckboxPropertyChange = useCallback((_, inputValue) => {
    onChange(inputValue);
  }, [onChange])

  const integer = <CustomTextField
    isNumeric={true}
    value={value || emptyString}
    onChange={onPropertyChange}
    fullWidth
    {...other}
  />;
  const numericField = <CustomTextField
    onChange={onPropertyChange}
    isNumeric={true}
    fullWidth
    inputProps={{ decimalScale: 0, thousandSeparator: emptyString }}
    value={value || emptyString}
    {...other} />;
  const comboField = <AutoComplete {...other}
    fullWidth
    labelKey="option"
    valueKey="option"
    value={{ option: value }}
    onChange={onSelectionChange}
    options={comboOptions}
    onMenuOpen={comboOpen}
  />;
  const boolField = <FormControlLabel
    control={
      <Switch
        {...other}
        checked={value}
        onChange={onCheckboxPropertyChange} />
    }
  />
  const stringField = <CustomTextField onChange={onInputChange}
    fullWidth
    value={value || emptyString}
    {...other} />;

  const defaultField = <DefaultComp
    value={value || ""}
    onChange={onInputChange}
    {...defaultCompProps}
  />

  switch (controlType) {
    case 'INT': return integer;
    case 'NUM': return numericField;
    case 'STR': return stringField;
    case 'CLST': return comboField;
    case 'VCLST': return comboField;
    case 'BOOL': return boolField;
    default:
      return defaultField;
  }
}

DynamicInput.defaultProps = {
  DefaultComp: CustomTextField,
  defaultCompProps: { fullWidth: true, disabled: true }
};

DynamicInput.propTypes = {
  /**
  * The title of button.
  */
  controlType: PropTypes.oneOf([
    'INT',
    'NUM',
    'STR',
    'CLST',
    'VCLST',
    'BOOL'
  ]),
  /**
  * Callback fired when the value is changed.
  *
  * @param {object} event The event source of the callback.
  * You can pull out the new value by accessing `event.target.value` (string).
  */
  onChange: PropTypes.func.isRequired,
  /**
  * Load the options.
  */
  loadOptions: PropTypes.func,
  /**
  * The value of the `input` element, required for a controlled component.
  */
  value: PropTypes.any,
  /**
  * The default component.
  */
  DefaultComp: PropTypes.func,
  /**
  * The default props of the default component.
  */
  defaultCompProps: PropTypes.any
};

export default DynamicInput;
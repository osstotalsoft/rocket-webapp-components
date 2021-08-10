import { InputAdornmentProps } from "@material-ui/core";
import { StandardTextFieldProps, FilledTextFieldProps, OutlinedTextFieldProps } from "@material-ui/core/TextField";
import React from "react";

export interface Props {
    /**
     * Override or extend the styles applied to the component.
     */
    className?: string
    /**
     * @default false
     * If true, the input will take up the full width of its container.
     */
    fullWidth?: boolean
    /**
     * The variant to use.
     */
    variant?: 'filled' | 'outlined' | 'standard'
    /**
     * If dense or normal, will adjust vertical spacing of this and contained components.
     */
    margin?: 'dense' | 'normal' | 'none'
    /**
     * @default false
     * If true, the label is displayed as required and the input element` will be required.
     */
    required?: boolean
    /**
     * @default false
     * If true, a textarea element will be rendered instead of an input.
     */
    multiline?: boolean
    /**
     * Minimum number of rows to display when multiline option is set to true.
     */
    minRows?: number | string
    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    maxRows?: number | string
    /**
     * @default false
     * If true, the input will accept only numeric values.
     */
    isNumeric?: boolean
    /**
     * Other properties you can provide to the Input component.
     */
    customInputProps?: Object
    /**
     * Attributes applied to the input element.
     */
    inputProps?: Object
    /**
     * The short hint displayed in the input before the user enters a value.
     */
    placeholder?: string
    /**
     * The adornment of componenent. (Usually an InputAdornment from material-ui)
     */
    endAdornment?: InputAdornmentProps
    /**
     * Start adornment of componenent. (Usually an InputAdornment from material-ui)
     */
    startAdornment: InputAdornmentProps
    /**
     * The label content.
     */
    label?: React.ReactNode
    /**
     * Props applied to the InputLabel element.
     */
    InputLabelProps?: Object
    /**
     * The value of the `input` element, required for a controlled component.
     */
    value?: unknown
    /**
     * The default value of the input element.
     */
    defaultValue?: unknown
    /**
     * @default false
     * If true, the input element will be disabled.
     */
    disabled?: boolean
    /**
     * @default false
     * If true, the label will be displayed in an error state.
     */
    error?: boolean
    /**
     * The helper text content.
     */
    helperText?: React.ReactNode
    /**
     * Callback fired when the value is changed.
     * @default  () => { }
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value` (string).
     */
    onChange?: (object: Object) => void
    /**
     * @default 0
     * The delay of debouncing.
     */
    debounceBy?: number
    /**
     * The current language, preferably taken from the i18next (i18.language) or another internationalization library
     */
    language: string
}

export type CustomTextFieldProps = Props | StandardTextFieldProps | FilledTextFieldProps | OutlinedTextFieldProps;

/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/custom-text-field
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/CustomTextField/CustomTextField.js
 * 
 * Material-UI component used:
 * 
 * - TextField: https://material-ui.com/api/text-field/
 * 
 */
export default function CustomTextField(props: CustomTextFieldProps): JSX.Element;
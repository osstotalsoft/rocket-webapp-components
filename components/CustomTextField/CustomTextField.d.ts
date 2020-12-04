import { InputAdornmentProps } from "@material-ui/core";
import { StandardTextFieldProps, FilledTextFieldProps, OutlinedTextFieldProps } from "@material-ui/core/TextField";

export interface Props {
    /**
    * Override or extend the styles applied to the component.
    */
    className?: string
    /**
    * @default false
    * If true, the input will accept only numeric values.
    */
    isNumeric?: boolean
    /**
    * Other properties you can provide to the component. Chech here: https://github.com/s-yadav/react-number-format 
    * Please see the example provided in the documentation.
    */
    customInputProps?: Object
    /**
    * The adornment of componenent. (Usually an InputAdornment from material-ui)
    */
    endAdornment?: InputAdornmentProps
    /**
    * Start adornment of componenent. (Usually an InputAdornment from material-ui)
    */
    startAdornment: InputAdornmentProps
    /**
    * Props applied to the InputLabel element.
    */
    InputLabelProps?: Object
    /**
    * The value of the `input` element, required for a controlled component.
    */
    value?: unknown;
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
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/CustomTextField/CustomTextField.js
 */
export default function CustomTextField(props: CustomTextFieldProps): JSX.Element;
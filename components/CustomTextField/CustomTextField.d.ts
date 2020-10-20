import { InputAdornmentProps } from "@material-ui/core";

export interface CustomTextFieldProps {
    /**
    * Override or extend the styles applied to the component.
    */
    className?: string
    /**
    * If true, the input will accept only numeric values.
    *  @default false
    */
    isNumeric?: boolean
    /**
    * Other properties you can provide the component with.
    */
    customInputProps?: Object
    /**
    * The adornment of componenent. (Usually an InputAdornment from material-ui)
    */
    endAdornment?: InputAdornmentProps
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
    *
    * @param {object} event The event source of the callback.
    * You can pull out the new value by accessing `event.target.value` (string).
    *  @default  () => { }
    */
    onChange?: (object: Object) => void
    /**
    * The delay of debouncing.
    * @default 500
    */
    debounceBy?: number
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/custom-text-field
 *
 */
export default function CustomTextField(props: CustomTextFieldProps): JSX.Element;
import { SwitchProps } from "@material-ui/core/Switch";

export interface DynamicInputProps extends SwitchProps {
    /**
    * @default 'N/A''
    * The title of button.
    */
    controlType?: 'INT' |
    'NUM' |
    'STR' |
    'CLST' |
    'VCLST' |
    'BOOL'
    /**
    * Callback fired when the value is changed.
    *
    * @default  () => { }
    * @param {object} event The event source of the callback.
    * You can pull out the new value by accessing `event.target.value` (string).
    */
    onChange: (object: Object) => void
    /**
    * Load the options.
    */
    loadOptions?: () => void
    /**
    * The value of the `input` element, required for a controlled component.
    */
    value?: unknown
    /**
    * @default CustomTextField
    * The default component.
    */
    DefaultComp?: React.ReactNode
    /**
    * @default  { fullWidth: true, disabled: true }
    * The default props of the default component. 
    */
    defaultCompProps?: unknown
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/dynamic-input
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/DynamicInput/DynamicInput.js
 */
export default function DynamicInput(props: DynamicInputProps): JSX.Element;
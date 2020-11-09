import { SwitchProps } from "@material-ui/core/Switch";

export interface DynamicInputProps extends SwitchProps {
    /**
    * The title of button.
    * @default 'N/A''
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
    * @param {object} event The event source of the callback.
    * You can pull out the new value by accessing `event.target.value` (string).
    *  @default  () => { }
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
    * The default component.
    * @default CustomTextField
    */
    DefaultComp?: React.ReactNode
    /**
    * The default props of the default component.
    * @default  { fullWidth: true, disabled: true }
    */
    defaultCompProps?: unknown
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/dynamic-input
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/DynamicInput/DynamicInput.js
 */
export default function DynamicInput(props: DynamicInputProps): JSX.Element;
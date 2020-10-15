export interface DynamicInputProps {
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
 * 
 */
export default function DynamicInput(props: DynamicInputProps): JSX.Element;

export interface OptionTypeBase {
  [key: string]: any;
}

export type OptionsType<OptionType> = ReadonlyArray<OptionType>;

export interface AutocompleteProps {
  /**
   * @default []
   * The array of options from which the client can select a value.
   */
  options?: []
  /**
  * Function that returns a promise, which is the set of options to be used once the promise resolves.
  */
  loadOptions(inputValue: string, callback: (options: OptionsType<OptionType>) => void): void;
  /**
    * @default null
    * The selected value from list of options.
    */
  value?: Object | [] | number | string | boolean
  /**
  * Handle change events on the select.
  */
  onChange: () => void
  /**
  * Handle the menu opening.
  */
  onMenuOpen?: () => void
  /**
   * @default false  
  * If true, the user can select multiple values from list.
  */
  isMultiSelection?: boolean
  /**
  * If true, the user can clear the selected value.
  * @default false  
  */
  isClearable?: boolean
  /**
  * If true, the search functionality is enabled.
  * @default false  
  */
  isSearchable?: boolean
  /**
  * If true, the Select is disabled.
  * @default false  
  */
  disabled?: boolean
  /**
  * @default false
  * @TODO
  */
  simpleValue?: boolean
  /**
  * Label to be displayed in the heading component.
  */
  label?: string
  /**
  * The key of values from options.
  * @default "id"
  * @TODO
  */
  valueKey?: string
  /**
  * @default "name"
  * @TODO
  */
  labelKey?: string
  /**
  * If true, the helper text is displayed when an error pops up.
  * @default false
  */
  error?: boolean
  /**
  * The value of label when a new option is added.
  */
  createdLabel?: string
  /**
  * The default set of options to show before the user starts searching. When set to true, the results for loadOptions('') will be autoloaded.
  */
  defaultOptions?: boolean | Object[]
  /**
  * The color of both the text displayed when there are no options and placeholder. It supports those theme colors that make sense for this component.
  * @default "textSecondary"
  */
  typographyContentColor:
  'initial' |
  'inherit' |
  'primary' |
  'secondary' |
  'textPrimary' |
  'textSecondary' |
  'error'
  /**
  * The color of selected input.
  * @default "black"
  */
  inputSelectedColor:
  "primary" |
  "info" |
  "success" |
  "warning" |
  "danger" |
  "rose" |
  "theme" |
  "white" |
  "black"
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/autocomplete
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/Autocomplete/Autocomplete.js
 */
export default function Autocomplete(props: AutocompleteProps): JSX.Element;
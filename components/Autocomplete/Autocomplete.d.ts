
export interface OptionTypeBase {
  [key: string]: any;
}

export type OptionsType<OptionType> = ReadonlyArray<OptionType>;

export interface AutocompleteProps {
  /**
   * The array of options from which the client can select a value.
   * @default []
   */
  options?: []
  /**
  * Function that returns a promise, which is the set of options to be used once the promise resolves.
  */
  loadOptions(inputValue: string, callback: (options: OptionsType<OptionType>) => void): void;
  /**
    * The selected value from list of options.
    * @default null
    */
  value?: Object | [] | number | string | boolean
  /**
  * Handle change events on the select.
  * This property is required.
  */
  onChange: () => void
  /**
  * Handle the menu opening.
  */
  onMenuOpen?: () => void
  /**
  * If true, the user can select multiple values from list.
  * @default false  
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
  *@todo
  * @default false
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
  * @TODO
  * @default "name"
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
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/autocomplete
 *
 * 
 */
export default function Autocomplete(props: AutocompleteProps): JSX.Element;
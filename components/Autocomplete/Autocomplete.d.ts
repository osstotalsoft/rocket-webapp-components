
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
  * @default false  
  * If true, the user can clear the selected value.
  */
  isClearable?: boolean
  /**
  * @default false  
  * If true, the search functionality is enabled.
  */
  isSearchable?: boolean
  /**
  * @default false  
  * If true, the Select is disabled.
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
  * @default false
  * If true, the helper text is displayed when an error pops up.
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
  * @default "textSecondary"
  * The color of both the text displayed when there are no options and placeholder. It supports those theme colors that make sense for this component.
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
  */
  inputSelectedColor?: string
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/autocomplete
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/tree/master/components/Autocomplete
 */
export default function Autocomplete(props: AutocompleteProps): JSX.Element;
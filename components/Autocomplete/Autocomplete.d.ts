import * as React from "react";
import { PopperProps } from '@material-ui/core/Popper';

interface OptionType {
  [key: string]: any;
}

type OptionsType<OptionType> = ReadonlyArray<OptionType>;

export interface AutocompleteProps {
  /**
   * @default []
   * The array of options from which the client can select a value.
   */
  options: [OptionType | string]
  /**
   * Function that returns a promise, which is the set of options to be used once the promise resolves.
   */
  loadOptions?: (() => Promise<[OptionType | string]>)
  /**
   * @default null
   * The selected value from list of options.
   */
  value?: Object | [] | number | string | boolean
  /**
   * Handle change events on the select.
   */
  onChange: (event: Object, value: T | T[], reason: string) => void
  /**
   * Handle the menu opening.
   */
  onMenuOpen?: () => void
  /**
   * Handle the menu closing.  
   */
  onClose?: () => void
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
   * If true, the value set on change will be set to option[valueKey]/
   * We use this prop when our options are objects.
   * If our options are strings, we do not need to send this prop
   * as this functionality is handled by default.
   */
  simpleValue?: boolean
  /**
   * Label to be displayed in the heading component.
   */
  label?: string
  /**
   * @default "id"
   * The key of values from options.
   */
  valueKey?: string
  /**
   * @default "name"
   * Which property of our option object will be displayed as label.
   */
  labelKey?: string
  /**
   * @default false
   * If true, the helper text is displayed when an error pops up.
   */
  error?: boolean
  /**
   * @default false
   * Marks the input field as required (with an *)
   */
  required?: boolean
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
  /**
   * @default true
   * If true, the portion of the selected suggestion that has not been typed by the user,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   */
  autoComplete?: boolean
  /**
   * @default true
   * If true, the first option is automatically highlighted.
   */
  autoHighlight?: boolean
  /**
   * @default false
   * If true, the selected option becomes the value of the input when the Autocomplete loses focus 
   * unless the user chooses a different option or changes the character string in the input.
   */
  autoSelect?: boolean
  /**
   * @default false
   * Control if the input should be blurred when an option is selected:
   * - false: the input is not blurred. 
   * - true: the input is always blurred. 
   * - 'touch': the input is blurred after a touch event. 
   * - 'mouse': the input is blurred after a mouse event.
   */
  blurOnSelect?: 'mouse' | 'touch' | boolean
  /**
   * Props applied to the Chip element.
   */
  ChipProps?: Object
  /**
   * Override or extend the styles applied to the component. See CSS API below for more details.
   */
  classes?: Object
  /**
   * @default !props.freeSolo
   * If true, the input's text will be cleared on blur if no value is selected. 
   * Set to true if you want to help the user enter a new value. 
   * Set to false if you want to help the user resume his search.
   */
  clearOnBlur?: boolean
  /**
   * @default false
   * If true, clear all values when the user presses escape and the popup is closed.
   */
  clearOnEscape?: boolean
  /**
   * @default 'Clear'
   * Override the default text for the clear icon button. 
   * For localization purposes, you can use the provided translations.
   */
  clearText?: string
  /**
   * @default false
   * If true, the popup will ignore the blur event if the input is filled. 
   * You can inspect the popup markup with your browser tools. 
   * Consider this option when you need to customize the component.
   */
  debug?: boolean
  /**
   * The default input value. Use when the component is not controlled.
   */
  defaultValue?: any
  /**
   * @default false
   * If true, the input can't be cleared.
   */
  disableClearable?: boolean
  /**
   * @default false
   * If true, the popup won't close when a value is selected.
   */
  disableCloseOnSelect?: boolean
  /**
   * @default false
   * If true, will allow focus on disabled items.
   */
  disabledItemsFocusable?: boolean
  /**
   * If true, the list box in the popup will not wrap focus.
   */
  disableListWrap?: boolean
  /**
   * @default false
   * Disable the portal behavior. The children stay within it's parent DOM hierarchy.
   */
  disablePortal?: boolean
  /**
   * A filter function that determines the options that are eligible.
   */
  filterOptions?: () => void
  /**
   * If true, hide the selected options from the list box.
   */
  filterSelectedOptions?: boolean
  /**
   * @default 'auto'
   * Force the visibility display of the popup icon.
   */
  forcePopupIcon?: 'auto' | boolean
  /**
   * If true, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   */
  freeSolo?: boolean
  /**
   * If true, the input will take up the full width of its container.
   */
  fullWidth?: boolean
  /**
   * The label to display when the tags are truncated (limitTags).
   */
  getLimitTagsText?: (more: number) => React.ReactNode
  /**
   * Used to determine the disabled state for a given option.
   */
  getOptionDisabled?: (option: OptionType) => boolean
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if renderOption is not provided).
   */
  getOptionLabel?: (option: OptionType) => string
  /**
   * Used to determine if an option is selected, considering the current value. 
   * Uses strict equality by default.
   */
  getOptionSelected?: (option: OptionType, value: ValueType) => boolean
  /**
   * If provided, the options will be grouped under the returned string. 
   * The groupBy value is also used as the text for group headings when renderGroup is not provided.
   */
  groupBy?: (option: OptionType) => string
  /**
   * @default true
   * If true, the component handles the "Home" and "End" keys when the popup is open. 
   * It should move focus to the first option and last option, respectively.
   */
  handleHomeEndKeys?: boolean
  /**
   * @default false
   * If true, the highlight can move to the input.
   */
  includeInputInList?: boolean
  /**
   * The input value.
   */
  inputValue?: string
  /**
   * @default -1
   * The maximum number of tags that will be visible when not focused. 
   * Set -1 to disable the limit.
   */
  limitTags?: number
  /**
   * @default 'ul'
   * The component used to render the listbox.
   */
  ListboxComponent?: React.ComponentType<React.HTMLAttributes<HTMLElement>>
  /**
   * Props applied to the Listbox element.
   */
  ListboxProps?: object
  /**
   * If true, the component is in a loading state. 
   * By default, this shows a linear progress instead of options. 
   * This can be changed by sending the loadingText prop to Autocomplete.
   */
  loading?: boolean
  /**
   * Text/component to display when in a loading state.
   */
  loadingText?: React.ReactNode
  /**
   * Text to display when there are no options.
   * For localization purposes, you can use the provided translations.
   */
  noOptionsText?: React.ReactNode
  /**
   * Override the default text for the *open popup* icon button.
   */
  openText?: string
  /**
   * The component used to render the body of the popup.
   */
  PaperComponent?: React.ComponentType<React.HTMLAttributes<HTMLElement>>
  /**
   * The component used to position the popup.
   */
  PopperComponent?: React.ComponentType<PopperProps>
  /**
   * The icon to display in place of the default popup icon.
   */
  popupIcon?: React.ReactNode
  /**
   * Render the group.
   */
  renderGroup?: (option: any) => React.ReactNode
  /**
   * Render the input.
   */
  renderInput: (params: Object) => React.ReactNode
  /**
   * Render the option, use `getOptionLabel` by default.
   */
  renderOption?: (option: any, state: Object) => React.ReactNode
  /**
   * Render the selected value.
   */
  renderTags?: (value: T[], getTagProps: function) => React.ReactNode
  /**
   * The size of the autocomplete.
   */
  size?: 'small' | 'medium'
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/autocomplete
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/tree/master/components/Autocomplete
 * 
 * Material-UI components used:
 * 
 * - Autocomplete: https://material-ui.com/api/autocomplete
 * 
 */
export default function Autocomplete(props: AutocompleteProps): JSX.Element;
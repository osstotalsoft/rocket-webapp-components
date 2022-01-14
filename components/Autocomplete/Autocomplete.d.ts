import { AutocompleteProps as MuiAutocompleteProps } from "@material-ui/lab/Autocomplete";

export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> extends MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  /**
   * The content of the helper under the input.
   */
  helperText?: React.ReactNode;
  /**
   * @default false
   * If true, the user can select multiple values from list.
   */
  isMultiSelection?: boolean;
  /**
   * @default false
   * If true, the user can clear the selected value.
   */
  isClearable?: boolean;
  /**
   * @default true
   * If false, the user cannot type in Autocomplete, filter options or create new ones.
   */
  isSearchable?: boolean;
  /**
   * @default false
   * If true, the value set on change will be set to option[valueKey]/
   * We use this prop when our options are objects.
   * If our options are strings, we do not need to send this prop
   * as this functionality is handled by default.
   */
  simpleValue?: boolean;
  /**
   * @default "id"
   * The key of values from options.
   */
  valueKey?: string;
  /**
   * @default "name"
   * Which property of our option object will be displayed as label.
   */
  labelKey?: string;
  /**
   * @default false
   * If true, the helper text is displayed when an error pops up.
   */
  error?: boolean;
  /**
   * The value of label when a new option is added.
   */
  createdLabel?: string;
  /**
   * The default set of options to show before the user starts searching. When set to true, the results for loadOptions('') will be autoloaded.
   */
  defaultOptions?: boolean | object[];
  /**
   * @default "textSecondary"
   * The color of both the text displayed when there are no options and placeholder. It supports those theme colors that make sense for this component.
   */
  typographyContentColor:
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";
  /**
   * The color of selected input.
   */
  inputSelectedColor?: string;
  /**
   * If true, the component is in a loading state.
   * By default, this shows a linear progress instead of options.
   * This can be changed by sending the loadingText prop to Autocomplete.
   */
  loading?: boolean;
  /**
   * Text/component to display when in a loading state.
   */
  loadingText?: React.ReactNode;
  /**
   * Text to display when there are no options.
   * For localization purposes, you can use the provided translations.
   */
  noOptionsText?: React.ReactNode;
  /**
   * The size of the autocomplete.
   */
  size?: "small" | "medium";
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
export default function Autocomplete<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>(
  props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
): JSX.Element;

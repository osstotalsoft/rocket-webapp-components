import { ButtonProps } from '@material-ui/core/Button';

export interface AddButtonProps extends Omit<ButtonProps, 'color'> {
  /**
  * The title of button.
  */
  title?: string
  /**
   * Callback fired when a "click" event is detected.
   */
  onClick?: () => void
  /**
  * If true, the button will be disabled.
  */
  disabled?: boolean
  /**
  * The color of button.
  * @default "themeNoBackground"
  */
  color?: "primary" |
  "info" |
  "theme" |
  "themeNoBackground" |
  "themeWithBackground" |
  "success" |
  "warning" |
  "danger" |
  "rose" |
  "white" |
  "simple" |
  "defaultNoBackground" |
  "primaryNoBackground" |
  "infoNoBackground" |
  "successNoBackground" |
  "warningNoBackground" |
  "dangerNoBackground" |
  "roseNoBackground"
  /**
    * The size of button.
    *  @default "medium"
    */
  size?: "medium" | "small"
  /**
  * The fontSize of button's content.
  *  @default "small"
  */
  fontSize?: "inherit" | "default" | "small" | "large"

}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/add-button
 *
 * 
 */
export default function AddButton(props: AddButtonProps): JSX.Element;
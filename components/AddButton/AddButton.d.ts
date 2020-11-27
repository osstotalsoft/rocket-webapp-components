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
  * @default "theme"
  * The color of button.
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
   *  @default "medium"
   * The size of button. 
    */
  size?: "medium" | "small"
  /**
   *  @default "small"
  * The fontSize of button's content.
  */
  fontSize?: "inherit" | "default" | "small" | "large"
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/add-button
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/AddButton/AddButton.js
 */
export default function AddButton(props: AddButtonProps): JSX.Element;
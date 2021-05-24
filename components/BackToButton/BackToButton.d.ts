import { ButtonProps } from '@material-ui/core/Button';

export interface BackToButtonProps extends Omit<ButtonProps, 'color'> {
  /**
  * The title of button.
  */
  title?: string
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
  * @default "medium"
  * The size of button.
  */
  size?: "medium" | "small"
  /**
  * @default "small"
  * The fontsize of button's content.
  */
  fontSize?: "inherit" | "default" | "small" | "large"
  /**
  * The path where the browser will be directed to when the button is clicked.
  */
  path?: string
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/back-to-button
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/BackToButton/BackToButton.js
 * 
 * Material-UI component used:
 * 
 * - IconButton: https://material-ui.com/api/icon-button/
 * 
 */
export default function BackToButton(props: BackToButtonProps): JSX.Element;
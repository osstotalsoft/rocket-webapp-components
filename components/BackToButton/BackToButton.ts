export interface BackToButtonProps {
  /**
  * The title of button.
  */
  title?: String;
  /**
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
    * The size of button.
    */
  size?: "medium" | "small"
  /**
  * The fontsize of button's content.
  */
  fontSize?: "inherit" | "default" | "small" | "large"
  /**
  * The path where the browser will be directed to when the button is clicked.
  */
  path?: String
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/back-to-button
 *
 * 
 */
export default function BackToButton(props: BackToButtonProps): JSX.Element;
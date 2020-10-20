export interface BackToButtonProps {
  /**
  * The title of button.
  */
  title?: string;
  /**
  * The color of button.
  * @default "themeWithBackground"
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
    * @default "medium"
    */
  size?: "medium" | "small"
  /**
  * The fontsize of button's content.
  * @default "small"
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
 * 
 */
export default function BackToButton(props: BackToButtonProps): JSX.Element;
import { ButtonProps as BaseProps } from '@material-ui/core/Button';

export interface ButtonProps extends Omit<BaseProps, 'color' | 'size'> {
  /**
  * The color of the button.
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
  "roseNoBackground" |
  "white" |
  "simple" |
  "transparent"
  /**
   * If true, rounded corners are enabled.
   */
  round?: boolean
  /**
  * 	The content of the component.
  */
  children?: React.ReactNode
  /**
  * 	If true, the button will take up the full width of its container.
  */
  fullWidth?: boolean
  /**
  * If true, the button will be disabled.
  */
  disabled?: boolean
  /**
  * A custom class provided.
  */
  customClass?: string
  /**
  * If true,  the button's min width will be set to 160px.
  */
  wd?: boolean
  /**
  * If true, the button will be smaller.
  */
  justIcon?: boolean
  /**
  * If true, the button will float to the right.
  */
  right?: boolean
  /**
  * The size of the button.
  */
  size?: "sm" | "lg" | "xs"
  /**
  * The tooltip of the button.
  */
  tooltip?: string

}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/button
 *
 *   Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/Button/Button.js
 */
export default function Button(props: ButtonProps): JSX.Element;
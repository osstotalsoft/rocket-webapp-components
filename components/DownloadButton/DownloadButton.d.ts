import { ButtonProps } from '@material-ui/core/Button';

export interface DownloadButtonProps extends Omit<ButtonProps, 'color'> {
    /**
    * The title of button.
    */
    title?: string;
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
    * @default "medium"
    */
    size?: "medium" | "small"
    /**
    * The fontSize of button's content.
    * @default "default"
    */
    fontSize?: "inherit" | "default" | "small" | "large"
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/delete-button
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/DownloadButton/DownloadButton.js
 */
export default function DeleteButton(props: DownloadButtonProps): JSX.Element;
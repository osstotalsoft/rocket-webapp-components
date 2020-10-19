import { ButtonProps } from '@material-ui/core/Button';

export interface EditButtonProps extends Omit<ButtonProps, 'color' | 'disabled'> {
    /**
    * The title of button.
    */
    title?: String;
    /**
    * Callback fired when a "click" event is detected.
    */
    onClick?: () => void
    /**
    * If true, the button will be disabled.
    */
    disabled?: boolean
    /**
    * If true, the edit icon will be visible.
    * @default true
    */
    editMode?: boolean
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
 * - https://bit.dev/totalsoft_oss/react-mui/edit-button
 *
 * 
 */
export default function EditButton(props: EditButtonProps): JSX.Element;
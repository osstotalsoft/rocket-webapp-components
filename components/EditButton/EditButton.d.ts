import { ButtonProps } from '@material-ui/core/Button';

export interface EditButtonProps extends Omit<ButtonProps, 'color' | 'disabled'> {
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
    * @default true
    * If true, the edit icon will be visible.
    */
    editMode?: boolean
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
    * @default "medium"
    * The fontSize of button's content.
    */
    fontSize?: "inherit" | "small" | "medium" | "large"
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/edit-button
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/EditButton/EditButton.js
 * 
 * Material-UI component used:
 * 
 * - IconButton: https://material-ui.com/api/icon-button/
 * 
 */
export default function EditButton(props: EditButtonProps): JSX.Element;